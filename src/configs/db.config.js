import mongoose from 'mongoose';
import logger from '../logger/api.logger';
import config from './config';

const connect = () => {
  // Use ES6 Promises for mongoose
  mongoose.Promise = global.Promise;

  const url = config.mongodb.host;
  logger.info('MONGO_CONNECTION_STRING :::' + url);

  mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.once('open', async () => {
    logger.info('Connected to database');
  });

  mongoose.connection.on('error', (err) => {
    logger.error('Error connecting to database  ', err);
  });

  return mongoose;
};

const disconnect = () => {
  if (!mongoose.connection) {
    return;
  }

  mongoose.disconnect();

  mongoose.once('close', async () => {
    console.log('Diconnected  to database');
  });

  return mongoose;
};

export default connect;
