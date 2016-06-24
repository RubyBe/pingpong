// Business logic

// It can count up to the provided number and return the resulting string of numbers
var countUp = function(number) {
  for (var i = 1; i < number + 1; i++) {
    console.log(i);
  };
};













// User logic interface
$(document).ready(function() {
  // interface logic
  $("#input").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#input_text").val());
    countUp(userInput);

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
