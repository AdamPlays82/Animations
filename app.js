// when the ballRollButton is clicked, run a function that adds the 'ball-roll' class to the box
$("#ball-roll-btn").on("click", function makeItRoll() {
  $("#box").addClass("ball-roll");
});

// when 
$("#shrink-btn").on("click", function shrink() {
  $("#box").addClass("shrink");
});


// when adam-btn
$("#adam-btn").on("click", function adam() {
  $("#box").addClass("adam");
});




// reset the class when any animation on the box element ends
$("#box").on("animationend", function cleanUp() {
  $("#box").removeClass();
});
