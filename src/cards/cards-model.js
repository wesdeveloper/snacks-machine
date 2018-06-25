import mongoose from 'mongoose';

const CardSchema = mongoose.Schema({
  number: Number,
  credit: Number,
  person_id: Number,
});

const Card = mongoose.model('Card', CardSchema);

const cardModel = () => {
  const getAll = () => Card.find();
  return {
    getAll,
  };
};

export default cardModel();
