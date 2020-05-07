var today = new Date();
var hours = today.getHours();
var greeting = document.getElementById("greeting");

// var text = " Welcome to my website."

// if (hours > 18) {
//     greeting.innerHTML = "Good evening!" + text;
// } else if (hours > 12) {
//     greeting.innerHTML = "Good afternoon!" + text;
// } else if (hours > 0) {
//     greeting.innerHTML = "Good morning!" + text;
// } else {
//     greeting.innerHTML = "";
// }

var x = document.getElementsByTagName("BODY")[0];
x.style.animationPlayState = "paused";

var bot = document.getElementById("bot");
var res = document.getElementById("res");

bot.addEventListener("click", function() {
    // $(this).toggleClass('selected');

    if (x.style.animationPlayState === "paused") {
        x.style.animationPlayState = "running";

        this.firstChild.classList.add("fa-pause");
        this.firstChild.classList.remove("fa-play");
    } else {
        x.style.animationPlayState = "paused";

        this.firstChild.classList.remove("fa-pause");
        this.firstChild.classList.add("fa-play");
    }

});

// var buttons = document.getElementsByTagName("button");

// buttons.addEventListener("mouseover", changeColor);
// buttons.addEventListener("click", changeColor);

// buttons.addEventListener("mouseout", colorOriginal);

// function changeColor(){

// }

filterFocus("filter")

function filterFocus(str) {
    projects = document.getElementsByClassName("filter");

    for (i = 0; i < projects.length; i++) {
        if (projects[i].classList.contains(str)) projects[i].style.display = "block";
        else projects[i].style.display = "none";
    }

    btnGroup = document.getElementsByClassName("btn-group")[0].children;


    for (i = 0; i < btnGroup.length; i++) {
        btnGroup[i].classList.remove("active");
    }

    btn = document.getElementById(str);
    console.log(btn)
        // btn.style.backgroundColor = "#8FC5B9";
    btn.classList.add("active")
}