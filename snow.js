class Snow {
    constructor(x,y,width,height) {
      var options = {
        restitution:0.5,
        friction:0.8,
        density:1
      }

      this.body = Bodies.rectangle(x,y,10,10,options);
      this.image = loadImage("snow4.webp");

      this.width = width;
      this.height = height;
      

      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle
      push()
      translate(this.body.position.x,this.body.position.y);
      rotate(angle)
      
      imageMode(CENTER);
      image(this.image,0,0,100,100);
      pop()
    }
  };
