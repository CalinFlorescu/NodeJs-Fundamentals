/*
    Description: This module is responsible for handling the write requests.
*/


/* 
  ┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Dependencies                                                                                                    │
  └─────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
 */
const { writeHandler } = require('../handlers')
const { ALLOWED_METHODS } = require('../config')

// We define an async function to handle the write requests
const write = async (data, callback) => {
    const { payload, method } = data

    if (ALLOWED_METHODS[write].indexOf(method) > -1) {
        if (payload) {
            // We wait for the writeHandler to finish and return the result
            // Based on the result we know how to respond to the request
            const result = await writeHandler(payload)

            if (result && result.status === 200) {
                callback(200, result)
            }

            callback(500, result)
        } else {
            console.log('Payload is empty!')
            callback(400, { 'message': 'Payload is empty!' })
        }
    } else {
        console.log('Method not allowed for write!')
        callback(405, { 'message': 'Method not allowed for write!' })
    }
}

module.exports = write