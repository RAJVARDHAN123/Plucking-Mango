
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
var background1;

function preload(){
	boy=loadImage("images/boy.png");
	background1 = loadImage("images/background.jpg")
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2 = new mango(1000, 100, random(25, 30));
	mango3 = new mango(990, 180, random(25, 30));
	mango4 = new mango(900, 220, random(25, 30));
	mango5 = new mango(1080, 160, random(25, 30));
	mango6 = new mango(1130, 280, random(25, 30));
	mango7 = new mango(1180, 180, random(25, 30));
	mango8 = new mango(950, 250, random(25, 30));
	mango9 = new mango(1180, 250, random(25, 30));
	mango10 = new mango(1050, 220, random(25, 30));

	stone = new Stone(305,480, 30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	catapault = new rubber(stone.body, {x: 305, y: 480});
	
	Engine.run(engine);

}

function draw() {

  background(background1);
  //Add code for displaying text here!
  image(boy ,200,300,600,300);
  
  //console.log(mouseY);

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  detectCollision(stone, mango8);
  detectCollision(stone, mango9);
  detectCollision(stone, mango10);


  stone.display();
  catapault.display();

  groundObject.display();
}

function keyPressed(){

  if(keyCode == 32){

   Matter.Body.setPosition(stone.body, {x: 305, y: 480});
   catapault.attach(stone.body);

  }

}

function mouseDragged(){

  Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
  
}

function mouseReleased(){

   catapault.fly();

}

function detectCollision(lstone,lmango){
  stoneBodyPosition = lstone.body.position;
  mangoBodyPosition = lmango.body.position;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  if(distance <= lmango.r + lstone.r){
    Matter.Body.setStatic(lmango.body, false);
  }

}
