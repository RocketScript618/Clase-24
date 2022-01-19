const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var ball;
var ground;
var tGround;

var button;

var angle = 17;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var options = {
    restitution: 2,
    frictionAir: 0.05
  }

  button = createImg('up.png');
  button.position(350,50);
  button.size(50,50);
  button.mouseClicked(fuerza);


  var gOptions = {
    isStatic: true
  }

  ground = Bodies.rectangle(200,100,100,20,gOptions);
  World.add(world,ground);

  tGround = Bodies.rectangle(200,375,400,10,gOptions);
  World.add(world,tGround);
  
  ball = Bodies.circle(200,15,25,options);
  World.add(world,ball);

  rectMode(CENTER);
}


function draw() {
  background("black");
  
  Engine.update(engine);
  Matter.Body.rotate(ground,angle);

  push();
  translate(ground.position.x,ground.position.y);
  rotate(angle);
  rect(0,0,100,20);
  pop();

  angle += 1;

  ellipse(ball.position.x, ball.position.y, 25);
  rect(tGround.position.x,tGround.position.y,400,10);
}

function fuerza(){
  Matter.Body.applyForce(ball,{
    x: 0, 
    y:0
  },{
    x:0,
    y:-0.05
  });
}