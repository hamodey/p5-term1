var bullets = []; //Bullet array
var p1 = new Player();

var e = []; //enemy array
var sound = [0, 1, 2]
var counter = 0;
var kCounter = 0;
var kCounterHold;
var kCounterHoldy;
var walls = {
  x: 0,
  y: 0,
  w: 100,
  h: 20 
};
var img;
var imt = false;
var ico = {
  x: 400,
  y: 300,
  w: 200,
  h: 75
}
var state = startScreen;
var holdingState = 0;
var col = 150;
var nextCol = false;
function preload() {
  sound[0] = loadSound('libraries/plop.wav');
  sound[1] = loadSound('libraries/gameover.wav');
  img = loadImage('libraries/poof.png')
}
//-------START OF SETUP----------//
function setup() {
  createCanvas(800, 600);
  p1.create(width / 2, height - 50, 20, 20); //created player at starting postion
  for (var u = 0; u < 5; u++) { //5 for, 5 enemies
    e[u] = new enemy(u * 60, 60, 30);
  }
  walls.x = random(100, 200);
  walls.y = random(350, 450);
}
//-------END OF SETUP----------//


//-------START OF DRAW----------//
function draw() {
  state();
}
//-------END OF DRAW ----------//


//-------START OF KEYPRESSED----------//
function keyPressed() {
  if (key === ' ') {
    var blt = new Bullet(p1.x, p1.y - 20, 20); //variable that calls the Bullet object with inbuilt functions
    bullets.push(blt); //releases the array material where the for loop is called in draw with Move and Show
    sound[0].play();
    ellipse(p1.x,p1.y,50,50)
    counter += 1;
  }
  if (key === 'R' && state === gameOver) {
    console.log(bullets.length);
    for (i = 0; i < bullets.length; i++) {
      bullets.splice(i, bullets.length);
    }
    state = levelOne;
    p1.create(width / 2, height - 50, 20, 20); //created player at starting postion
    for (var u = 0; u < 5; u++) { //13 for, 13 enemies
      e[u] = new enemy(u * 60, 60, 30);
    }
    walls.x = random(100, 200);
    walls.y = random(350, 450);
    console.log('NEW GAME');
  }
}
//-------END OF KEYPRESSED----------//

function mousePressed(){
  if(mouseX>ico.x-120 && mouseX<ico.x+ico.w && mouseY > ico.y-30 && mouseY < ico.y+ico.h && state === startScreen){
    col = 255;
    state = levelOne;
    p1.x = width / 2
    p1.y = height - 50;
  }
}