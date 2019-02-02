import CardsModel from './cards-model';

export default {
  buy: async (req, res) => {
    const { cardid } = req.payload.params;
    const { price, item } = req.payload.body;

    let card = await CardsModel.getById(cardid);

    if (!card) {
      return res.status(404).send({ message: 'not found!' });
    }

    if (!card.status) {
      return res.status(200).send({ message: 'card disabled' });
    }

    const creditResult = card.credit - price;

    if (creditResult < 0) {
      return res.status(304).send();
    }

    card = await CardsModel.buy({ cardid, price, item });

    return res.status(201).send({ message: 'success' });
  },
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

    if (card.status && card.last_charge !== Date.now()) {
      card = await CardsModel.defaultCharge(cardid);
    }

    return res.send({ card });
  },
  update: async (req, res) => {
    const { cardid } = req.payload.params;
    const { body } = req.payload;

    let card = await CardsModel.getById(cardid);

    if (!card) {
      return res.status(404).send({ message: 'not found!' });
    }

    card = await CardsModel.update(cardid, body);

    return res.status(201).send({ card });
  },
};
