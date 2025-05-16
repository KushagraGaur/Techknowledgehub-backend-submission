const Joi = require('joi');

const signupSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  mobile_number: Joi.string().required(),
  gender: Joi.string().valid('Male', 'Female', 'Other').required(),
  password: Joi.string()
    .min(8)
    .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])'))
    .required()
    .messages({
      'string.pattern.base': 'Password must include 1 uppercase, 1 lowercase, 1 number, and 1 special character',
    }),
  confirm_password: Joi.string().valid(Joi.ref('password')).required(),
});

const signinSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

module.exports = { signupSchema, signinSchema };