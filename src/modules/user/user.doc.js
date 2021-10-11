const UserDoc = () => ({
  swagger: '2.0',
  info: {
    description: 'This is a simple example NodeJS API project to demonstrate Swagger Documentation',
    version: '1.0.0',
    title: 'Demo Rest API',
    contact: {
      email: 'adarshverma11236@gmail.com',
    },
  },
  schemes: ['http'],
  host: 'localhost:4000',
  basePath: '/api',
  paths: {
    '/users': {
      get: {
        summary: 'Get all the users',
        description: 'Get all the users',
        produces: ['application/json'],
        parameters: [],
        responses: {
          200: {
            description: 'successful operation',
            schema: {
              $ref: '#/definitions/MultipleUsersResponse',
            },
          },
          400: {
            description: 'Invalid status value',
            schema: {
              $ref: '#/definitions/InvalidResponse',
            },
          },
        },
      },
      post: {
        summary: 'Save the user',
        description: 'Save the user',
        produces: ['application/json'],
        consumes: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'user object',
            required: true,
            schema: {
              type: 'object',
              properties: {
                user: {
                  type: 'object',
                  $ref: '#/definitions/User',
                },
              },
            },
          },
        ],
        responses: {
          200: {
            description: 'successful operation',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/UsersResponse',
              },
            },
          },
          400: {
            description: 'Invalid status value',
            schema: {
              $ref: '#/definitions/InvalidResponse',
            },
          },
        },
      },
    },
    '/users/{id}': {
      get: {
        summary: 'Get user by id',
        description: 'Get user by id',
        produces: ['application/json'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'user id that needs to be fetch',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'successful operation',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/UsersResponse',
              },
            },
          },
          400: {
            description: 'Invalid status value',
            schema: {
              $ref: '#/definitions/InvalidResponse',
            },
          },
        },
      },
      put: {
        summary: 'Update the users',
        description: 'Update the users',
        produces: ['application/json'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'user id that needs to be deleted',
            required: true,
            type: 'string',
          },
          {
            in: 'body',
            name: 'body',
            description: 'user object',
            required: true,
            schema: {
              type: 'object',
              properties: {
                user: {
                  type: 'object',
                  $ref: '#/definitions/User',
                },
              },
            },
          },
        ],
        responses: {
          200: {
            description: 'successful operation',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/UsersResponse',
              },
            },
          },
          400: {
            description: 'Invalid status value',
            schema: {
              $ref: '#/definitions/InvalidResponse',
            },
          },
        },
      },
      delete: {
        summary: 'Delete the user',
        description: 'Delete the user',
        produces: ['application/json'],
        parameters: [
          {
            name: 'id',
            in: 'path',
            description: 'user id that needs to be deleted',
            required: true,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'successful operation',
            schema: {
              type: 'array',
              items: {
                $ref: '#/definitions/UsersResponse',
              },
            },
          },
          400: {
            description: 'Invalid status value',
            schema: {
              $ref: '#/definitions/InvalidResponse',
            },
          },
        },
      },
    },
  },
  definitions: {
    UsersResponse: {
      type: 'object',
      properties: {
        success: {
          type: 'boolean',
        },
        status: {
          type: 'number',
        },
        data: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
            },
            name: {
              type: 'string',
            },
            dob: {
              type: 'string',
            },
            address: {
              type: 'string',
            },
            description: {
              type: 'string',
            },
            createdAt: {
              type: 'string',
            },
            updatedAt: {
              type: 'string',
            },
          },
        },
      },
    },
    MultipleUsersResponse: {
      type: 'object',
      properties: {
        success: {
          type: 'boolean',
        },
        status: {
          type: 'number',
        },
        data: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
              },
              name: {
                type: 'string',
              },
              dob: {
                type: 'string',
              },
              address: {
                type: 'string',
              },
              description: {
                type: 'string',
              },
              createdAt: {
                type: 'string',
              },
              updatedAt: {
                type: 'string',
              },
            },
          },
        },
      },
    },
    User: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        dob: {
          type: 'string',
        },
        address: {
          type: 'string',
        },
        description: {
          type: 'string',
        },
      },
    },
    InvalidResponse: {
      type: 'object',
      properties: {
        success: {
          type: 'boolean',
        },
        status: {
          type: 'number',
        },
        data: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
            },
          },
        },
      },
    },
  },
});

export default UserDoc;
