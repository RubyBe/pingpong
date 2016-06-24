// Business logic

// // It can count up to the provided number and return the resulting string of numbers
// var countUp = function(number) {
//   for (var i = 0; i < number; i++) {
//     console.log(i + 1);
//   };
// };

// // It can identify multiples of 3 within a given string of numbers and replace those values with "ping"
// // It can identify multiples of 5 within a given string of numbers and replace those values with "pong"
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

// // It can identify multiples of 15 within a given string of numbers and replace those values with "ping-pong"
// var replaceThrees = function(number) {
//   myNumber = [];
//   for (var i = 0; i < number; i++) {
//     if ((i + 1) % 15 === 0) {
//       myNumber.push("ping-pong");
//       } else {
//       myNumber.push(i + 1);
//     }
//     console.log(myNumber);
//   };
// };

// It can prioritize conflicts by understanding that multiples of 5 trump multiples of 3, and multiples of 15 trump multiples of 5, and so when given a string of numbers it can appropriately replace multiples of 3, 5, and 15 with "ping", "pong", and "ping-pong", respectively
var replaceAll = function(number) {
  myNumber = [];
  for (var i = 0; i < number; i++) {
    if (((i + 1) % 3 === 0) && ((i + 1) % 5 !== 0) && ((i + 1) % 15 !== 0)) {
      myNumber.push("ping");
    } else if
      (((i + 1) % 5 === 0) && ((i + 1) % 15 !== 0)) {
        myNumber.push("pong");
      } else if
        ((i + 1) % 15 === 0) {
          myNumber.push("ping-pong");
        } else {
          myNumber.push(i + 1);
    }
  };
  return myNumber;
};







// User logic interface
$(document).ready(function() {
  // interface logic
  $("#input").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#input_text").val());
    var finalResult = replaceAll(userInput);

    $.each(finalResult, function(i, value) {
      $(i).text(value);
      $("ul#replacedList").append("<li>" + value + "</li>");
    });
    $(".my_result").show();
  })

  $("#reset").click(function() {
    $("#input_text").val("");
    $(".my_result").hide();
  })
})
