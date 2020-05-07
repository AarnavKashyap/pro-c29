const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19;
var bird, slingshot;
var ground,ground2,platform;

function preload() {
    bgimg = loadImage("sprites/bg.png");
}


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    platform = new Ground(150, 305, 300, 170);
    ground = new Ground(600,395,1200,10);
    ground2 = new Ground(900,170,200,10);
    


    box1 = new Box(500,320,50,50);
    box2 = new Box(550,320,50,50);
    box3 = new Box(600,320,50,50);
    box4 = new Box(650,320,50,50);
    box5 = new Box(700,320,50,50);
    box6 = new Box(525,270,50,50);
    box7 = new Box(575,270,50,50);
    box8 = new Box(625,270,50,50);
    box9 = new Box(675,270,50,50);
    box10 = new Box(550,220,50,50);
    box11 = new Box(600,220,50,50);
    box12 = new Box(650,220,50,50);
    box13 = new Box(600,170,50,50);

    box14 = new Box2(850,160,50,40);
    box15 = new Box2(895,160,50,40);
    box16 = new Box2(940,160,50,40);
    box17 = new Box2(870,140,50,40);
    box18 = new Box2(915,140,50,40);
    box19 = new Box2(890,120,50,40);
    
    bird = new Bird(200,50);

    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background('white');
    Engine.update(engine);
platform.display();
    ground.display();
    ground2.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();

    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();

    bird.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
   if(keyCode===32){
       slingshot.attach(bird.body)
   }
}