import CardsModel from './cards-model';

export const create = async data => CardsModel.create(data);

export const getCardById = async cardid => CardsModel.getById(cardid);

export const buy = async ({ cardid, price, item }) => {
  const card = await CardsModel.getById(cardid);

  if (!card || !card.status) {
    return;
  }

  const creditResult = card.credit - price;

  if (creditResult < 0) {
    return -1;
  }

  return CardsModel.buy({ cardid, price, item });
};

export const getAll = async () => CardsModel.getAll();

export const getById = async cardid => CardsModel.getById(cardid);

export const defaultCharge = async cardid => CardsModel.defaultCharge(cardid);

export const update = async (cardid, data) => CardsModel.update(cardid, data);
