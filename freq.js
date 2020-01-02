let mic, fft;

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

	beginShape();
	noFill();
	stroke(255);
	for (i = 0; i < spectrum.length; i++) {
		vertex(i*20, map(spectrum[i], 0, 255, height, 0));
	}
	endShape();
}


function touchStarted() {
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
}
