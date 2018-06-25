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
  getById: async (req, res) => {
    const { cardid } = req.payload.params;

    let card = await CardsModel.getById(cardid);

    if (!card) {
      return res.status(404).send({ message: 'not found!' });
    }

    if (card.last_charge !== Date.now()) {
      card = await CardsModel.updateCredit(cardid);
    }

    return res.send({ card });
  },
};
