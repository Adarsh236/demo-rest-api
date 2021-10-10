// require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config();

const config = {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 4000,
};

export default config;
