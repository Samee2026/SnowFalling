const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg
var snow = [];
var snowman

function preload() {
   backgroundImg = loadImage("snow1.jpg");
   snowmanImg = loadImage("snowman1.png");
}

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

}
function draw(){
   background(backgroundImg);
   
  
    Engine.update(engine);
    if(frameCount%20 === 0){
      snow.push(new Snow(random(10,600),random(10,100)));
    }
    for(var j = 0;j < snow.length;j++){
    console.log("Snow Falling Down")
    snow[j].display();
  }
  
  snowman123();
  drawSprites();
}

function snowman123(){
  snowman = createSprite(400,200,20,20);
  snowman.addImage("snowman",snowmanImg)
  snowman.scale = 0.31

}
