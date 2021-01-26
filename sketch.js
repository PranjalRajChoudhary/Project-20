var cat,jerry;
var catsittingImg,catwalkingImg,catlatyingImg,mousecheeseImg,mouseglassImg,mousethumbImg;
var garden,gardenImg;
function preload() {
catsittingImg = loadAnimation("cat4.png");
catwalkingImg = loadAnimation(" cat2.png","cat3.png");
catlatyingImg = loadAnimation("cat1.png");
mousecheeseImg = loadAnimation("mouse1.png");
mouseglassImg = loadAnimation("mouse4.png");
mousethumbImg = loadAnimation("mouse2.png","mouse3.png");
gardenImg = loadImage("garden.png");
}

function setup(){
createCanvas(1000,800);

garden = createSprite(300,250,1000,800);
garden.addImage("garden",gardenImg);
garden.scale = 1.5;

cat = createSprite(750,492,50,50);
cat.addAnimation("cat",catlatyingImg);
cat.scale = 0.2;

jerry = createSprite(125,469,50,50);
jerry.addAnimation("jerry",mousecheeseImg);
jerry.scale = 0.2;



}

function draw() {
background("red");

keyPressed();

if(cat.x - jerry.x < (cat.width - jerry.width)/2){
cat.velocityX = 0;
cat.addAnimation("catSitting",catsittingImg);
cat.changeAnimation("catSitting");

cat.x = jerry.x + 150;

jerry.addAnimation("jerryGlass",mouseglassImg);
jerry.changeAnimation("jerryGlass");
}

drawSprites();
}


function keyPressed(){
if(keyDown("left")){
cat.velocityX = -4;
cat.addAnimation("catWalking",catwalkingImg);
cat.changeAnimation("catWalking");


jerry.addAnimation("jerryTeasing",mousethumbImg);
jerry.changeAnimation("jerryTeasing");
}
}