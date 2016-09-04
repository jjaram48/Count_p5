var counter = 0;
var i = 0;
var text_Size = 120;

function preload() {
  fontRegular = loadFont("assets/DIN/DIN.ttf");
  fontMedium = loadFont("assets/DIN/DIN Medium.ttf");
  fontBold = loadFont("assets/DIN/DIN Bold.ttf");
}

function setup() {
  createCanvas(400, 400);

  // textFont(fontRegular);
  // text("Font Style Normal", 10, 30);
  // textFont(fontBold);
  // text("Font Style Bold", 10, 70);
}

function mousePressed() {
  i++;
}

function circle(){
  noStroke();
  fill(0);
  ellipse(width / 2, height / 2, 250, 250);
}

function count(){
  // Text formatting  
  fill(255);
  // noFill();
  // stroke(255);
  rectMode(CENTER);
  // textFont(fontRegular);
  textFont(fontBold);
  // textFont(fontMedium);
  textSize(text_Size);
  textAlign(CENTER, CENTER);
  // Display text
  text(i, (width / 2) - (text_Size / 35), (height / 2) - (text_Size / 7));
}

function draw() {
  circle();
  count();
}