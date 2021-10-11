import storage from 'node-persist';
import logger from '../logger/api.logger';

const DB = {
  async initialize(path) {
    try {
      await storage.init({
        dir: `../${path}`,
        stringify: JSON.stringify,
        parse: JSON.parse,
        encoding: 'utf8',
        logging: false, // can also be custom logging function
        ttl: false, // ttl* [NEW], can be true for 24h default or a number in MILLISECONDS or a valid Javascript Date object
        expiredInterval: 2 * 60 * 1000, // every 2 minutes the process will clean-up the expired cache

        // in some cases, you (or some other service) might add non-valid storage files to your
        // storage dir, i.e. Google Drive, make this true if you'd like to ignore these files and not throw an error
        forgiveParseErrors: false,
      });
      return storage;
    } catch (err) {
      logger.error('Error connecting to database  ', err);
    }
  },
};

export default DB;
