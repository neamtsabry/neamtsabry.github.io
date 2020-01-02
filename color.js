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
  // Get the overall volume (between 0 and 1.0)
  let volume = mic.getLevel();

  let spectrum = fft.analyze();

  // console.log(spectrum.bins);


  // let c;

  let r, g, b;



  // If the volume > 0.1,  a rect is drawn at a random location.
  // The louder the volume, the larger the rectangle.
  // let threshold = 0.1;

  stroke(0);
  for(i=0; i < spectrum.length; i++){
    // console.log(spectrum[i]);
    len = map(spectrum[i], 0, 370, 760, 0); 
    // len = spectrum[i] * 50;

    if(len >= 370 & len < 435){
      r = 127; 
      g = 0; 
      b =255;
    } else if(len >= 435 & len < 500){
      r = 173; 
      g = 216; 
      b =230;
    } else if(len >= 500 & len < 565){
      r = 0; 
      g = 255; 
      b = 255;
    } else if(len >= 565 & len < 630){
      r = 0; 
      g = 255; 
      b = 0;
    } else if(len >= 630 & len < 695){
      r = 255; 
      g = 255; 
      b = 0;
    } else if(len >= 695 & len < 760){
      r = 255; 
      g = 165; 
      b = 0;
    } else if(len >= 760 & len <= 800){
      r = 255; 
      g = 0; 
      b = 0;
    } else{
      r = 0;
      g = 0;
      b = 0;
    }
  }

  fill(r, g, b);
  rect(random(0, width), random(height), volume * 100, volume * 100);


  // if (volume > threshold) {
  // }
}


function touchStarted() {
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
}