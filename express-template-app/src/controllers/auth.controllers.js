const { userServices, authServices } = require('../services')
const handleAsync = require('../utils/handleAsync')
const logger = require('../utils/logger')

const register = handleAsync(async (req, res, next) => {
    const {
        name, 
        email,
        role,
        password
    } = req.body
    const { salt, token } = await authServices.encryptPassword(password)
    const user = await userServices.createUser({
        name, 
        email,
        role, 
        token, 
        salt
    })

    logger.info(`User ${user.name} created!`)
    res.status(201).send(user)
}) 

const login = handleAsync(async (req, res, next) => {
    const { email, password } = req.body
    const user = await authServices.loginUser({ email, password })
    const token = authServices.generateAuthToken(user._id, user.role)

    res.status(200).send({
        token
    })
})

module.exports = {
    register,
    login
}