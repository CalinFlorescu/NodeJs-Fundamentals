const { Api500Error, BaseError } = require('../utils/errors');
const userDb = require('../data-access/user.db');
const logger = require('../utils/logger');

const getAllUsers = async () => {
    try {
        const users = await userDb.findAll()
        return users
    } catch(error) {
        logger.error(error)
        throw new Api500Error('Failed searching users')
    }
}

const getUserByEmail = async (email) => {
    try {
        const user = await userDb.findByEmail(email)
        if (!user) {
            logger.error(`User with email ${email} not found`)
            throw new BaseError('User not found')
        }
        return user
    } catch(error) {
        logger.error(error)
        throw new Api500Error(`Failed searching user by email: ${email}`)
    }
}

const checkDuplicateEmail = async (email) => {
    try {
        const user = await userDb.findByEmail(email)
        if (user) {
            throw new BaseError('Email already in use')
        }
    } catch(error) {
        logger.error(`Failed checking for email. ${error}`)
        throw new Api500Error(error)
    }
}

const createUser = async (userData) => {
    try {
        await checkDuplicateEmail(userData.email)
        const user = await userDb.insertUser(userData)
        const { email, name, role } = user
        return {
            email,
            name,
            role, 
        }
    } catch(error) {
        logger.error(error)
        throw new Api500Error(error.message)
    }
}

module.exports = {
    getAllUsers,
    createUser,
    getUserByEmail,
    checkDuplicateEmail
}