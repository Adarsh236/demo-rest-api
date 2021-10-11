// require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config();

const config = {
  env: process.env.NODE_ENV,
  port: process.env.PORT || process.env.DEV_PORT,
  dockerPort: process.env.DOCKER_PORT,
};

export default config;
