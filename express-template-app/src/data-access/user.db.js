const User = require('../models/user.model')

const findAll = async () => {
    return await User.find()
}

const findById = async ({ id: _id }) => {
    return await User.findById(_id)
}

const findByEmail = async (email) => {
    return await User.findOne({email: email}).clone()
}

const insertUser = async (userData) => {
    return await User.create({ ...userData })
}

module.exports = {
    findAll,
    findById,
    findByEmail,
    insertUser
}