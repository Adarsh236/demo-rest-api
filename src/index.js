import app from './core/express';
import config from './configs/config';
import logger from './logger/api.logger';

//listen for request
app.listen(config.port, () => {
  logger.info('*******API listening*********');
  logger.info(`Server listening on the port: ${config.port} || docker: http://localhost:80/`);
  logger.info(`Documentations path http://localhost:${config.port}/api-docs`);
});
