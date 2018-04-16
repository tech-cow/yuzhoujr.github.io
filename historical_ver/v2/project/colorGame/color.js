/***Local Variables***/
var numSquare = 6;
var colors = [];
var picked_color;

/****QS Variables****/
var squares = document.querySelectorAll(".square");
var color_display = document.querySelector('#color_display');
var message_display = document.querySelector('#message');
var h1_display = document.querySelector('#title');
var reset_button = document.querySelector('#reset');
var mode_button = document.querySelectorAll('.mode');


/******************Main******************/

init();

reset_button.addEventListener('click', function() {
    reset();
});

color_display.textContent = picked_color;



/******************Function******************/
function init(){
  setButton();
  setSquare();
  reset();
}
function setButton(){
  for (var i = 0; i < mode_button.length; i++) {
    mode_button[i].addEventListener('click', function() {
      mode_button[0].classList.remove("selected");
      mode_button[1].classList.remove("selected");
      this.classList.add("selected")
      this.textContent === "Easy" ? numSquare = 3: numSquare = 6;
      reset();
    });
  }
}

function setSquare(){
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function() {
      var clicked_color = this.style.background;
      if (clicked_color === picked_color) {
        message_display.textContent = "Correct!";
        change_color(clicked_color);
        h1_display.style.background = picked_color;
        reset_button.textContent = ("PLAY AGAIN?");
      }else {
        this.style.background = "#232323";
        message_display.textContent = "Wrong!";
      }
    });
  }
}

function reset(){
  colors = generateRandomColors(numSquare);
  picked_color = pickColor();
  color_display.textContent = picked_color;
  reset_button.textContent = "NEW COLORS"
  message_display.textContent = "";

  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
    squares[i].style.background = colors[i];
  }
  h1_display.style.background = "steelblue";
}


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
