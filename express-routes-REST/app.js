const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
  res.send('<h1>Welcome to the Home Page!</h1>');
});

app.get('/users/', (req, res, next) => {
  res.send('<h1>Welcome to the All Users Page!</h1>');
});

app.get('/users/:id', (req, res, next) => {
  res.send('<h1>Welcome to the Single Users Page!</h1>');
});

app.post('/users/', (req, res, next) => {
  res.json('You tried to create a user');
});

app.put('/users/:id', (req, res, next) => {
  res.json('You tried to update a user');
});

app.delete('/users/:id', (req, res, next) => {
  res.json('You tried to delete a user');
});

app.get('/dogs/', (req, res, next) => {
  res.send('<h1>Welcome to the All Dogs Page!</h1>');
});

app.get('/dogs/:id', (req, res, next) => {
  res.send('<h1>Welcome to the Single Dog Page!</h1>');
});

// What is this????
app.use((req, res, next) => {
  res.status(404).send('<h1> I do not have a mapping for this route :|</h1>');
});

// And what is this???
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.status || 500).send(err.message);
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
