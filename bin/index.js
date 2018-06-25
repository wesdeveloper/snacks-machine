import app from '../src/app';

try {
  const port = process.env.PORT || 3000;
  app.listen(port);
  console.log(`Server listening at port ${port}`);
} catch (e) {
  throw e;
}
