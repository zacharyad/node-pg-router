const express = require('express');
const app = express();
// we need the client to query
const client = require("./db/index.js")

// we need to bring in some things from express to parse through incomcing data.
app.use(express.urlencoded({ extended: false })); // html form data
app.use(express.json());

app.use("/dogs", require("./api/dogs"))
app.use("/users", require("./api/user.js"))


// we need to apply that router middleware

app.get('/', (req, res, next) => {

  res.send('<h1>Welcome to the Home Page!!!!!!!</h1>');
});



app.use((req, res, next) => {
  res.status(404).send('<h1> I do not have a mapping for this route :|</h1>');
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.status || 500).send(err.message);
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
