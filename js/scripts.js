$(document).ready(function() {
  $(".js-clickable").click(function() {
    $("#javascript-showing").toggle();
    $("#javascript-hidden").toggle();
  });
  $(".op-clickable").click(function() {
    $("#operators-showing").toggle();
    $("#operators-hidden").toggle();
  });
  $(".var-clickable").click(function() {
    $("#variables-showing").toggle();
    $("#variables-hidden").toggle();
  });
  $(".func-clickable").click(function() {
    $("#functions-showing").toggle();
    $("#functions-hidden").toggle();
  });
});
