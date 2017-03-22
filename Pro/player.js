//-------START OF PLAYER OBJECT----------//
function Player() {
  this.x = 0;//play x and y
  this.y = 0;

  this.create = function(x, y, d) {
    fill(colpickStore.r, colpickStore.g, colpickStore.b);//colour picker changer
    this.x = x;
    this.y = y;
    this.d = d; //Player Diameter
  }

  this.ecollision = function() { //this is the edge collision called in Draw 
    if (this.x > width) {
      this.x = width - 2; //constrains the player to the width of the canvas from the right
    }
    if (this.x < 0) {
      this.x = 2; //contrains the player to width of the canvas from the left 
    }
  }

  this.show = function() {
    ellipse(this.x, this.y, this.d, this.d);
    imageMode(CENTER);
    image(imgs[0],this.x,this.y,this.d,this.d*2);//image of rocket placed above the collions detection circle

    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 10
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.x += -10;
      // console.log('moving');
    }
  }
}
//-------END OF PLAYER OBJECT----------//
