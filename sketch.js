const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var options = {
    isStatic : true
  }
  ground = Bodies.rectangle(200,380,400,10,options);
  World.add(world,ground);
  console.log(ground);
  
  var ball_options = {
    restitution : 1.5
  }
  ball = Bodies.circle(200,200,25,ball_options);
  World.add(world,ball);
}

function draw() {
  background("black");
  Engine.update(engine);  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,25,25);
  drawSprites();
}