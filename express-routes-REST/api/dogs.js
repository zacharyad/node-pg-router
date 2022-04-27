const express = require('express')
const router = express.Router()

console.log("We are running this code.")

// localhost:8080/dogs

router.get('/', async (req, res, next) => {
    // localhost:8080/dogs/
    try {
    //   const {rows} = await client.query('SELECT * FROM dogs;');
    //   const formattedDogs = `<div>
    //     ${rows.map((dog) => {
    //       console.log(dog);
    //       return `
    //         <h1> Dog: ${dog.name}</h1>
    //         <img src=${dog.imageurl}>
    //       `;
    //     })}
    //   </div>`;
      res.send("See me");
    } catch (err) {
      console.log('Failed to retrieve all dogs');
      next(err);
    }
  });
  
  router.get('/:id', async (req, res, next) => {
      // localhost:8080/dogs/:id
    try {
    //   const dogs = await client.query(
    //     `SELECT * FROM DOGS where id=${+req.params.id};`
    //   );
    //   const formattedDogs = `<div>
    //     ${dogs.rows.map((dog) => {
    //       console.log(dog);
    //       return `
    //         <h1> Dog: ${dog.name}</h1>
    //         <img src=${dog.imageurl}>
    //       `;
    //     })}
    //   </div>`;
      res.send(`<h1>You want the dog with id of ${req.params.id}</h1>`);
    } catch (err) {
      console.log('Failed to retrieve all dogs');
      next(err);
    }
  });

  module.exports = router