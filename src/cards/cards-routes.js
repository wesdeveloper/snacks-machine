import CardsController from './cards-controller';
import { schemas, validateBody } from './cards-helpers';

export default (router) => {
  router
    .post('/', validateBody(schemas.cardSchema), CardsController.create)
    .get('/', CardsController.getAll);

  return router;
};
