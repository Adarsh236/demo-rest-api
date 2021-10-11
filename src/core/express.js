import express from 'express';
import { urlencoded, json } from 'body-parser';
import compression from 'compression';
import swaggerUi from 'swagger-ui-express';
import helmet from 'helmet';
import CustomResponse from '../helpers/custom-response';
import is404 from '../middleware/is-404';
import swaggerDocument from '../modules/user/user.doc';
import routes from './routes';

const app = express();

app.use(compression()); // compress all responses

// use body-parser middleware
app.use(urlencoded({ extended: false }));
app.use(json());

// secure apps by setting various HTTP headers
app.use(helmet());
// enable CORS - Cross Origin Resource Sharing
//app.use(cors());

// mount all routes on /api path
app.use('/api', routes());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument()));

app.use(is404);

// Catch and send error messages
app.use((err, req, res, next) => {
  if (err) {
    // logger.error(`From App.js file: ${err.message}`);
    if (!err.status) {
      err.status = 500;
    } // Set 500 server code error if status code not set
    return res.status(err.status).json(
      CustomResponse.error(
        {
          message: err.message,
        },
        err.status
      )
    );
  }
  next();
});

module.exports = app;
