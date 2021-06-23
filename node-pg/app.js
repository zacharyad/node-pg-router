const pg = require('pg');
const postgresUrl = 'postgres://localhost/pg-node-rest';
const client = new pg.Client(postgresUrl);

const prompt = (data) => {
  process.stdout.write(
    `Main Menu\nCommands:\n1. Select all users\n2. Select all puppies\n3. Exit\n> `
  );
};

const main = async (data) => {
  const entry = data.toString().trim();
  const [command, arg] = entry.split(' ');
  switch (command) {
    case '1':
      try {
        const users = await client.query('SELECT * FROM users;');
        users.rows.forEach((user) => {
          console.log(`User name: ${user.name}`);
        });
      } catch (err) {
        console.log('Error when trying to retrieve all users');
        console.log(err);
      }
      break;
    case '2':
      try {
        const dogs = await client.query('SELECT * FROM dogs;');
        dogs.rows.forEach((dog) => {
          console.log(`Dog name: ${dog.name}`);
        });
      } catch (err) {
        console.log('Error when trying to retrieve all dogs');
        console.log(err);
      }
      break;
    case '3':
      await client.end();
      process.exit(1);
    default:
      prompt('not valid command');
  }
  prompt();
};

function start() {
  client.connect();
  console.log('client has connected!\n');
  prompt();
  process.stdin.on('data', main);
}

start();
