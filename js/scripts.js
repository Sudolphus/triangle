$(document).ready(function() {
  $("button#submit").click(function(event) {
    const side1 = parseInt($("input#side1").val());
    const side2 = parseInt($("input#side2").val());
    const side3 = parseInt($("input#side3").val());

    if (!side1 || !side2 || !side3) {
      alert("Fill in the sides!");
    } else if (!validTriangle(side1, side2, side3)) {
      $("#invalid").show();
    } else {
      const sideCount = sideCounter(side1, side2, side3);
      if (sideCount === 3) {
        $("#equilateral").show();
      } else if (sideCount === 2) {
        $("#isosceles").show();
      } else if (sideCount === 0) {
        $("#scalene").show();
      }
    };
    
    event.preventDefault();
  });

  $("button#reset").click(function() {
    $("#invalid").hide();
    $("#equilateral").hide();
    $("#isosceles").hide();
    $("#scalene").hide();
  });
});

function validTriangle(side1, side2, side3) {
  if (side3 >= side1 + side2 || side2 >= side1 + side3 || side1 >= side2+side3) {
    return false;
  } else {
    return true;
  }
}

function sideCounter(side1, side2, side3) {
  let x = 0;
  if (side1 === side2) {
    x += 1;
  }
  if (side1 === side3) {
    x += 1;
  }
  if (side2 === side3) {
    x += 1;
  }
  return x;
}