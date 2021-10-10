import Joi from 'joi';

export default Joi.object().keys({
  name: Joi.string().required(),
  dob: Joi.string().required(),
  address: Joi.string().required(),
  description: Joi.string().required(),
});
