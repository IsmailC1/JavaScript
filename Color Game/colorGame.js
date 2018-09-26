var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var numberOfSquares = 6;

easyBtn.addEventListener("click",function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numberOfSquares = 3;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.background = colors[i];

        }
        else {
            squares[i].style.display = "none";
        }
    }
})


hardBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");

    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
        }
    }
)


resetButton.addEventListener("click", function () {
    //generate all new colors 
    colors = generateRandomColors(numberOfSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colors of squares
    colorDisplay.textContent = pickedColor;
    for(var i=0; i<squares.length; i++){
        squares[i].style.background=colors[i];
    }
    h1.style.background = "steelblue";
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
            h1.style.backgroundColor = pickedColor;
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
