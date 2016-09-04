var counter = 0;
var mic;

function preload() {
  fontRegular = loadFont("assets/DIN/DIN.ttf");
  fontMedium = loadFont("assets/DIN/DIN Medium.ttf");
  fontBold = loadFont("assets/DIN/DIN Bold.ttf");
}


function setup() {
  createCanvas(400, 400);
  
  mic = new p5.AudioIn()
  mic.start();

  // textFont(fontRegular);
  // text("Font Style Normal", 10, 30);
  // textFont(fontBold);
  // text("Font Style Bold", 10, 70);
}

// function counting() {
  function mousePressed() {
    counter++;
  }
// }

function audio_counter(mic_listener){
  var micListener = mic_listener;
  if(micListener > 0.3){
    counter++;
  }
}

function circle() {
  noStroke();
  fill(0);
  ellipse(width / 2, height / 2, 250, 250);
}

function count_display() {
  var text_Size = 120;
  textSize(text_Size);
  textAlign(CENTER, CENTER);
  
  // Text formatting  
  fill(255);
  // noFill();
  // stroke(255);
  rectMode(CENTER);
  
  // textFont(fontRegular);
  textFont(fontBold);
  // textFont(fontMedium);

  
  // Display text
  // Division by text_size in order to 
  text(counter, (width / 2) - (text_Size / 35), (height / 2) - (text_Size / 7));
}

function mic_input(){
  micLevel = mic.getLevel();
  ellipse(width/2, constrain(height-micLevel*height*5, 0, height), 10, 10);
  return(micLevel);
}

function draw() {
  background(0);
  // counting();
  // circle();
  mic_input();
  audio_counter(micLevel);
  count_display();
  println(micLevel);
  
 
  
}