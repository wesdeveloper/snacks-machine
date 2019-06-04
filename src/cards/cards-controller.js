import * as cardsServices from './cards-services';

export default {
  buy: async (req, res) => {
    const { cardid } = req.payload.params;
    const { price, item } = req.payload.body;

    try {
      const card = await cardsServices.buy({ cardid, price, item });

      if (!card) {
        return res.status(400).send();
      }

      if (card.creditResult < 0) {
        return res.status(304).send();
      }

      return res.status(201).send({ message: 'success' });
    } catch (e) {
      return res.status(500).send();
    }
  },
  create: async (req, res) => {
    const { body } = req.payload;

    try {
      const card = await cardsServices.create(body);

      return res.status(201).send({ card });
    } catch (e) {
      return res.status(500).send();
    }
  },
  getAll: async (req, res) => {
    const cards = await cardsServices.getAll();
    return res.send({ cards });
  },
  getById: async (req, res) => {
    const { cardid } = req.payload.params;

    let card = await cardsServices.getById(cardid);

    if (!card) {
      return res.status(404).send({ message: 'not found!' });
    }

    if (card.status && card.last_charge !== Date.now()) {
      card = await cardsServices.defaultCharge(cardid);
    }

    return res.send({ card });
  },
  update: async (req, res) => {
    const { cardid } = req.payload.params;
    const { body } = req.payload;

    let card = await cardsServices.getById(cardid);

    if (!card) {
      return res.status(404).send({ message: 'not found!' });
    }

    card = await cardsServices.update(cardid, body);

    return res.status(201).send({ card });
  },
};
