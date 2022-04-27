const express = require('express')
const router = express.Router()

const client = require("../db/index.js")

router.get('/', async (req, res, next) => {
    try {
      const allUsers = await client.query('SELECT * FROM USERS;');
      const formattedUsers = `<div>
        ${allUsers.rows.map((user) => {
          console.log(user);
          return `
            <h1> User: ${user.name}</h1>
            <img src=${user.imageurl}>
          `;
        })}
      </div>`;
      res.send(formattedUsers);
    } catch (err) {
      next(err);
    }
  });
  //localhost:8080/users/:id
  
  router.get('/:id', (req, res, next) => {
    res.send('<h1>Welcome to the Single Users Page!</h1>');
  });
  // POST --- localhost:8080/users/
  // Create a user in our database
  router.post('/', (req, res, next) => {
    // The request body is how we will be passed data for POST and PUT routes
    console.log(req.body);
    // add to the DB

    res.json('You tried to create a user');
  });
  //PUT --- localhost:8080/users/:id
  
  router.put('/:id', (req, res, next) => {
    res.json('You tried to update a user');
  });
  //DELETE -- localhost:8080/users/:id
  
  router.delete('/:id', (req, res, next) => {
      // locahost:8080/users/:id
    res.json('You tried to delete a user');
  });
  


module.exports = router;