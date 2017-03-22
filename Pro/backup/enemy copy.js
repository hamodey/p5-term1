
//-------START OF ENEMY ----------//
function enemy(x, y, d) {
  this.x = x;
  this.y = y;
  this.d = d;
  this.s = 2;

  this.goDown = function() {
    this.s = -this.s;
    this.y += this.d / 2 + 5; //+5 as if its not plus 5 it will touch the enemies in the above row, we need them to be seperated
  }

  this.move = function() {
    this.x = this.x + this.s;
  }

  this.show = function() {
    fill(150, 150, 255);
    ellipse(this.x, this.y, this.d / 2, this.d / 2);
  }

  this.off = function() {
    this.d = this.d / 2;
    if (this.d < 5) {
      this.x = 5000;
      this.y = 5000;
    }
  }
}
//-------END OF ENEMY ----------//
