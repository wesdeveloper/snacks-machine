import mongoose from 'mongoose';

const CardSchema = mongoose.Schema({
  credit: Number,
  person_id: Number,
});

const Card = mongoose.model('Card', CardSchema);

const cardModel = () => {
  const create = async (data) => {
    const card = new Card({ ...data });
    return card.save();
  };

  const getAll = () => Card.find();
  return {
    create,
    getAll,
  };
};

export default cardModel();
