const express = require('express');
const bodyParser = require('body-parser');
const { get } = require('jquery');
const app = express();

const randomNumber = require('./modules/random')
const PORT = 5000;

const guesses = [];

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here


//route for get 
app.get("/guesses", (req, res) => {
console.log("Request is:", req.route.path)
res.send(guesses) //guesses
})

app.post('/guesses', (req, res) => {
  console.log("Post is:", req.body );

  ///Would need a validation process setup here....
  guesses.push(req.body);
})


app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})
