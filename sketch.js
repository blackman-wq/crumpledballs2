//create a trex sprite
var trex = createSprite(200,380,20,50);
trex.setAnimation("trex");

//scale and position the trex
trex.scale = 0.5;
trex.x = 50;

//create a ground sprite
var ground = createSprite(200,380,400,20);
ground.setAnimation("ground2");
ground.x = ground.width /2;

var invisibleGround = createSprite(200,385,400,5);
invisibleGround.visible = false;



function draw() {
  //set background to white
  background("white");
  
  ground.velocityX = -2;
  
  //console.log(trex.y);
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //jump when the space key is pressed
  if(keyDown("space") && trex.y >= 359){
    trex.velocityY = -10 ;
  }
  
  //add gravity
  trex.velocityY = trex.velocityY + 0.8;
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  spawnClouds();
  drawSprites();
}


  