class Drops{
    constructor (x,y) {
        var options = {
          'restitution':0.1,
          'friction':0.1,
          'isStatic': false 
        };
        this.body = Bodies.circle(x, y,2, options);
          this.radius = 2;
          //this.image = loadImage("sprites/base.png");
          World.add(world, this.body);
    };
    display(){
          
         fill("blue");
         ellipseMode(RADIUS);
          ellipse(this.body.position.x,this.body.position.y,2,2);


          
  }
  update(){
       if(this.body.position.y > height){ 
           Matter.Body.setPosition(this.body, {x : random(0, 500), y : random(0, 700)});
         } 
        }
  };
