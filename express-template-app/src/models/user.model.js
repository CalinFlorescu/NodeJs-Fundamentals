const { required } = require('@hapi/joi');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    token: {
        type: String,
        required: true,
    },
    salt: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['ADMIN', 'USER'],
        default: 'USER',
        required: true,
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;

