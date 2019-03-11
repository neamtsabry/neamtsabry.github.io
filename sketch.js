// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/q2IDNkUws-A

// var mic;

var bgImg;
var x1 = 0;
var x2;

var scrolLSpeed = 2;

function preload() {
    bgImg = loadImage("wa1.png");
}

function setup() {
    createCanvas(400, 400);
    mic = new p5.AudioIn();
    //   mic.start();
}

function draw() {
    image(bgImg, x1, 0, width, height);
    image(bgImg, x2, 0, width, height);

    x1 -= scrolLSpeed;
    x2 -= scrolLSpeed;

    if(x1 < -width){
        x1 = width
    }
    if(x2 < -width){
        x2 = width;
    }
    //   background(0);
    //   var vol = mic.getLevel();
    //   ellipse(100, 100, 200, vol * 200);
}