const menuSchema = {
    type: 'object',
    properties: {
      name: { type: 'string', minLength: 1 },
    },
    required: ['name'],
  };
  
  module.exports = menuSchema;
  