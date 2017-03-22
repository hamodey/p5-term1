function levelTwoInter(){//this function replicates the setup function in sketch.js however changes slightly due to the level
  createCanvas(800, 600);
  p1.create(width / 2, height - 50, 20, 20); //created player at starting postion
  for (var u = 0; u < 7; u++) { //7 for, 7 enemies
    e[u] = new enemy(u * 60, 60, 30);
  }
  walls.x = random(100, 200);
  walls.y = random(350, 450);
  for (var ii = 0; ii < bullets.length; ii++){
    bullets[ii].off();
  }
  state = levelTwo;
  kCounter = 0;
}
function levelTwo(){
  //////////////////PLEASE READ/////////////////////
  //code here is the same as level one only difference is level two has  more enemies which is //
  //defined in the levelTwoInter using the for loop (line 4-6, level_two.js)//
  //////////////////////////////////////////////////
    background(255, 150, 150);
    image(imgs[5],0,0,width,height)//background changes AS LEVEL changes
    for (var i = 0; i < bullets.length; i++) { //a for loop to create the bullets that the player shoots
      bullets[i].show(); //this will 'show' the bullet
      bullets[i].move(); //this will 'move' the bullet 
      bullets[i].wallCol();
      bullets[i].p1Col();
      for (var j = 0; j < e.length; j++) {
        if (bullets[i].hits(e[j])) {
          sound[2].play();
          e[j].off();
          bullets[i].off();
          kCounter += 1;
        }
      }
    }
    push();
    fill(150, 255, 150);
    p1.show(); //show the player at the point its created
    p1.ecollision(); //this is the edge collision for left to right 
    pop();
    //-----------//
    var edge = false;
    for (var a = 0; a < e.length; a++) {
      e[a].show();
      e[a].move();
      if (e[a].x > width || e[a].x < 0) {
        e[a].goDown();
        edge = true;
      }
    }

    rect(walls.x, walls.y, walls.w, walls.h);    
    imageMode(CORNER);
    image(imgs[2],walls.x,walls.y,walls.w,walls.h);
    rect(width - walls.x - 100, walls.y, walls.w, walls.h);
    image(imgs[2],width - walls.x - 100,walls.y,walls.w,walls.h);
    //to be symetrical it has to minus the width, hence the -100
    fill(255);
    textSize(24);
    text("Shots:" + counter, 10, 30);
    text("Level Two", width/2-50,30);
    text("Hits:" + kCounter, 10, 53);
    text("Total" + kCounterHold, 10,84)
    
    if(kCounter>20 && state == levelTwo){
      state = levelThreeInter;
      sound[3].play();
    }
    
}

