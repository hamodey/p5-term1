
//-------START OF BULLET OBJECT----------//
function Bullet(x, y, d) {
  this.x = x; //bullet x- value
  this.y = y; //bullet y- value
  this.d = d; //bullet Diameter
  this.s = 5;
  this.toDelete = false;

  this.show = function() {
    fill(150, 255, 150);
    ellipse(this.x, this.y, this.d / 2, this.d / 2);
  }

  this.wallCol = function() {
    if (this.y > walls.y && this.x > walls.x && this.x < walls.x + walls.w && this.y < walls.y + walls.h || this.y > walls.y && width - this.x > walls.x && width - this.x <
      walls.x + walls.w && this.y < walls.y + walls.h || this.y < 0) {

      this.s = -this.s;

    }
  }

  this.p1Col = function() {
    var pdi = dist(this.x, this.y, p1.x, p1.y);
    if (pdi < this.d / 2 + p1.d / 2) {
      console.log('GAME OVER')
      sound[1].play();
      state = gameOver;
      kCounter = 0;
    }
  }

  this.move = function() {
    this.y = this.y - this.s; //velocity of the bullet moving up 
  }

  this.hits = function(enemy) {
    var d = dist(this.x, this.y, enemy.x, enemy.y);
    if (d < this.d / 2 + enemy.d / 2) {
      return true;
    } else {
      return false;
    }
  }


  this.off = function() {
    toDelete = true;
    this.x = 6000;
    this.y = 6000;
  }
}
//-------END OF BULLET OBJECT----------//
