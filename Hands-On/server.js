/*
    Title: Server
    Author: Calin Florescu
    Date: 2023
*/


/* 
  ┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Dependencies                                                                                                    │
  └─────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
 */

const http = require('http')
const url = require('url')
const { StringDecoder } = require('string_decoder')

const { PORT } = require('./config')
const { notFoundHandler } = require('./src/handlers')
const { writeController } = require('./src/controllers')



/* 
  ┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Code                                                                                                            │
  └─────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
 */

const routes = {
    'write': writeController,
    'notFound': notFoundHandler,
    // TODO: Implement this API based on the requirements specified in the presentation
    // 'users': usersController
}

const handleRequests = (req, res) => {
    const { method, headers } = req

    const parsedUrl = url.parse(req.url, true)

    const path = parsedUrl.pathname

    // For the router to work properly we want to remove any trailing slashes from the path
    const trimmedPath = path.replace(/^\/+|\/+$/g, '')

    // The payload of a request comes in as a stream so we need to decode it and generate a string from it
    // We need to this to operate with those values inside the JS code
    const decoder = new StringDecoder('utf-8')
    let buffer = ''

    req.on('data', (data) => {
        buffer += decoder.write(data)
    })

    // Even if there is no payload, the end event will still be called (Don't Worry!)
    req.on('end', () => {
        // A special character will be added at the end of the buffer
        buffer += decoder.end()

        console.log('Path: ', trimmedPath)
        console.log('Method: ', method)
        console.log('Headers: ', headers)
        console.log('Payload: ', buffer)

        // Choose the handler this request should go to. If one is not found use the notFound handler
        // This piece of code can be rewritten using a simple switch, but it's more elegant this way
        const chosenHandler = typeof (routes[trimmedPath]) !== 'undefined' ? routes[trimmedPath] : notFoundHandler

        // Construct the data object to send to the handler based on the data we extracted from the request
        const data = {
            path: trimmedPath,
            method,
            headers,
            payload: buffer
        }

        // Execute the chosen handler
        chosenHandler(data, (statusCode = 200, payload = {}) => {
            // The content of this function is the callback that is executed by the controllers
            const payloadString = JSON.stringify(payload)

            res.setHeader('Content-Type', 'application/json')
            res.writeHead(statusCode)
            res.end(payloadString)
        })
    })
}


const server = http.createServer(handleRequests)

server.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT} now`)
})

/*
  ┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ // If you want to run a HTTPS server, uncomment the code below and create the key.pem and cert.pem files in     │
  │ the https folder                                                                                                │
  │ // Use the openssl command from commands.txt to generate the key and cert files                                 │
  └─────────────────────────────────────────────────────────────────────────────────────────────────────────────────┘
 */

// const https = require('https')
// const fs = require('fs')

// const httpsServerOptions = {
//     'key': fs.readFileSync('./https/key.pem'),
//     'cert': fs.readFileSync('./https/cert.pem')
// }

// const httpsServer = https.createServer(httpsServerOptions, (req, res) => {
//     res.end('Hello World from HTTPS\n')
// })

// httpsServer.listen(3001, () => {
//     console.log('The server is listening on port 3001 now')
// })

