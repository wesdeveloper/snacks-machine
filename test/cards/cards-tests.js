describe('Cards tests', () => {
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
