import CardsController from './cards-controller';
import { schemas, validateBody, validateParam } from './cards-helpers';

export default (router) => {
  router
    .post('/', validateBody(schemas.cardSchema), CardsController.create)
    .get('/:cardid', validateParam(schemas.idSchema, 'cardid'), CardsController.getById)
    .get('/', CardsController.getAll);

  return router;
};
