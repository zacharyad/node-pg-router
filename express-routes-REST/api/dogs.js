const express = require('express');
const router = express.Router();

const client = require('../pg/client');

router.get('/', async (req, res, next) => {
  try {
    const dogs = await client.query('SELECT * FROM DOGS;');
    const formattedDogs = `<div>
      ${dogs.rows.map((dog) => {
        console.log(dog);
        return `
          <h1> Dog: ${dog.name}</h1>
          <img src=${dog.imageurl}>
        `;
      })}
    </div>`;
    res.send(formattedDogs);
  } catch (err) {
    console.log('Failed to retrieve all dogs');
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const dogs = await client.query(
      `SELECT * FROM DOGS where id=${+req.params.id};`
    );
    const formattedDogs = `<div>
      ${dogs.rows.map((dog) => {
        console.log(dog);
        return `
          <h1> Dog: ${dog.name}</h1>
          <img src=${dog.imageurl}>
        `;
      })}
    </div>`;
    res.send(formattedDogs);
  } catch (err) {
    console.log('Failed to retrieve all dogs');
    next(err);
  }
});

module.exports = router;
