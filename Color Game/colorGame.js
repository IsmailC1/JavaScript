var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

for(var i=0; i<modeButtons.length; i++){
    modeButtons[i].addEventListener("click",function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent=== "Easy" ? numberOfSquares=3: numberOfSquares=6;
        reset();
    });
}
function reset()
{
    colors = generateRandomColors(numberOfSquares);
    //pick a new random color from array
    pickedColor = pickColor();

    colorDisplay.textContent = pickedColor;
     resetButton.textContent = "New Color";
    messageDisplay.textContent = "";
    //change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display="block";
            squares[i].style.background = colors[i];
        }else{
            squares[i].style.display="none";
        }
    }
    h1.style.background = "steelblue";
}
resetButton.addEventListener("click", function () {
  reset();
})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.background;
        console.log(clickedColor, pickedColor);
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }
        else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}
function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
}
function pickColor() {
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}
function generateRandomColors(num) {
    // make an array
    var arr = [];
    //add num random colors to array
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
        //get rendom color and push into arr
    }
    // return  that array 
    return arr;
}
function randomColor() {
    //pick a "red" from 0-255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0-255
    var g = Math.floor(Math.random() * 256);
    // pick a "blue" from 0-255
    var b = Math.floor(Math.random() * 256);
    "rgb(r, g, b)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
