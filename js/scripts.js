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

// // It can prioritize conflicts by understanding that multiples of 5 trump multiples of 3, and multiples of 15 trump multiples of 5, and so when given a string of numbers it can appropriately replace multiples of 3, 5, and 15 with "ping", "pong", and "ping-pong", respectively
// var replaceAll = function(number) {
//   myNumber = [];
//   for (var i = 0; i < number; i++) {
//     if (((i + 1) % 3 === 0) && ((i + 1) % 5 !== 0) && ((i + 1) % 15 !== 0)) {
//       myNumber.push("ping");
//     } else if
//       (((i + 1) % 5 === 0) && ((i + 1) % 15 !== 0)) {
//         myNumber.push("pong");
//       } else if
//         ((i + 1) % 15 === 0) {
//           myNumber.push("ping-pong");
//         } else {
//           myNumber.push(i + 1);
//     }
//   };
//   return myNumber;
// };


// It can prioritize conflicts by understanding that multiples of 5 trump multiples of 3, and multiples of 15 trump multiples of 5, and so when given a string of numbers it can appropriately replace multiples of 3, 5, and 15 with "ping", "pong", and "ping-pong", respectively
var replaceAll = function(number) {
  myNumber = [];
  for (var i = 0; i < number; i++) {
    if ((i + 1) % 15 === 0) {
      myNumber.push("ping-pong");
    } else if
      ((i + 1) % 5 === 0) {
        myNumber.push("pong");
      } else if
        ((i + 1) % 3 === 0) {
          myNumber.push("ping");
        } else {
          myNumber.push(i + 1);
    }
  };
  return myNumber;
};

// It can chunk the final array so that it can be displayed in multiple columns
var chunkedArrays = function(array, start, end) {
  var myChunk = array.slice(start, end);
  return myChunk;
}


// User logic interface
$(document).ready(function() {
  // interface logic
  $("#input").submit(function(event) {
    event.preventDefault();

    // get user input and pass it to the replacement function; store results in an array
    var userInput = parseInt($("#input_text").val());
    var finalResult = replaceAll(userInput);

    // This should be refactored using an additional (recursive?) function and moved to business logic section
    // TODO
    var firstChunkedArray = chunkedArrays(finalResult, 0, finalResult.length/4);
    var secondChunkedArray = chunkedArrays(finalResult, finalResult.length/4, 2*(finalResult.length/4));
    var thirdChunkedArray = chunkedArrays(finalResult, 2*(finalResult.length/4), 3*(finalResult.length/4));
    var fourthChunkedArray = chunkedArrays(finalResult, 3*(finalResult.length/4), finalResult.length);

    // retrieve results from arrays and build the html result display list; unhide results section
    // results are displayed in columns, one for each array
    $.each(firstChunkedArray, function(i, value) {
      $(i).text(value);
      $("ul#firstList").append("<li>" + value + "</li>");
    });
    $.each(secondChunkedArray, function(i, value) {
      $(i).text(value);
      $("ul#secondList").append("<li>" + value + "</li>");
    });
    $.each(thirdChunkedArray, function(i, value) {
      $(i).text(value);
      $("ul#thirdList").append("<li>" + value + "</li>");
    });
    $.each(fourthChunkedArray, function(i, value) {
      $(i).text(value);
      $("ul#fourthList").append("<li>" + value + "</li>");
    });


    $(".my_result").show();
  })

  // clear the input field, empty the results <ul>, and hide the results section
  $("#reset").click(function() {
    $("#input_text").val("");
    $("ul#replacedList").empty();
    $(".my_result").hide();
  })
})
