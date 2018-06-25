import CardsController from './cards-controller';

export default (router) => {
  router.get('/', CardsController.getAll);

  return router;
};
