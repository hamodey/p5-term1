function levelOne(){
    background(255, 150, 150);
    image(imgs[3],0,0,width,height)//background image of space 8 bit
    for (var i = 0; i < bullets.length; i++) { //a for loop to create the bullets that the player shoots
      bullets[i].show(); //this will 'show' the bullet
      bullets[i].move(); //this will 'move' the bullet 
      bullets[i].wallCol();
      bullets[i].p1Col();
      for (var j = 0; j < e.length; j++) {//for in a for loop so collision detection can be ran
        if (bullets[i].hits(e[j])) {//if .hits returns true the parameter 'other' is e[j] and the below code can run such as sound and so on
          sound[2].play();
          e[j].off();
          bullets[i].off();
          kCounter += 1;//hit counter increments
        }
      }
    }
    fill(150, 255, 150);
    p1.show(); //show the player at the point its created
    p1.ecollision(); //this is the edge collision for left to right 
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
    fill(200);
    rect(walls.x, walls.y, walls.w, walls.h);    
    imageMode(CORNER);
    image(imgs[2],walls.x,walls.y,walls.w,walls.h);
    rect(width - walls.x - 100, walls.y, walls.w, walls.h);
    image(imgs[2],width - walls.x - 100,walls.y,walls.w,walls.h);//images of the wall is placed over the rect 
//to be symetrical it has to minus the width, hence the -100
    fill(255);
    textSize(24);
    text("Shots:" + counter, 10, 30);
    text("Level One", width/2-50,30);
    text("Hits:" + kCounter, 10, 53);
    text("Total" + kCounterHold, 10,84)

    if(kCounter>14 && state == levelOne){
      kCounterHold = kCounter;//kCounterHold is holding the score of the game to when the game ends OR completes - this shows the true score at the end
      state = levelTwoInter;//changes to level two - funciton setup which is called function levelTwoInter()
      sound[3].play();
    }
}