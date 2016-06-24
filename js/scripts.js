$(document).ready(function() {
  // interface logic
  $("#input").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("#input_text").val());
    // var output = rome(userInput);
    $(".calculated_output").text(output);
    $(".my_result").show();

  // alert(userInput);
  });

  $("#reset").click(function() {
    $("#input_text").val("");
    $(".my_result").hide();
  })

})
