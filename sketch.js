
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(900, 700);

	engine = Engine.create();
	world = engine.world;

	paper=new Paper(680,20);
	groundObj=new ground(450,height,900,40);

	dustbin1= new Dustbin(750,680,100,10);
	dustbin2= new Dustbin(700,630,10,100);
	dustbin3= new Dustbin(800,630,10,100);

	Engine.run(engine);
    keyPressed();
}


function draw() {
  background(255);

  paper.display();
  groundObj.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
 
}
function keyPressed(){
	if (keyCode === DOWN_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:10,y:-45});
	  }
}


