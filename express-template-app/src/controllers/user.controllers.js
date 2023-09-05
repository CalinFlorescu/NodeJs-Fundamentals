const { userServices } = require('../services')
const handleAsync = require('../utils/handleAsync')

const listAllUsers = handleAsync(async (req, res) => {
    const result = await userServices.getAllUsers()
    res.send(result)
})

module.exports = {
    listAllUsers
}