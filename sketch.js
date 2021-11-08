var bg;
var Spaceship,ship_Img;
var asteroid,asteroid_Img;
var shooter,shooter_Img;
var Sprite;
var x = 200;
var y = 100;
var score = 0;

function preload(){
  bg = loadImage("Images/Space.png");
  ship_Img = loadImage("Images/SpaceShip.png");
  asteroid_Img = loadImage("Images/Asteroid.png");
  shooter_Img = loadImage("Images/Shooter1.png");
}

function setup(){
  createCanvas(800,550);

  Spaceship = createSprite(400,450);
  Spaceship.addImage(ship_Img);
  Spaceship.scale = 0.2;

  Sprite = createSprite(300,200,1000,1000);
  Sprite.visible = false;

}

function draw(){
  background(bg);

  Spaceship.x = mouseX;

  if(mousePressedOver(Sprite)){
    createShooter();
  }

  edges = createEdgeSprites();
  Spaceship.bounceOff(edges);

  if(frameCount%60===0){
    asteroid = createSprite(10,10,10,10);
    asteroid.addImage(asteroid_Img);
    asteroid.x = Math.round(random(10,600));
    asteroid.scale = 0.1;
    asteroid.velocityY = 2;
  }

  drawSprites();
  fill("White");
  textSize(20)
  text("Score : "+score,680,50);
}

function createShooter(){
  shooter = createSprite(0,390,5,10);
  shooter.velocityY = -2;
  shooter.x = Spaceship.x;
  shooter.addImage(shooter_Img);
  shooter.scale = 0.09;
  shooter.shapeColor = "Red";
  return shooter;
}