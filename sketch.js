
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObject, stone,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,80,30);
	mango2=new mango(1050,150,30);
	mango3=new mango(1000,90,30);
	mango4=new mango(950,180,30);
	mango5=new mango(1120,190,30);
	mango6=new mango(1200,200,30);
	mango7=new mango(1000,240,30);

	treeObject=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stone=new Stone(210,500,70);
	sling=new Sling(stone.body,{x:230,y:420});
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  groundObject.display();
  treeObject.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stone.display();
  sling.display();

  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  
  drawSprites();
  textSize(20);
  text("You have to break all the mangoes from the tree...",20,30);
  text("Press space to get a second chance",20,60);
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    sling.fly();
}

function detectollision(lstone,lmango) {
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<=lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body,false);
  }
}

function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(stone.body,{x:230,y:420})
    sling.attach(stone.body);
  }
}
