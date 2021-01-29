var fixedRect;
var moveRect;

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  moveRect=createSprite(600,356,50,40);
  fixedRect.shapeColor="white";
  moveRect.shapeColor="blue";
}

function draw() {
  background("red");
  moveRect.x=World.mouseX;
  moveRect.y=World.mouseY;
  if(moveRect.x-fixedRect.x<fixedRect.width/2+moveRect.width/2&&fixedRect.x-moveRect.x<fixedRect.width/2+moveRect.width/2
    && moveRect.y-fixedRect.y<fixedRect.height/2+moveRect.height/2&&fixedRect.y-moveRect.y<fixedRect.height/2+moveRect.height/2){
    moveRect.shapeColor="green";

    fixedRect.shapeColor="black"
  }
  
  else {
    moveRect.shapeColor="blue";
    fixedRect.shapeColor="white";  
  }


  drawSprites();
}