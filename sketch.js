const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  

}



function draw() {
  background(203,1,79);  
  drawSprites();
   Engine.update(engine);

  var options={
    bodyA:ball1.body,
    bodyB:box1.body,
    length:160,
    stiffness:0.04
    }
    chain=Constraint.create(options);

box1.display();
ball1.display();

strokeWeight(3);
stroke("white");
line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,
    this.chain.bodyB.position.x,this.chain.bodyB.position.y);
   

}
function keyPressed(){
    if(keyCode===32){
      Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY});
    }
  }
  













