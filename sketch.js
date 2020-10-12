const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, object,backgroundImg ;

function preload() {
  backgroundImg = loadImage("images/back2.png");
  boy_idle= loadImage("png/Idle (1).png")

}

function setup() {
  var canvas = createCanvas(1900,700);

  engine = Engine.create();
  world  = engine.world;

  
  backgroundImg.velocityX=-5;

 boy = createSprite(200,600);
  boy.addImage("boyIdle",boy_idle);
  boy.scale=0.2;
  
 
}

function draw() {
  background(backgroundImg); 
  
  Engine.update(engine);

 

  if(keyDown("right")){
    boy.x=boy.x+10;
  }

  boy.display();

  drawSprites();
}