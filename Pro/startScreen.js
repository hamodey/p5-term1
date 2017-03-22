var colpick={
  x:50,
  y:40,
  w:50,
  h:50
};
var colpickStore = {
  r:255,
  g:255,
  b:255
}
var colStateR = false; 
function startScreen(){    
  
  background(0);
  fill(0,0,col);//col is the colour of the rect of the start button changes via hover
  rect(ico.x-120,ico.y-30,ico.w,ico.h);
  //controls image
  imageMode(CENTER)
  image(imgs[7],width/2-20,100,width/4,width/4)
  fill(255,150,150);
  textSize(36);
  text("START", width / 2 - 80, height / 2 + 20);
  textSize(18);
  fill(255);
  text("USE THE LEFT AND RIGHT ARROWS TO MOVE and SPACE TO SHOOT", 100,height-100)

  if(mouseX>ico.x-120 && mouseX<ico.x+ico.w && mouseY > ico.y-30 && mouseY < ico.y+ico.h){
      col = 255;
      nextCol = true;//mouse hover over start button
      // state = levelOne;
  }else{
    col = 150;//non-hover
  }
  if(nextCol && mouseIsPressed){
    state = levelOne;//whilst hovering and button pressed
  }
}