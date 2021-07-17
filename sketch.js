var catImage,cat;
var mouse,mouseImage;
var backgroundImage



function preload() {
    //load the images here
    backgroundImage=loadImage("images/garden.png")
    catImage=loadAnimation("images/cat1.png")
    mouseImage=loadAnimation("images/mouse1.png")
    mouseImage2=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseImage4=loadAnimation("images/mouse4.png")
    catImage2=loadAnimation("images/cat2.png","images/cat3.png")
    catImage4=loadAnimation("images/cat4.png")

}

function setup(){
    createCanvas(1000,800);
    cat = createSprite (870,600,50,50)
    mouse = createSprite  (200,600,20,20)
    cat.addAnimation ("catSleeping",catImage)
    cat.addAnimation ("catWalking",catImage2)
    cat.addAnimation ("catStanding",catImage4)
    mouse.addAnimation ("mouseStading",mouseImage)
    mouse.addAnimation ("mouseTeasing",mouseImage2)
    mouse.addAnimation ("mouseSearching",mouseImage4)
    cat.scale=0.2
    mouse.scale=0.1

}

function draw() {

    background(backgroundImage);
    //Write condition here to evalute if tom and jerry collide
   if (cat.x-mouse.x<=(cat.width-mouse.width)/2){
       cat.velocityX=0
       cat.scale=0.2
       cat.x=300
       cat.changeAnimation("catStanding",catImage4)
       mouse.changeAnimation("mouseSearching",mouseImage4)

   }


    drawSprites();
}


function keyPressed(){
    if(keyCode===LEFT_ARROW){
        mouse.changeAnimation("mouseTeasing",mouseImage2)
        mouse.frameDelay=25
        cat.velocityX=-5
        cat.changeAnimation("catWalking",catImage2)

    }





}
