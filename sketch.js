var Cat,CAT,Garden,Mouse;
function preload() {
    //load the images here
    Cat1=loadAnimation("images/cat1.png");
    Cat2=loadAnimation("images/cat2.png","Images/Cat3.png");
    Cat3= loadAnimation("images/cat4.png");

    Garden=loadAnimation("images/garden.png");
    
    Mouse1=loadAnimation("images/mouse1.png");
    Mouse2=loadAnimation("images/mouse2.png","images/mouse3.png");
    Mouse3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    
    garden = createSprite(500,400);
    garden.addAnimation("background",Garden);

    CAT = createSprite(800,650,10,50);
    CAT.addAnimation("Cat",Cat1);
    CAT.scale=0.2;


    Mouse = createSprite(200,650,10,50);
    Mouse.addAnimation("Mouse",Mouse1);
    Mouse.scale=0.2;

}

function draw() {

    background(255);
    
    //Write condition here to evalute if tom and jerry collide
     if(CAT.x-Mouse.x<(CAT.width-Mouse.width)/2){
         CAT3.addAnimation("GG",Cat4);
         CAT3.changeAnimation("GG");
     }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === RIGHT_ARROW){
      Mouse.addAnimation("PUBG",Mouse2);
      Mouse.changeAnimation("PUBG");
      Mouse.framDelay=25;
  }

  if(keyCode === LEFT_ARROW){
    Mouse.addAnimation("PUBG",Mouse2);
    Mouse.changeAnimation("PUBG");
    Mouse.framDelay=25;
}
}
