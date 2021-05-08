const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;

var ground, Stand1, slingshot, polygon;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10; 
var block11 , block12, block13, block14, block15, block16;

var Stand2;
var Block1, Block2, Block3, Block4, Block5, Block6, Block7, Block8, Block9, Block10; 
var Block11 , Block12, Block13, Block14, Block15, Block16;


function setup(){
   createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,390,1200,20);

    Stand1 = new Ground(580,300,200,20);
    Stand2 = new Ground(900,200,200,20);

    polygon = new Polygon(110, 100, 30);

 // First Pyramid
    // level one
    block1 = new Box1(520,200,20,30);
    block2 = new Box1(540,200,20,30);
    block3 = new Box1(560,200,20,30);
    block4 = new Box1(580,200,20,30);
    block5 = new Box1(600,200,20,30);
    block6 = new Box1(620,200,20,30);
    block7 = new Box1(640,200,20,30);
    // level two
    block8 = new Box2(540,190,20,30);
    block9 = new Box2(560,190,20,30);
    block10 = new Box2(580,190,20,30);
    block11 = new Box2(600,190,20,30);
    block12 = new Box2(620,190,20,30);

    // level three
    block13 = new Box1(560,170,20,30);
    block14 = new Box1(580,170,20,30);
    block15 = new Box1(600,170,20,30);

    // Top
    block16 = new Box2(580,140,20,30);

 // Second Pyramid
// level one
Block1 = new Box1(840,100,20,30);
Block2 = new Box1(860,100,20,30);
Block3 = new Box1(880,100,20,30);
Block4 = new Box1(900,100,20,30);
Block5 = new Box1(920,100,20,30);
Block6 = new Box1(940,100,20,30);
Block7 = new Box1(960,100,20,30);
// level two
Block8 = new Box2(860,90,20,30);
Block9 = new Box2(880,90,20,30);
Block10 = new Box2(900,90,20,30);
Block11 = new Box2(920,90,20,30);
Block12 = new Box2(940,90,20,30);

// level three
Block13 = new Box1(880,70,20,30);
Block14 = new Box1(900,70,20,30);
Block15 = new Box1(920,70,20,30);

// Top
Block16 = new Box2(900,40,20,30);    
    


    slingshot = new SlingShot(polygon.body,{x:100, y:200});
   
    
}

function draw(){
    background("lightgreen");

    strokeWeight(4);
    polygon.display();
    slingshot.display(); 
    Stand1.display();
    Stand2.display();

// first pyramid
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
// second pyramid
    Block1.display();
    Block2.display();
    Block3.display();
    Block4.display();
    Block5.display();
    Block6.display();
    Block7.display();
    Block8.display();
    Block9.display();
    Block10.display();
    Block11.display();
    Block12.display();
    Block13.display();
    Block14.display();
    Block15.display();
    Block16.display();
  
    
    Engine.update(engine);

   
} 
function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
         slingshot.fly();

}



