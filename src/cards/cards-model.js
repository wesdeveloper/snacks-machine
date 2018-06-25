import mongoose from 'mongoose';

const CardSchema = mongoose.Schema({
  credit: Number,
  person_id: Number,
  last_charge: Date,
  history: Array,
}, {
  timestamps: true,
});

const Card = mongoose.model('Card', CardSchema);

const cardModel = () => {
  const create = async ({ credit = 5.50, person_id, last_charge = Date.now() }) => {
    const card = new Card({ credit, person_id, last_charge });
    return card.save();
  };

  const getAll = () => Card.find();

  const getById = cardid => Card.findById(cardid);

  const updateCredit = cardid => Card.findByIdAndUpdate(
    cardid, { credit: 5.50, last_charge: Date.now() },
  );

  return {
    create,
    getAll,
    getById,
    updateCredit,
  };
};

export default cardModel();
