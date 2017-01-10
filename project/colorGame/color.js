// console.log("bannana");

/***Local Variables***/
var colors=[
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(0, 255, 0)",
"rgb(0, 255, 255)",
"rgb(0, 0, 255)",
"rgb(255, 0, 255)"
]

/****QS Variables****/
var squares = document.querySelectorAll(".square");
var picked_color = colors[3];
var color_display = document.querySelector('#color_display');


/***Main***/
color_display.textContent = picked_color;

for (var i = 0; i < squares.length; i++) {
  // add initiate colors to squares
  squares[i].style.background = colors[i];

  // add click listener to squares
  squares[i].addEventListener('click', function() {
    //grab color of the clicked color
    var clicked_color = this.style.background;
    //compare clicked color to picked color
    if (clicked_color === picked_color) {
      console.log("yo");
    }else {
      console.log("no");
    }
  });

}
