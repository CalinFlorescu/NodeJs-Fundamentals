const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

const userServices = require('../services/user.services')
const logger = require('../utils/logger')
const { Api500Error } = require('../utils/errors')

dotenv.config();

const {
    JWT_SECRET,
    JWT_EXPIRATION
} = process.env

const encryptPassword = async (value) => {
    const salt = await bcrypt.genSalt(8)
    const token = await bcrypt.hash(value, salt)
    return {
        token,
        salt
    }
}

const comparePassword = async (password, token) => {
    const passwordMatches = await bcrypt.compare(password, token)
    if (!passwordMatches)
        throw new Api500Error(`Password doesn't match`)
}

const loginUser = async ({
    email,
    password
}) => {
    try {
        const user = await userServices.getUserByEmail(email)
        await comparePassword(password, user.token)

        logger.info(`User ${user.name} logged in!`)
        return user
    } catch (error) {
        logger.error(`Failed logging in user: ${email}`)
        throw new Api500Error('Emai or password not matching.')
    }
}

const generateAuthToken = (userId, role) => {
    const token = jwt.sign({
        userId,
        role
    }, JWT_SECRET, {
        expiresIn: JWT_EXPIRATION
    })

    return token
}

const verifyAuthToken = (token) => {
    const decoded = jwt.verify(token, JWT_SECRET)

    return decoded
}

module.exports ={
    encryptPassword,
    comparePassword,
    loginUser,
    generateAuthToken,
    verifyAuthToken
}