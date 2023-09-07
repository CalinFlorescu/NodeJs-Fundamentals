const express = require('express')
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express')

const apiDoc = require('./docs/apidoc')

const {
    userRoutes,
    authRoutes,
} = require('./src/routes')

const {
    logErrorMiddleware,
    returnErrorMiddleware,
} = require('./src/middlewares/errors')

const app = express()

app.use(bodyParser.json())

app.use(userRoutes)
app.use(authRoutes)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(apiDoc))

app.use(logErrorMiddleware)
app.use(returnErrorMiddleware)

module.exports = app