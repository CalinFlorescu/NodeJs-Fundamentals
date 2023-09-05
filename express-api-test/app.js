const dotenv = require('dotenv')
const express = require('express')
const bodyParser = require('body-parser')

const dbConnect = require('./config/db')
const logger = require('./src/utils/logger')
const {
  userRoutes,
  authRoutes
} = require('./src/routes')
const { 
  logErrorMiddleware, 
  returnErrorMiddleware,
  isOperationalError,
  logError
} = require('./src/middlewares/errorHandlers')

dotenv.config()
dbConnect()

const { PORT } = process.env

const app = express()

// Middleware to parse the body of the request in json format
app.use(bodyParser.json())

app.use(userRoutes)
app.use(authRoutes)

app.use(logErrorMiddleware)
app.use(returnErrorMiddleware)

// Catch All Uncaught Exceptions
process.on('uncaughtException', error => {
  logError(error)

  if (!isOperationalError(error)) {
      process.exit(1)
  }
})

// Catch All Unhandled Promise Rejections
process.on('unhandledRejection', error => {
  throw error
})

app.listen(PORT, (err) => {
  // Handle any errors that occur when starting the server and prevent the app from running if there is an error
  if (err) client.close()
  logger.info(`Server is up on port ${PORT}`)
})