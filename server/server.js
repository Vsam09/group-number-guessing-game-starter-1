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
compareGuesses();
})

app.post('/guesses', (req, res) => {
  console.log("Post is:", req.body );



  res.sendStatus(201)
 
  ///Would need a validation process setup here....
  guesses.push(req.body);
  // compareGuesses();
})


function compareGuesses(){

  for(let i = 0; i < guesses.length; i++){
    if ( randomNumber === guesses[i]) {
      console.log("You are correct");
      // return "You are correct";
    }else if (randomNumber > guesses[i]) {
      console.log("Your number is too low");
      // return "Your number is too high";
    } //end of else if
     else {
      console.log("Your number is too high");
      // return "Your number is too low";
    }//end of else
  }//end of for
  
}



app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
})

