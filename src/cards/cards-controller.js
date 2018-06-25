import CardsModel from './cards-model';

export default {
  create: async (req, res) => {
    const { body } = req.payload;

    const card = await CardsModel.create(body);

    return res.status(201).send({ card });
  },
  getAll: async (req, res) => {
    const cards = await CardsModel.getAll();
    return res.send({ cards });
  },
};
