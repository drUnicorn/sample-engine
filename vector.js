function Vector(x,y){
 if(!this instanceof Vector){
  return new Vector(x,y);
 }
 this.x = x;
 this.y = y;
}

Vector.prototype.length = function(){
 return Math.sqrt(this.x*this.x + this.y*this.y);
}

Vector.prototype.dir = function(){
 return Math.atan(this.x/this.y);
}
