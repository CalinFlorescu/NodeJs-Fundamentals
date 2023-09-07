const getAllUsers = {
    tags: ['Users'], // Endpoint belongs to the group Users
    description: 'Get all users',
    operationId: 'getAllUsers',
    security: [
        {
            bearerAuth: [],
        }
    ],
    requestBody: {},
    responses: {
        '200': {
            description: 'All users were obtained',
            content: {
                'application/json': {
                    schema: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/getUserSchema',
                        },
                    },
                },
            },
        },
    }
}

const getUserSchema = {
    type: 'object',
    properties: {
        id: {
            type: 'integer',
            description: 'User ID',
            example: 1,
        },
        name: {
            type: 'string',
            description: 'User name',
            example: 'John Doe',
        },
        email: {
            type: 'string',
            description: 'User email',
            example: 'email@email.com'
        },
        role: {
            type: 'string',
            description: 'User role',
            example: 'ADMIN',
        },
        token: {
            type: 'string',
            description: 'User password',
            example: '123456',
        },
        salt: {
            type: 'string',
            description: 'User salt',
            example: '123456',
        }
    }
}

module.exports = {
    getAllUsers,
    getUserSchema
}