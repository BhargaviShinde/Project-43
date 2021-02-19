var Sa, Ma, Ha;
var h, m, s;


function setup() {
  createCanvas(800,400);
}

function draw() {
  
  background(0);

  fill("#AC68D7");
  stroke("#F1A3BB");
  strokeWeight(3);
  textSize(39)
  text("Time Is Money!!", 250,50);

  noStroke();
  textSize(30);
  fill("#F85125");
  text(s +" seconds", 550,200);
  fill("#7122FA");
  text(m + " minutes", 550,250);
  fill("#13CA91");
  text(h +" hours", 550,300);
  
  angleMode(DEGREES);

  h = hour();
  m = minute();
  s = second();
   
  Sa = map(s, 0, 60, -90, 270);
  Ma = map(m, 0, 60, -90, 270);
  Ha = map(h, 0, 12, -90, 270);
  
  strokeWeight(7);
  fill("black");

  stroke("#13CA91");
  arc(400,200,240,240,-90,Ha);
  
  stroke("#7122FA");
  arc(400,200,210,210,-90,Ma);
  
  stroke("#F85125");
  arc(400,200,180,180,-90,Sa);

  translate(400,200);

  push();
  rotate(Sa);
  stroke("#F85125");
  line(0,0,70,0);
  pop();

  push();
  rotate(Ma);
  stroke("#7122FA");
  line(0,0,50,0);
  pop();

  push();
  rotate(Ha);
  stroke("#13CA91");
  line(0,0,35,0);
  pop();  
  
  drawSprites();
}