var backgroundImg
var snowflakeImg,snowflake




function setup() {
  createCanvas(1200,600);
  
}

function preload() {
  backgroundImg = loadImage("snow3.jpg");
  snowflakeImg = loadImage("snow5.webp");
}


function draw() {
  background(backgroundImg);  
  drawSprites();
  createsnowflakes();
  }
  
    function createsnowflakes(){
 if (frameCount%10 === 0){
   snowflake= createSprite(random(0,1200),0,50,50)
   snowflake.velocityY =1
  snowflake.velocityX =-2
snowflake.addImage(snowflakeImg);
snowflake.scale = 0.058
}

    }