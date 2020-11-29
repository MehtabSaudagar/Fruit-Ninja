var fruit1,fruit2,fruit3,fruit4,fruit;
var knifeImage,knife;
var gameover,gameoverImage;
var alien1,alien2,alien;

var fruitGroup,alienGroup;
var score=0;

var PLAY=1;
var END=0;
var gameState=PLAY;

function preload(){
  
   fruit1=loadImage("fruit1.png");
  fruit2=loadImage("fruit2.png");
  fruit3=loadImage("fruit3.png");
  fruit4=loadImage("fruit4.png");
  
  gameoverImage=loadImage("gameover.png");
  
  knifeImage=loadImage("sword.png");
  
  alien1=loadImage("alien1.png")
  alien2=loadImage("alien2.png")
}

function setup(){
  createCanvas(400,400);
  knife=createSprite(200,200,10,10);
  knife.addImage("knife",knifeImage);
  knife.scale=0.5;
  
  gameover=createSprite(200,200,10,10);
  gameover.addImage(gameoverImage);
  gameover.visible=false;
  
  fruitGroup=new Group();
  alienGroup=new Group();
}

function draw(){
  background("lightblue");
  
  text("score :"+score,50,50);
  
  if(gameState===PLAY){
    
    knife.x=mouseX;
    knife.y=mouseY;


    spawnFruits();
    spawnAliens();
    spawnAliens1();
    
    if(knife.isTouching(fruitGroup)){
    fruitGroup.setLifetimeEach(0);
    score=score+1;
    }
  
    if(knife.isTouching(alienGroup)){
      gameState=END;
    }
   
  }
  else if(gameState===END){
    gameover.visible=true;
    alienGroup.setVelocityXEach(0);
    fruitGroup.setVelocityXEach(0);
    fruitGroup.setLifetimeEach(-1);
    alienGroup.setLifetimeEach(-1);
  }
  
  
  drawSprites();
  
}

function spawnFruits(){
  var rand;
  
  if(frameCount%60===0){
    
    fruit=createSprite(400,10,10,10);
  
    rand=Math.round(random(1,4));
    switch(rand){
      case 1: fruit.addImage("fruit1",fruit1);
        break;
      case 2: fruit.addImage("fruit2",fruit2);
        break;
      case 3: fruit.addImage("fruit3",fruit3);
        break;
      case 4: fruit.addImage("fruit4",fruit4);
        break;
        default:break;
    }
    fruit.scale=0.15
  fruit.velocityX=-4;
  fruit.lifetime=200;
  fruitGroup.add(fruit);
  }
}

function spawnAliens(){
  var selectAlien;
  
  if(frameCount%200===0){
    
    alien=createSprite(400,10,10,10);
    alien.y=Math.round(random(10,400));
  
    selectAlien=Math.round(random(1,4));
    switch(selectAlien){
      case 1: alien.addImage("alien1",alien1);
        break;
      case 2: alien.addImage("alien2",alien2);
        break;
      default:break;
    }
  //alien.scale=0.5
  alien.velocityX=-4;
  alien.lifetime=200;
  alienGroup.add(alien);
  }

}

function spawnAliens1(){
  var selectAlien;
  
  if(frameCount%150===0){
    
    alien=createSprite(0,10,10,10);
    alien.y=Math.round(random(10,400));
  
    selectAlien=Math.round(random(1,4));
    switch(selectAlien){
      case 1: alien.addImage("alien1",alien1);
        break;
      case 2: alien.addImage("alien2",alien2);
        break;
      default:break;
    }
  //alien.scale=0.5
  alien.velocityX=4;
  alien.lifetime=200;
  alienGroup.add(alien);
  }
}
