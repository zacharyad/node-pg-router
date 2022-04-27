const pg = require("pg")
// url to gety tyo the DB
const url = 'postgres://localhost:5432/puppies' // we know where to go.
const client = new pg.Client(url) // you telling the driver

// we need the client -> client.query()
console.log("RUNNING CODE IN DB FILE")

const connect = async () => {
    try {
        // have we gone there?????
      await client.connect();
    } catch (err) {
      console.log('The client connection to postgres failed');
      console.log(err.stack);
    }
  };
  
  connect();
  
  module.exports = client;


// module.export the cleint to use