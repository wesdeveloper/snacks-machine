import Joi from 'joi';

export const validateParam = (schema, name) => (req, res, next) => {
  const result = Joi.validate({ param: req.params[name] }, schema);
  if (result.error) {
    return res.status(400).json(result.error.details);
  }
  if (!req.payload) {
    req.payload = {};
  }
  if (!req.payload.params) {
    req.payload.params = {};
  }

  req.payload.params[name] = req.params[name];
  return next();
};

export const validateBody = schema => (req, res, next) => {
  const result = Joi.validate(req.body, schema);
  if (result.error) {
    console.log(result.error.details[0].message);
    return res.status(400).json(result.error.details[0].message);
  }
  if (!req.payload) {
    req.payload = {};
  }
  if (!req.payload.body) {
    req.payload.body = {};
  }
  req.payload.body = result.value;
  return next();
};

export const schemas = {
  cardSchema: Joi.object().keys({
    credit: Joi.number().required(),
    person_id: Joi.number().required(),
  }),
  cardUpdateSchema: Joi.object().keys({
    credit: Joi.number(),
    person_id: Joi.number(),
  }),
};
