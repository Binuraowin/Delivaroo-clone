const dishSchema = {
    type: 'object',
    properties: {
      name: { type: 'string', minLength: 1 },
      price: { type: 'number', minimum: 0 },
    },
    required: ['name', 'price'],
  };
  
  module.exports = dishSchema;
  