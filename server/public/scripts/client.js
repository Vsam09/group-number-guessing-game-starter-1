$(document).ready(handleReady);

function handleReady() {
  console.log("jquery is loaded!")

$('#submitBtn').on("click", onSubmitBtn)
}

function onSubmitBtn () {
  console.log("on OnSubmitBtm")

  let guessesObj = {
    inputOne: $("#inputOne").val(),
    inputTwo: $("#inputTwo").val(),
    inputThree: $("#inputThree").val(),
    inputFour: $("#inputFour").val(),
  };
console.log(guessesObj)

  $.ajax({
    url: "/guesses",
    method:"POST", 
    data: guessesObj
  }).then((response)=> {
    console.log('POST /guesses', response);
  }).catch((error) => {
    console.log('POST /guesses failed', error);
    alert("Failed to save your input! check your data, before you wreck your data");
  })

}




