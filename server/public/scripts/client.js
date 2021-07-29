// const { response } = require("express");

$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")

$('#submitBtn').on("click", onSubmitBtn)

getGuesses();
}
const numberGuesses = []

function onSubmitBtn () {
  console.log("on OnSubmitBtm")

  let guessesObj = {
    inputOne: $("#inputOne").val(),
    inputTwo: $("#inputTwo").val(),
    inputThree: $("#inputThree").val(),
    inputFour: $("#inputFour").val(),
  };
console.log(guessesObj)

numberGuesses.push(guessesObj)
console.log(guessesObj);

  $.ajax({
    url: "/guesses",
    method:"POST", 
    data: guessesObj
  }).then((response)=> {
    console.log('POST /guesses', response);
   // getGuesses()
  }).catch((error) => {
    console.log('POST /guesses failed', error);
    alert("Failed to save your input! check your data, before you wreck your data");
  })

}



function getGuesses () {

  $.ajax({
    url: "/guesses",
    method:"GET"
  }).then((response) => {

    console.log("Response is", response);

  let el = $("#randomNumberOut");

  el.empty();

    for(let i = 0; i < response.length; i++) {

      let random = response[i]
      
      el.append(
        `<li> Sam: ${random.inputOne}</li>
        <li>Jay: ${random.inputTwo}</li>
        <li>Jeremy: ${random.inputThree}</li>
        <li>Hamza: ${random.inputFour}</li>`
      );

    }

  })
}



