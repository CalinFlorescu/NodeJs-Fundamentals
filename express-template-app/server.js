const dotenv = require('dotenv');

const dbConnect = require('./config/db');
const logger = require('./src/utils/logger');
const { BaseError } = require('./src/utils/errors');

const app = require('./app');
const {
    isOperationalError,
} = require('./src/middlewares/errors');

dotenv.config();

const { PORT } = process.env;

dbConnect();

process.on('uncaughtException', (error) => {
    logger.error(error)
    
    if (!isOperationalError(error)) {
        process.exit(1)
    }
})

process.on('unhandledRejection', (error) => {
    throw new BaseError(error.message, 500)
})

app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});
