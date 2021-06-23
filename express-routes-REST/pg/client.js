const pg = require('pg');
const postgresUrl = 'postgres://localhost/pg-node-rest';
const client = new pg.Client(postgresUrl);

const connect = async function () {
  await client.connect();
};

connect();

module.exports = client;
