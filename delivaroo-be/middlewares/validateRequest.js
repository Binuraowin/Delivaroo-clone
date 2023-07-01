const Ajv = require('ajv');
const ajv = new Ajv({ allErrors: true });

const validateRequest = (schema) => {
  return (req, res, next) => {
    const validate = ajv.compile(schema);
    const valid = validate(req.body);

    if (!valid) {
      const errors = validate.errors.map((error) => error.message).join(', ');
      return res.status(400).json({ error: `Request body is invalid: ${errors}` });
    }

    next();
  };
};

module.exports = validateRequest;
