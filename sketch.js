var mic;
var bgImg;
var y1 = 0;
var y2 = 0;

var scrolLSpeed = 2;

function preload() {
    bgImg = loadImage("Images/waltz.png");
}

function setup() {
    createCanvas(1200, 800);
    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
    background(0);
    
    var vol = mic.getLevel();
    console.log(vol);
    
    image(bgImg, 0, y1, width, height);
    image(bgImg, 0, y2, width, height);
    
    y1 -= vol * 20;
    y2 -= vol * 20;

    if(y1 < -width){
        y1 = width
    }
    if(y2 < -width){
        y2 = width;
    }
    //   background(0);
    //   var vol = mic.getLevel();
    //   ellipse(100, 100, 200, vol * 200);
}
