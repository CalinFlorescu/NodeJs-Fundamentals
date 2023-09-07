const {
    getAllUsers,
    getUserSchema,
} = require('./users')

const apiDocumentation = {
    openapi: '3.0.1',
    info: {
            version: '1.0.0',
            title: 'My Template API Documentation',
            description: 'This is a template project',
            contact: {
            name: 'Your Name Here',
            email: 'dev@example.com',
            url: 'https://devwebsite.com',
        },
    },
    servers: [
        {
            url: 'http://localhost:8080/',
            description: 'Local Server',
        },
        {
            url: 'https://my.production.domain.com',
            description: 'Production Server',
        },
    ],
    tags: [
        {
            name: 'Users',
        },
    ],
    paths: {
        users: {
            get: getAllUsers,
        }
    },
    components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
        schemas: {
          getUserSchema,
        },
      },
};

module.exports = apiDocumentation
