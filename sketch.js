
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var cground, cpaper;
var binImg, bin;
var left, right, middle;
var clauncher;

function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);
	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	cground = new Ground();

	cpaper = new Paper();
 
  left = new Dustbin(940, height-100, 20, 150);
  right = new Dustbin(1010, height-100, 20, 150);
	middle = new Dustbin(1000, height-60,  100, 20);
	
  clauncher = new Launcher(cpaper.body, {x: 200, y:100})
  
}


function draw() {
  background("white");
  Engine.update(engine);
  
  cground.display();
  cpaper.display();
  left.display();
  middle.display();
  right.display();
  clauncher.display();
  
  drawSprites();
 
}


function mouseDragged(){
  Matter.Body.setPosition(cpaper.body, {x: mouseX, y: mouseY});
}


function mouseReleased(){
  clauncher.fly();
}