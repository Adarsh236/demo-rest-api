import app from './core/express';
import config from './configs/config';
import logger from './logger/api.logger';

//listen for request
app.listen(config.port, () => {
  logger.info('*******API listening*********');
  logger.info(`Server listening path: http://localhost:<${config.port} || docker: 80>/api`);
  logger.info(
    `Documentations path: http://localhost:<${config.port} || docker: ${config.dockerPort}}>/api-docs `
  );
});
