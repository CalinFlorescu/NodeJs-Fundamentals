const Joi = require('@hapi/joi');
const { passwordValidator } = require('./custom.validators');

const register = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().custom(passwordValidator).required(),
    name: Joi.string().required(),
    role: Joi.string().valid('ADMIN', 'USER').required()
})

const login = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().custom(passwordValidator).required()
})

module.exports = {
    register,
    login
}