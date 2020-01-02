let mic, fft;
// var bgImg;

function setup() {
    // create canvas 
    createCanvas(windowWidth, windowHeight);
    noFill();

    // start the mic\
    mic = new p5.AudioIn();
    mic.start();

    fft = new p5.FFT();
    fft.setInput(mic);
}

function draw() {
    background(0);

    let spectrum = fft.analyze();

    noFill();
    stroke(255);
    beginShape();
    for (i = 0; i < spectrum.length; i++) {
        vertex(i*2, map(spectrum[i], 0, 255, height, 0));
    }
    endShape();
    
/////////////

    var vol = mic.getLevel();
    console.log(vol);

    fill(255, 0, 0);
    stroke(1);

    // Draw an ellipse with size based on volume
    ellipse(width / 2, height / 2, 50 + vol * 1500, 50 + vol * 1500);
}


function touchStarted() {
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
    console.log("got in!");
  }
}