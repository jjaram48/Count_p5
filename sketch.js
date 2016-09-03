var counter = 0;
var i = 0;
var text_Size = 120;

function preload() {
  fontRegular = loadFont("assets/DIN/DIN.ttf");
  fontBold = loadFont("assets/DIN/DIN Bold.ttf");
}

function setup() {
  createCanvas(400, 400);
  
  fill(0).strokeWeight(0).textSize(10);
  textFont(fontRegular);
  // text("Font Style Normal", 10, 30);
  textFont(fontBold);
  // text("Font Style Bold", 10, 70);
}

function mousePressed() {
  var x1 = 10;
  var y1 = 90;
  var x2 = mouseX;
  var y2 = mouseY;
  var d = int(dist(x1, y1, x2, y2));
  i++;
}


function draw() {
  noStroke();
  fill(0);
  ellipse(width/2, height/2, 250, 250);
  fill(255);
  rectMode(CENTER);
  
  // keyPressed("c"){
  //   i++;
  // }
  textSize(text_Size);
  textAlign(CENTER,CENTER);
  text(i, (width/2)-(text_Size/35), (height/2)-(text_Size/7));
}