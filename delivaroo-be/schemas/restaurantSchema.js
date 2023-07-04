const restaurantSchema = {
    type: 'object',
    properties: {
      name: { type: 'string', minLength: 1 },
      address: { type: 'string', minLength: 1 },
    },
    required: ['name', 'address'],
  };
  
  module.exports = restaurantSchema;
  