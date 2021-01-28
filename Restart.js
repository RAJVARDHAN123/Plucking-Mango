class Restart{

 constructor(x, y, r){

    var option = {

        isStatic: true 

    }

   this.body = Bodies.circle(x, y, r, option);
   this.r = r;
   World.add(world, this.body);

   this.image = loadImage("images/restart.png");

 }

 display(){

   var pos = this.body.position;

   ellipseMode(RADIUS);
   imageMode(CENTER);
   image(this.image, pos.x , pos.y, this.r * 2, this.r * 2);

 }

}