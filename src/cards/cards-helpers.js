import Joi from 'joi';

const idRegex = /^[a-f\d]{24}$/i;

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
  idSchema: Joi.object().keys({
    param: Joi.string()
      .regex(idRegex)
      .required(),
  }),
  cardSchema: Joi.object().keys({
    credit: Joi.number(),
    person_id: Joi.number().required(),
    status: Joi.boolean(),
  }),
  cardUpdateSchema: Joi.object().keys({
    credit: Joi.number(),
    person_id: Joi.number(),
    status: Joi.boolean(),
  }),
  buySchema: Joi.object().keys({
    price: Joi.number().required(),
    item: Joi.string().required(),
  }),
};
