$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    const side1 = parseInt($("input#side1").val());
    const side2 = parseInt($("input#side2").val());
    const side3 = parseInt($("input#side3").val());

    event.preventDefault();

  });
});