/*
    Description: This module is responsible for writing data to the file system.
*/

/* 
  ┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Dependencies                                                                                                    │
  └─────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
 */

const path = require('path')
const fs = require('fs').promises

const { genarateRandomNumber } = require('../utils')
const storagePath = path.join(__dirname, '../../data')

/* 
  ┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Code                                                                                                            │
  └─────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
 */

const write = async (payload) => {
    try {
        // File is the file descriptor object that represents the file and contains information about the file.
        const file = await fs.open(`${storagePath}/${genarateRandomNumber()}.json`, 'wx')

        if (!file) {
            console.log('File opening error!')
            throw new Error('File opening error!')
        }

        // Write the payload to the file
        await fs.writeFile(file, payload)

        console.log('File writing success!')
        return { 'message': 'File writing success!', status: 200 }
    } catch (err) {
        // Differentiate between file opening and file writing errors
        if (err.message === 'File opening error!') {
            console.log('Error at file opening: ', err)
            // Status is used in the controllers to set the response status code and also to control what type of response is sent
            return { 'message': 'Error at file opening!', status: 500 }
        } else {
            console.log('Error at file writing: ', err)
            return { 'message': 'Error at file writing!', status: 500 }
        }
    }
}

// We used a default export here because we only have one function to export
module.exports = write

// const fs = require('fs')
// const write = (data, callback) => {
//     const { payload } = data

//     fs.open(`${storagePath}/${genarateRandomNumber()}.json`, 'wx', (err, file) => {
//         if (err) {
//             console.log('Error at file opening: ', err)
//             callback(500, { 'message': 'Error at file opening!' })
//         } else {
//             fs.writeFile(file, payload, (err) => {
//                 if (err) {
//                     console.log('Error at file writing: ', err)
//                     callback(500, { 'message': 'Error at file writing!' })
//                 }

//                 console.log('File writing success!')
//                 callback(200, { 'message': 'File writing success!' })
//             })
//         }
//     })
// }
