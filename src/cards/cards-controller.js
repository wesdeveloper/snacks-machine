import CardsModel from './cards-model';

export default {
  getAll: async (req, res) => {
    const cards = await CardsModel.getAll();
    return res.send({ cards });
  },
};
