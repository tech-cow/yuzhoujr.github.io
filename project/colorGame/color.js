// console.log("bannana");

/***Local Variables***/
var colors = generateRandomColors(6);
var picked_color = pickColor();


/****QS Variables****/
var squares = document.querySelectorAll(".square");
var color_display = document.querySelector('#color_display');
var message_display = document.querySelector('#message');

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
      message_display.textContent = "Correct!";
      // change all color
      change_color(clicked_color);

    }else {
      this.style.background = "#232323";
      message_display.textContent = "Wrong!";
    }
  });

}

/***Function***/
function change_color(color){
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}


function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  var arr = [];
  for (var i = 0; i < num; i++) {
    //get random color and push to array
    arr.push(randomColors());
  }
  return arr;
}

function randomColors(){
  //pick a red from 0 - 255
  var r = Math.floor(Math.random() * 256);
  // pick a green from 0 - 255
  var g = Math.floor(Math.random() * 256);
  // pick a blue from 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
