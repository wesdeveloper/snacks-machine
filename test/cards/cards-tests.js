describe('Cards tests', () => {
  it('Should create a new card /api/cards POST', (done) => {
    request
      .post('/api/cards')
      .send({
        credit: 0,
        person_id: Math.floor(Math.random() * Math.floor(10000)),
      })
      .expect(201)
      .end((err, res) => {
        const { card } = res.body;
        assert.isObject(card);
        done(err);
      });
  });
  it('Should return all cards /api/cards GET', (done) => {
    request
      .get('/api/cards')
      .expect(200)
      .end((err, res) => {
        const { cards } = res.body;
        assert.isArray(cards);
        done(err);
      });
  });
});
