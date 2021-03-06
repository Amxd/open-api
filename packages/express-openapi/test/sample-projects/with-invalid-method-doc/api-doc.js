// args.apiDoc needs to be a js object.  This file could be a json file, but we can't add
// comments in json files.
module.exports = {
  swagger: '2.0',

  basePath: '/v3',

  info: {
    title: 'invalid express-openapi sample project',
    version: '3.0.0'
  },

  definitions: {
    Error: {
      additionalProperties: true
    },
    User: {
      properties: {
        name: {
          type: 'string'
        }
      },
      required: ['name']
    }
  },

  // paths are derived from args.routes.  These are filled in by fs-routes.
  paths: {},

  tags: [
    {name: 'users'}
  ]
};
