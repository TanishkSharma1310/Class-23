const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var g1, b1,b2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

   g1 = new Ground(200,380,400,20);
   b1 = new Box(200,100,30,40);
   b2 = new Box(180,200,20,40);

    console.log(g1);
}

function draw(){
    background(0);
    Engine.update(engine);
   g1.display();
   b1.display();
   b2.display();
}