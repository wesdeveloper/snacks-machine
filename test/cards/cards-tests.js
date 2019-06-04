let cardCreated;
describe('Cards tests', () => {
  it('Should create a new card /api/cards POST', done => {
    request
      .post('/api/cards')
      .send({
        person_id: Math.floor(Math.random() * Math.floor(10000)),
      })
      .expect(201)
      .end((err, res) => {
        const { card } = res.body;
        cardCreated = card;
        assert.isObject(card);
        done(err);
      });
  });

  it('Should return all cards /api/cards GET', done => {
    request
      .get('/api/cards')
      .expect(200)
      .end((err, res) => {
        const { cards } = res.body;
        assert.isArray(cards);
        done(err);
      });
  });

  it('Should get a card by id /api/cards/:cardid GET', done => {
    request
      .get(`/api/cards/${cardCreated._id}`)
      .expect(200)
      .end((err, res) => {
        const { card } = res.body;
        assert.isObject(card);
        assert.deepEqual(card, cardCreated);
        done(err);
      });
  });

  it('Should try get a card that does not exist /api/cards/:cardid GET', done => {
    request
      .get('/api/cards/5b3156345a5d52164d377507')
      .expect(404)
      .end((err, res) => {
        assert.strictEqual('not found!', res.body.message);
        done(err);
      });
  });

  it('Should buy a coca-cola /api/cards/:cardid/buy PATCH', done => {
    request
      .patch(`/api/cards/${cardCreated._id}/buy`)
      .send({ price: 2.7, item: 'coca-cola' })
      .expect(201)
      .end((err, res) => {
        assert.strictEqual('success', res.body.message);
        done(err);
      });
  });

  it.skip('Should try buy a snack without enough credit /api/cards/:cardid/buy PATCH', done => {
    request
      .patch(`/api/cards/${cardCreated._id}/buy`)
      .send({ price: 100.7, item: 'coca-cola' })
      .expect(304)
      .end((err, res) => {
        assert.isEmpty(res.body);
        done(err);
      });
  });

  it('Should update a card /api/cards/:cardid PUT', done => {
    request
      .put(`/api/cards/${cardCreated._id}`)
      .send({ status: false })
      .expect(201)
      .end((err, res) => {
        const { card } = res.body;
        assert.strictEqual(cardCreated._id, card._id);
        assert.strictEqual(card.status, false);
        done(err);
      });
  });
});
