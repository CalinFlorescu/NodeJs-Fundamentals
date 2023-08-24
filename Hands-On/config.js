const dotenv = require('dotenv')

// We call dotenv.config() to load the variables from .env file
dotenv.config()

// All constants should be in caps and snake case
const { PRODUCTION_PORT } = process.env
const PORT = process.env.NODE_ENV === 'production' ? PRODUCTION_PORT : 3000

const ALLOWED_METHODS = {
    'write': ['POST']
}

module.exports = {
    PORT,
    ALLOWED_METHODS
}