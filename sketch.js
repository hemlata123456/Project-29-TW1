
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var slingShot,ball;
function preload(){
    polygon_img=loadImage("polygon.png");
  }
function setup() {
    createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    ground = new Ground();
    stand1 = new Stand(390,300,250,10);
    stand2 = new Stand(700,200,200,10);
    //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});



    blocks1 = new Block(640,175,30,40);
}
function draw() {
    background(56,44,44); 
   
    //Engine.update(engine);
    //text(mouseX + ',' + mouseY, 10, 15);
    textSize(20);
    fill("lightyellow");
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);
  
    ground.display();
    stand1.display();
    stand2.display();
    fill("yellow")
    blocks1.display();
}
