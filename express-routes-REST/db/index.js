const pg = require('pg');
const postgresUrl = 'postgres://localhost:5432/nodepg';

const client = new pg.Client(postgresUrl);


async function start() {
    await client.connect();
  }
  
start();

 module.exports = client  