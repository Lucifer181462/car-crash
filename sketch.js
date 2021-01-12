var thickness, wall;
var speed, weight, bullet;



function setup() {
thickness=random(23, 83);
weight=random(30, 52);
speed = random(223, 321);

  createCanvas(2000,400);
  bullet = createSprite(50, 200, 30, 10);
  bullet.velocityX = speed;
  wall = createSprite(1500, 200, thickness, height/2);
}

function draw() {
  background(255,255,255);  
  


  drawSprites();
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX = 0;
    bullet.x = 1500;
    var deformation = 0.5*weight*speed*speed/thickness*thickness*thickness;
    if(deformation<12.43){
      wall.shapeColor = color(255,0,0);
    }
 
    }
    if(deformation>12.43) {
      wall.shapeColor = color(0,255,0);
    }
  }
