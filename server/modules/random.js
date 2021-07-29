let randomNumber = 0;

function getRandomNumber(){

    randomNumber = Math.floor(Math.random()* 25) + 1;
    return randomNumber;
   
}

console.log("Random is:", getRandomNumber());





module.exports = randomNumber;