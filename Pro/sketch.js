var bullets = []; //Bullet array
var p1 = new Player();
var pu = [];//power ups
var e = []; //enemy array
var sound = [0, 1, 2, 3, 4]
var counter = 0;//shoot counter (how many times press ' ' space)
var kCounter = 0;//hit counter - amount of hits made
var kCounterHold;//points holder hits counter divided by 3 - as 3 hits is 1 point
var walls = {
  x: 0,
  y: 0,
  w: 100,
  h: 20 
};
var imgs = [];//array of images 
var ico = {//start button variables
  x: 400,
  y: 300,
  w: 200,
  h: 75
};
var state = startScreen;//start the game at start screen at all times of running
var col = 150;
var nextCol = false;
function preload() {
  //sounds
  sound[0] = loadSound('libraries/plop.wav');
  sound[1] = loadSound('libraries/gameover.wav');
  sound[2] = loadSound('libraries/hit.wav');
  sound[3] = loadSound('libraries/new-lvl.wav');
  sound[4] = loadSound('libraries/win.wav');
  //images
  imgs[0] = loadImage('assets/rocket.png');
  imgs[1] = loadImage('assets/space.png');
  imgs[2] = loadImage('assets/wall.png');
  imgs[3] = loadImage('assets/background.png');
  imgs[4] = loadImage('assets/boom.png');
  imgs[5] = loadImage('assets/background1.png');
  imgs[6] = loadImage('assets/background2.jpeg');
  imgs[7] = loadImage('assets/arrow_keys.png');
}
//-------START OF SETUP----------//
function setup() {
  createCanvas(800, 600);//screen size
  p1.create(width / 2, height - 50, 20, 20); //created player at starting postion
  for (var u = 0; u < 5; u++) { //5 for, 5 enemies
    e[u] = new enemy(u * 60, 60, 30);//u * 60 is the x position of the enemy location
  }
  walls.x = random(100, 200);//randomise the wall locations
  walls.y = random(350, 450);
}
//-------END OF SETUP----------//


function draw() {
  state();//draw is used from other functions as state = otherFunction() ie
}


//-------START OF KEYPRESSED----------//
function keyPressed() {
  if (key === ' ' && state !==gameOver) {//if space is pressed AND not game over 
    var blt = new Bullet(p1.x, p1.y - 20, 20); //variable that calls the Bullet object with inbuilt functions
    bullets.push(blt); //releases the array material where the for loop is called in draw with Move and Show
    sound[0].play();//play pop sound
    ellipse(p1.x,p1.y,50,50)
    counter += 1;
  }
  if (key === 'R' && state === gameOver) {//restart the game on game over
    // console.log(bullets.length);
    for (i = 0; i < bullets.length; i++) {//removes all remaining bullets in the game 
      bullets.splice(i, bullets.length);//i to the total length of the array
    }
    state = levelOne;
    p1.create(width / 2, height - 50, 20, 20); //created player at starting postion
    //function setup is then called again 
    for (var u = 0; u < 5; u++) { //5 for, 5 enemies
      e[u] = new enemy(u * 60, 60, 30);
    }
    
    kCounter = 0;//resets scores
    //creates walls at random between 100,200 and 350 and 450
    walls.x = random(100, 200);
    walls.y = random(350, 450);
    console.log('NEW GAME');
  }
}
//-------END OF KEYPRESSED----------//

// function mousePressed(){
//   if(mouseX>ico.x-120 && mouseX<ico.x+ico.w && mouseY > ico.y-30 && mouseY < ico.y+ico.h && state === startScreen){
//     col = 255;
//     state = levelOne;
//     p1.x = width / 2
//     p1.y = height - 50;
//   }
// }