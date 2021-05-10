
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject;
var world;
var paperObject;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
  paperObject=new Paper(65,450,70);
	groundObject=new ground(width/2,670,width,20);
  


	dustbinObj=new dustbin(1200,650);
	
var apple=Render.create({
  element : document.body,
  engine : engine,
  var options : {
    width : 1600,
    height : 700,
    wireframes : false

  }
});
	Engine.run(engine);
  Render.run(apple);
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paperObject.display();

}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});
    }
}


