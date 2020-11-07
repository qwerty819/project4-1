var fruit1Img, fruit2Img, fruit3Img, fruit4Img, swordImg, alienAni, gameOverImg;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var sword, alien, fruit;
var score = 0;
var fruitGroup, alienGroup;
function preload(){
  fruit1Img = loadImage("fruit1.png");
  fruit2Img = loadImage("fruit2.png");
  fruit3Img = loadImage("fruit3.png");
  fruit4Img = loadImage("fruit4.png");
  swordImg = loadImage("sword.png");
  gameOverImg = loadImage("gameover.png");
  alienAni = loadAnimation("alien1.png","alien2.png" );
}
function setup(){
createCanvas(600,600);
sword = createSprite(40,200,20,20);
sword.addImage(swordImg);
sword.scale = 0.7;
fruitGroup = createGroup();
alienGroup = createGroup();
}
function draw(){
background("white");
if(gameState===PLAY){
sword.x = World.mouseX
sword.y = World.mouseY
createFruit();
createAlien();
if(fruitGroup.isTouching(sword)){
fruitGroup.destroyEach();
score = score+2;
}
if(alienGroup.isTouching(sword)){
gameState = END;
}
}
if(gameState===END){
fruitGroup.destroyEach();
alienGroup.destroyEach();
sword.addImage(gameOverImg);
}
drawSprites();
text("score: "+score,450,50);
}
function createFruit(){
if(frameCount%80===0){
fruit = createSprite(600,Math.round(random(50,500)),10,10);
var position = Math.round(random(1,4));
switch(position){
  case 1:fruit.addImage(fruit1Img);
  break;
  case 2:fruit.addImage(fruit2Img);
  break;
  case 3:fruit.addImage(fruit3Img);
  break;
  case 4:fruit.addImage(fruit4Img);
  break;
  default:break;
}
fruit.velocityX = -3;
fruit.lifetime = 200;
fruit.scale = 0.2;
fruitGroup.add(fruit);
}
}
function createAlien(){
if(frameCount%100===0){
alien = createSprite(600,Math.round(random(50,500)),10,10);
alien.addAnimation("moving",alienAni)
alien.velocityX = -3;
alien.lifetime = 200;
alienGroup.add(alien);
}
}