const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');

const dbConnect = require('./config/db');
const logger = require('./src/utils/logger');
const { BaseError } = require('./src/utils/errors');
const {
    userRoutes,
    authRoutes,
} = require('./src/routes');

const {
    isOperationalError,
    logErrorMiddleware,
    returnErrorMiddleware,
} = require('./src/middlewares/errors');

dotenv.config();

const { PORT } = process.env;

dbConnect();
const app = express();

app.use(bodyParser.json());

app.use(userRoutes);
app.use(authRoutes);

app.use(logErrorMiddleware);
app.use(returnErrorMiddleware);

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
