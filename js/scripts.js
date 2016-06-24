// Business logic

// It can count up to the provided number and return the resulting string of numbers
var countUp = function(number) {
  for (var i = 0; i < number; i++) {
    console.log(i + 1);
  };
};

// It can identify multiples of 3 within a given string of numbers and replace those values with "ping"
 // It can identify multiples of 5 within a given string of numbers and replace those values with "pong"
// var replaceThrees = function(number) {
//   myNumber = [];
//   for (var i = 0; i < number; i++) {
//     if ((i + 1) % 3 === 0) {
//       myNumber.push("ping");
//     } else if
//       ((i + 1) % 5 === 0) {
//         myNumber.push("pong");
//       } else {
//       myNumber.push(i + 1);
//     }
//     console.log(myNumber);
//   };
// };


// It can identify multiples of 15 within a given string of numbers and replace those values with "ping-pong"
var replaceThrees = function(number) {
  myNumber = [];
  for (var i = 0; i < number; i++) {
    if ((i + 1) % 15 === 0) {
      myNumber.push("ping-pong");
      } else {
      myNumber.push(i + 1);
    }
    console.log(myNumber);
  };
};














// User logic interface
$(document).ready(function() {
  // interface logic
  $("#input").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#input_text").val());
    countUp(userInput);
    replaceThrees(userInput);

    // var output = rome(userInput);
    // $(".calculated_output").text(output);
    // $(".my_result").show();

    // alert(userInput);
    });

  // $("#reset").click(function() {
  //   $("#input_text").val("");
  //   $(".my_result").hide();
  // })
})
