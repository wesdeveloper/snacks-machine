import CardsController from './cards-controller';
import { schemas, validateBody, validateParam } from './cards-helpers';

export default (router) => {
  router
    .post('/', validateBody(schemas.cardSchema), CardsController.create)
    .get('/:cardid', validateParam(schemas.idSchema, 'cardid'), CardsController.getById)
    .put('/:cardid', [validateParam(schemas.idSchema, 'cardid'), validateBody(schemas.cardUpdateSchema)], CardsController.update)
    .get('/', CardsController.getAll)
    .patch('/:cardid/buy', [validateParam(schemas.idSchema, 'cardid'), validateBody(schemas.buySchema)], CardsController.buy);

  return router;
};
