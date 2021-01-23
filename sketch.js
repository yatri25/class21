var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  box1= createSprite(100,100,50,50);
  box1.shapeColor = "green";

  box2= createSprite(300,300,50,50);
  box2.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;


  if(isTouching(movingRect,box2)){
   box2.width=200;
   movingRect.shapeColor="blue"
  }
  else{
    box2.width=50;
   movingRect.shapeColor="green"

  }
  
  
  drawSprites();
}




