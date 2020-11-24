var canvas, backgroundImage;
var player1,playerStep1,playerNormal1,playerTouch1;
var player2,playerStep2,playerNormal2,playerTouch2;
var player3,playerStep3,playerNormal3,playerTouch3;
var player4,playerStep4,playerNormal4,playerTouch4;
var player5,playerStep5,playerNormal5,playerTouch5;
var player6,playerStep6,playerNormal6,playerTouch6;




function preload(){
backgroundImage=loadImage("sprites/GROUND.jpg")
    player1 = loadAnimation("sprites/player1-1.jpg","sprites/player1-2.jpg",
    "sprites/player1-3.jpg","sprites/player1-4.jpg");

    player2 = loadAnimation("sprites/player2-1.jpg","sprites/player2-2.jpg",
    "sprites/player2-3.jpg","sprites/player2-4.jpg");

//playerStep1 = loadImage("player1-2.jpeg")
//playerNormal1 = loadImage("player1-3.jpeg")
//playerTouch1 = loadImage("player1-4.jpeg")

// player2 = loadImage("player2-1.jpeg")
// playerStep2 = loadImage("player2-2.jpeg")
// playerNormal2 = loadImage("player2-3.jpeg")
// playerTouch2 = loadImage("player2-4.jpeg")

// player3 = loadImage("player3-1.jpeg")
// playerStep3 = loadImage("player3-2.jpeg")
// playerNormal3 = loadImage("player3-3.jpeg")
// playerTouch13 = loadImage("player3-4.jpeg")

// player4 = loadImage("player4-1.jpeg")
// playerStep4 = loadImage("player4-2.jpeg")
// playerNormal4 = loadImage("player4-3.jpeg")
// playerTouch4 = loadImage("player4-4.jpeg")

// player5 = loadImage("player5-1.jpeg")
// playerStep5 = loadImage("player5-2.jpeg")
// playerNormal5 = loadImage("player5-3.jpeg")
// playerTouch5 = loadImage("player5-4.jpeg")

// player6 = loadImage("player6-1.jpeg")
// playerStep6 = loadImage("player6-2.jpeg")
// playerNormal6 = loadImage("player6-3.jpeg")
// playerTouch6 = loadImage("player6-4.jpeg")
}

function setup(){
canvas = createCanvas(displayWidth,displayHeight);

playerA=createSprite(displayWidth/2,displayHeight/2)
playerA.addAnimation("running",player1)
playerA.scale=0.1

playerB=createSprite(displayWidth-100,displayHeight-100)
playerB.addAnimation("running",player2)
playerB.scale=0.1

// player1 = new Player(0,0,0,0);
// player2 = new Player(0,0,0,0);
// player3 = new Player(0,0,0,0);
// player4 = new Player(0,0,0,0);
// player5 = new Player(0,0,0,0);
// tree    = new Tree(0,0,0,0)
}



function draw(){
background(backgroundImage);
// player1.display();
// player2.display();
// player3.display();
// player4.display();
// player5.display();
// tree.display();
drawSprites();
}







