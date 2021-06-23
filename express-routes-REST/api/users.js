const express = require('express');
const router = express.Router();

const client = require('../pg/client');

router.get('/', async (req, res, next) => {
  try {
    const users = await client.query('SELECT * FROM USERS;');
    const formattedUsers = `<div>
      ${users.rows.map((user) => {
        console.log(user);
        return `
          <h1> User: ${user.name}</h1>
          <img src=${user.imageurl}>
        `;
      })}
    </div>`;
    res.send(formattedUsers);
  } catch (err) {
    console.log('Failed to retrieve all users');
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const users = await client.query(
      `SELECT * FROM USERS where id=${+req.params.id};`
    );
    const formattedUsers = `<div>
      ${users.rows.map((user) => {
        console.log(user);
        return `
          <h1> User: ${user.name}</h1>
          <img src=${user.imageurl}>
        `;
      })}
    </div>`;
    res.send(formattedUsers);
  } catch (err) {
    console.log('Failed to retrieve all users');
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  console.log(req.body);
  try {
    const insertReturn = await client.query(
      `INSERT INTO users (name, imageurl) VALUES ('${req.body.name}', '${req.body.imageurl}');`
    );
    console.log(insertReturn);
    res.json('User created successfully');
  } catch (err) {
    console.log('Failed to retrieve all users');
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  console.log(req.body);
  try {
    const updateReturn = await client.query(
      `UPDATE users set name='${req.body.name}', imageurl='${
        req.body.imageurl
      }' where id=${+req.params.id};`
    );
    console.log(updateReturn);
    res.json('User updated successfully');
  } catch (err) {
    console.log('Failed to retrieve all users');
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  console.log(req.body);
  try {
    const deleteReturn = await client.query(
      `DELETE from users where id=${+req.params.id};`
    );
    console.log(deleteReturn);
    res.json('User deleted successfully');
  } catch (err) {
    console.log('Failed to retrieve all users');
    next(err);
  }
});

module.exports = router;
