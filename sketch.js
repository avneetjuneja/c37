var database;
var position;
var car1, car2, cars=[]
var game, form, player;
var playerCount=0, gameState=0;
var allPlayers;

function preload(){
  bgimg = loadImage("images/background.png");
  car1img = loadImage("images/car1.png");
  car2img = loadImage("images/car2.png");
  track = loadImage("images/track.jpg"); 
}

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(windowWidth, windowHeight);
  game=new Game();
  game.getState();
  game.start();

}

function draw(){
  background(bgimg);
  if(playerCount==2){
    game.update(1);
  }
  if(gameState===1){
    game.play();    
  }
  console.log(playerCount);
}
