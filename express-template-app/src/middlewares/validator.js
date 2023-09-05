const { Api400Error } = require('../utils/errors')

module.exports = schema => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body)

        if (!error) {
            next()
        } else {
            const errorMessage = error.details.map(details => details.message).join(', ')
            next(new Api400Error(errorMessage))
        }
    }
}