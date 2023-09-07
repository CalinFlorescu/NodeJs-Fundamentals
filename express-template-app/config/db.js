const mongoose = require('mongoose');
const logger = require('../src/utils/logger');

module.exports = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    const mongoDbConnection = mongoose.connection;
    mongoDbConnection.on('error', console.error.bind(console, 'connection error: '));
    mongoDbConnection.on('open', () => {
        logger.info('MongoDB Connected!');
    })
}