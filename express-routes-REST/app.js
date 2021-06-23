const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', require('./api'));

app.get('/', (req, res, next) => {
  res.send('<h1>Welcome to the Home Page!</h1>');
});

app.use((req, res, next) => {
  res.status(404).send('<h1> I do not have a mapping for this route :|</h1>');
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.status || 500).send(err.message);
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
