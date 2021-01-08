var car, wall;
var speed, weight;



function setup() {
speed=random(55, 90);
weight=random(400, 1500);


  createCanvas(2000,400);
  car = createSprite(50, 200, 30, 30);
  car.velocityX = speed;
  wall = createSprite(1500, 200, 20, 200);
}

function draw() {
  background(255,255,255);  
  


  drawSprites();
  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX = 0;
    car.x = 1500;
    var deformation = 0.5*weight*speed*speed/22500;
    if(deformation>180){
      car.shapeColor = color(255,0,0);
    }
    if(deformation<180 && deformation>100) {
      car.shapeColor = color(230,230,0);
    }
    if(deformation<100) {
      car.shapeColor = color(0,255,0);
    }
  }
}