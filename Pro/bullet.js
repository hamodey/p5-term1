
//-------START OF BULLET OBJECT----------//
function Bullet(x, y, d) {
  this.x = x; //bullet x- value
  this.y = y; //bullet y- value
  this.d = d; //bullet Diameter
  this.s = 5;
  this.toDelete = false;

  this.show = function() {
    fill(0, 0, 255);
    ellipse(this.x, this.y, this.d / 2, this.d / 2);
    imageMode(CENTER);
    image(imgs[4],this.x,this.y,this.d,this.d);//image placed on top of the collision detection ellipse
  }

  this.wallCol = function() {
    if (this.y > walls.y && this.x > walls.x && this.x < walls.x + walls.w && this.y < walls.y + walls.h || this.y > walls.y && width - this.x > walls.x && width - this.x <
      walls.x + walls.w && this.y < walls.y + walls.h || this.y < 0) {

      this.s = -this.s;

    }
  }

  this.p1Col = function() {//collision detection with player1
    var pdi = dist(this.x, this.y, p1.x, p1.y);
    if (pdi < this.d / 2 + p1.d / 2) {
      console.log('GAME OVER')
      sound[1].play();//game over sound
      state = gameOver;
    }
  }

  this.move = function() {
    this.y = this.y - this.s; //velocity of the bullet moving up 
  }
  
  this.hits = function(other) {//collision detection with the parameter in blue (other)
    var d = dist(this.x, this.y, other.x, other.y);
    if (d < this.d / 2 + other.d / 2) {
      return true;//returns the value true to the function and if the statement is true when this.hits is called the function below will be called
    } else {
      return false;
    }
  }


  this.off = function() {//removed the ememy off the screen and removes it out of the array
    toDelete = true;
    this.x = 6000;
    this.y = 6000;
  }
  
  this.up1 = function(){
    this.x++
  }
}
//-------END OF BULLET OBJECT----------//
