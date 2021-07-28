var ship,ship1,edges;
var sea,sea1;

function preload(){
  ship1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  sea1=loadImage("sea.png");
}
  
  

function setup(){
  createCanvas(600,500);

  //creating the sea
  sea= createSprite(600,300);
  sea.addImage("moving",sea1);
  sea.scale = 0.5;
  sea.velocityX=-1;
  
  //creating the ship
  ship=createSprite(300,180,600,10);
  ship.addAnimation("moving",ship1);
  edges = createEdgeSprites();

  //Giving scale and x,y position to ship
  ship.scale=0.25;
  ship.x = 90;
  ship.y=300
}


function draw() {
  background("blue");
  if(keyDown("right")){
    ship.velocityX=5;
  }    
  if(keyDown("left")){
    ship.velocityX=-5;
  }
  if(keyDown("space")){
    ship.velocityX=0;
  }
  if(sea.x<0){
    sea.x=ground.width/2;
  }
  //stop the ship from falling down
  ship.collide(edges[3])
  drawSprites();
}