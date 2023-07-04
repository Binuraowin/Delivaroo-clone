const ratingSchema = {
    type: 'object',
    properties: {
      rating: { type: 'number', minimum: 1, maximum: 5 },
      comment: { type: 'string', minLength: 1 },
    },
    required: ['rating', 'comment'],
  };
  
  module.exports = ratingSchema;
  