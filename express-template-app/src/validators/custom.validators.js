const passwordValidator = (value, helpers) => {
    if (value.length < 8) 
        return helpers.message('Password must have at least 8 characters.')
    if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) 
        return helpers.message('Password must contain at least one letter and one number')
    return value
}

module.exports = {
    passwordValidator
}