const pg = require("pg")
// connect to the DB
// get the url or the end point for the DB
const pgURL = 'postgres://localhost:5432/puppies';
// we need that client
const client = new pg.Client(pgURL) // the url or a config object {password: "123"}

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
        const {rows} = await client.query('SELECT * FROM users;') // {rows, dog}

        rows.forEach(user => {
          console.log(user.name + "!")
        })
        //console.log("from db: ", data)
      } catch(err){
        console.log("ERROR!: ", err)
      }
    break;
    case '2':
      console.log("You entered the number 2.")
    break;
    case '3':
      await client.end();
      process.exit(1); // This kills the process so no need for a break after this line
    default:
      prompt('not valid command');
  }
  prompt();
};

// IIFE
(function start() {
  console.log('client has connected!\n');
  client.connect() // this makes that connection
  prompt();
  process.stdin.on('data', main);
})()

// start();
