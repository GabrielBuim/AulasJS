const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var options;
var ball;
var buttom1;
var button2;
function setup() {
  button1 = createImg("up.png");
  button1.position(20,30);
  button1.size(50,50);

  button1.mouseClicked(up);
  
  button2 = createImg("right.png");
  button2.position(100,30);
  button2.size(50,50);
  button2.mouseClicked(right);


  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

 options = {
   restitution: 0.98
 }
 ball = Bodies.circle(200,200,20,options);
 World.add(world,ball);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}
function up(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}
function right(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}

function draw() 
{
  background(51);
  ellipse(ball.position.x,ball.position.y,20);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
}

