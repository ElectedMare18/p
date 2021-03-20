var canvas;
var block;


function preload(){

}


function setup(){
  canvas = createCanvas(400,400);
  block = createSprite(200,350,20,20);
}


function draw(){
  background("pink");

  if (keydown("space")){
    block.velocityX = 5;
  }
  drawSprites();        
}
