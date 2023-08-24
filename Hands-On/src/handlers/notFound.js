const notFound = (data, callback) => {
    callback(404, { 'message': 'Not found!' })
}

module.exports = notFound