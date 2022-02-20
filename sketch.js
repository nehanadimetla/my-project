const Engine=Matter.Engine;
const Render=Matter.Render;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
const Body=Matter.Body;
const Composites=Matter.Composites;
const Composite=Matter.Composite;

var backgroundImg;
var ground;

function preload(){
backgroundImg=loadImage("./assets/background.png");
}
function setup(){
  createCanvas(500,800);
  engine=Engine.create();

  world=engine.world;
  ground=new Ground(250,height-10,width,20);
}
function draw(){
  background(51);
  image(backgroundImg,0,0,width,height);
  Engine.update(engine);
  ground.show();
  
  drawSprites();
}