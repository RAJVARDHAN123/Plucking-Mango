class Stone{

    constructor(x,y, r){

     var options = {

      isStatic: false,
      restitution: 0,
      friction: 1,
      denstity: 1.2

     }

     this.body = Bodies.circle(x,y,r);
     this.r = r;

       World.add(world, this.body);

     this.image = loadImage("stone.png");

    }

    display(){

        var pos = this.body.position;

    ellipseMode(RADIUS);
    imageMode(CENTER);
    image(this.image, pos.x, pos.y, this.r*2, this.r*2);

    }

}
