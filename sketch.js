
var person , person_running ; 
var groundImage , ground;

function preload(){
  person_running = loadAnimation("Runner-1.png","Runner-2.png");
  groundImage = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);

  ground = createSprite(200,200);
  ground.addImage(groundImage);
  ground.velocityY = -4
  
  person = createSprite(180,340,30,30);
  person.addAnimation(person_running);
  person.scale = 0.5;
  

  
}


function draw(){
  
  background("white");
 person.x = World.mouseX ; 
 edgese = createEdgeSprites();
 person.collide(edgese[3]);
  
  person.collide(ground);
  if(ground.y>400){
    ground.y = height/2
  }
  drawSprites();
}
