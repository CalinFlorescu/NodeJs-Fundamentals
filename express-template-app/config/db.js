const mongoose = require('mongoose');
const logger = require('../src/utils/logger');

module.exports = () => {
    mongoose.connect("mongodb://admin:password@0.0.0.0:27017/", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    const mongoDbConnection = mongoose.connection;
    mongoDbConnection.on('error', console.error.bind(console, 'connection error: '));
    mongoDbConnection.on('open', () => {
        logger.info('MongoDB Connected!');
    })
}