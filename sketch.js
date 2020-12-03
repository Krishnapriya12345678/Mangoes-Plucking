var tree,treeImage
var boy,boyImage
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9
var stone1
var catapult1
var ground1
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(900, 700);

tree=createSprite(550,450,10,40)
treeImage=loadImage('tree.png')
tree.scale=0.5

boy=createSprite(200,620,10,30)
boyImage=loadImage('boy.png')
boy.scale=0.1





	engine = Engine.create();
	world = engine.world;

  mango1=new Mango(600,400)
  mango2=new Mango(500,350)
  mango3=new Mango(650,200)
  mango4=new Mango(400,450)
  mango5=new Mango(700,300)
  mango6=new Mango(400,290)
  mango7=new Mango(800,350)
  mango8=new Mango(590,300)
  mango9=new Mango(500,250)
	ground1=new Ground(400,690,900,20)
	stone1=new Stone(50,550,30)
	catapult1=new Catapult(stone1.body,{x:150,y:560})
	Engine.run(engine);
  
}


function draw() {
  console.log(stone1.radius)
  rectMode(CENTER);
  background("lightblue");
  
  drawSprites();
 tree.addImage("tree",treeImage)
 boy.addImage("boy",boyImage)

 mango1.display()
 mango2.display()
 mango3.display()
 mango4.display()
 mango5.display()
 mango6.display()
 mango7.display()
 mango8.display()
 mango9.display()
 stone1.display()
 catapult1.display()
ground1.display()

 if(isTouching(stone1,mango1)){
  Matter.Body.setStatic(mango1.body,false)
}
if(isTouching(stone1,mango2)){
  Matter.Body.setStatic(mango2.body,false)

}
if(isTouching(stone1,mango3)){
  Matter.Body.setStatic(mango3.body,false)
}
if(isTouching(stone1,mango4)){
  Matter.Body.setStatic(mango4.body,false)
}
if(isTouching(stone1,mango5)){
  Matter.Body.setStatic(mango5.body,false)
}
if(isTouching(stone1,mango6)){
  Matter.Body.setStatic(mango6.body,false)
}
if(isTouching(stone1,mango7)){
  Matter.Body.setStatic(mango7.body,false)
}
if(isTouching(stone1,mango8)){
  Matter.Body.setStatic(mango8.body,false)
}
if(isTouching(stone1,mango9)){
  Matter.Body.setStatic(mango9.body,false)
}
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    catapult1.fly();
}
function keyPressed(){
    if(keyCode=32){
    catapult1.attach(stone1.body)
    }
}



function isTouching(object1,object2){
  var distance=dist(object2.body.position.x,object2.body.position.y,object1.body.position.x,object1.body.position.y)
if(distance<object2.radius/2+object1.radius/2){
return true
}else{
  return false
}

}





















