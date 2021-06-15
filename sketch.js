var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  food1Image = loadImage("apple.png")
  food2Image = loadImage("grass.png")
  food3Image = loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  rabbit.x = mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  spawnFood();
  drawSprites();
}

function spawnFood(){
  var rand = Math.round(random(1,3))
  if(frameCount%80===0){
    var food = createSprite(random(50,350),0, 30,30)
    food.scale=0.08;
    food.velocityY = 3;
    if(rand === 1){
     food.addImage(food1Image)
    }
    else if(rand===2){
      food.addImage(food2Image)
    }
    else{
      food.addImage(food3Image)
    }
  }
}