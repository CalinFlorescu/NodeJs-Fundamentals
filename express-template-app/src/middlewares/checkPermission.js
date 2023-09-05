const { Api400Error } = require('../utils/errors')
const logger = require('../utils/logger')

const { authServices } = require('../services')

module.exports = permission => (req, res, next) => {
    const { token } = req.body

    if (!token) {
        logger.error('Token is required to access this resource')
        next(new Api400Error('Token is required to access this resource'))
    } else {
        const { role, userId } = authServices.verifyAuthToken(token)

        if (role !== permission) {
            logger.error(`User ${userId} tried to access a resource without permission`)
            next(new Api400Error('You do not have permission to access this resource'))
        } else {
            next()
        }
    }
}