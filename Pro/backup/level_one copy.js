function levelOne(){
    background(255, 150, 150);
    for (var i = 0; i < bullets.length; i++) { //a for loop to create the bullets that the player shoots
      bullets[i].show(); //this will 'show' the bullet
      bullets[i].move(); //this will 'move' the bullet 
      bullets[i].wallCol();
      bullets[i].p1Col();
      for (var j = 0; j < e.length; j++) {
        if (bullets[i].hits(e[j])) {
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
    rect(width - walls.x - 100, walls.y, walls.w, walls.h); //to be symetrical it has to minus the width, hence the -100
    fill(255);
    textSize(24);
    text("Shots:" + counter, 10, 30);
    text("Hits:" + kCounter, 10, 53);
    text("Total" + kCounterHold, 10,84)
    
    if(kCounter>14 && state == levelOne){
      state = levelTwoInter;
    }


}