var today = new Date();
var hours = today.getHours();
var greeting = document.getElementById("greeting");

var text = " Welcome to my website."

if (hours > 18) {
    greeting.innerHTML = "Good evening!" + text;
} else if (hours > 12) {
    greeting.innerHTML = "Good afternoon!" + text;
} else if (hours > 0) {
    greeting.innerHTML = "Good morning!" + text;
} else {
    greeting.innerHTML = "";
}

var x = document.getElementsByTagName("BODY")[0];
x.style.animationPlayState = "paused";

var bot = document.getElementById("bot");
var res = document.getElementById("res");

bot.addEventListener("click", function () {
    // $(this).toggleClass('selected');
  
    if (x.style.animationPlayState === "paused") {
        x.style.animationPlayState = "running";
    } else {
        x.style.animationPlayState = "paused";
      //box.style.animationPlayState = "paused"
    }

});

// var buttons = document.getElementsByTagName("button");

// buttons.addEventListener("mouseover", changeColor);
// buttons.addEventListener("click", changeColor);

// buttons.addEventListener("mouseout", colorOriginal);

// function changeColor(){

// }