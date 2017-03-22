
function startScreen(){    
    background(0)
    push();
    fill(0,0,col);
    rect(ico.x-120,ico.y-30,ico.w,ico.h);
    pop();
    push();
    fill(0);
    textSize(36);
    text("START", width / 2 - 80, height / 2 + 20);
    pop();
    
  if(mouseX>ico.x-120 && mouseX<ico.x+ico.w && mouseY > ico.y-30 && mouseY < ico.y+ico.h){
      // fill(0,255,0)
      col = 255;
      // state = levelOne;
      // p1.x = width / 2
      // p1.y = height - 50;
      nextCol = true;
  }else{
    col = 150;
  }
  while(nextCol && mouseIsPressed){
    state = levelOne;
  }
}