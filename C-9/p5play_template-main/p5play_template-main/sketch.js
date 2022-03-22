var box
function setup() {
  createCanvas(400,400);
  box = createSprite (200,200,20,20);
}





function draw() 
{
  
  background("white");
 if (keyDown("right")){
   box.x += 3
 }
 if(keyIsDown(LEFT_ARROW)){
   box.x -= 3
 }
 if(keyIsDown(UP_ARROW)){
   box.y -= 3
 }
 if(keyDown("down")){
   box.y += 3
 }
 drawSprites()
}




