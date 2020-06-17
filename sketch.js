var thickness,wall;
var speed,bullet,weight,damage;

function setup() {
  createCanvas(800,400);
  
  bullet = createSprite(50, 200, 50, 50);
  wall = createSprite(600, 200, thickness, height/2);

  speed = random(223,321);
  thickness = random(22,83);
  weight = random(30,52);
 
  bullet.velocityX = speed;  
}
textSize = 15;

function draw() {
  background(0);  

  bullet.collide(wall);
  
  damage = (0.5 * weight * speed * speed)/(thickness*thickness*thickness)

  text(damage,200,50);
  
if(damage <10){
  bullet.shapeColor="green";
}
if(damage >10){
bullet.shapeColor= "red";
}

  drawSprites();
}