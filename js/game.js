class Game{
    constructor(){}
    
    start(){
      form=new Form();
      form.display();
      player = new Player();
      playerCount = player.getCount;
      car1 = createSprite(width/2-50,height-100);
      car1.addImage('car1', car1img);
      car2 = createSprite(width/2+100,height-100);
      car2.addImage('car2', car2img);
      car1.scale = 0.07;
      car2.scale = 0.07;
      cars=[car1,car2]
    }
    getState(){
      var playerInforef=database.ref('gameState')
      playerInforef.on('value',data=>{
          gameState=data.val()
      })
  }
  update(state){
    database.ref('/').update({
        gameState : state
    })
}
    handleElement(){
      form.hideElements()
      form.titleimg.position(40,50);
    }
   play(){
     this.handleElement()
     Player.getPlayerInfo()
     if(allPlayers !== undefined){
       image(track,0,-height*5, width, height*6);
       var index = 0;
       for (var plr in allPlayers){
         index++
         var x = allPlayers[plr].positionX;
         var y = height-allPlayers[plr].positionY;
         cars[index-1].position.x = x;
         cars[index-1].position.y = y;
       }
       if(KeyIsDown(UP_ARROW)){
         player.positionY+=10;
         player.update();
       }
       drawSprites()
     }
   } 
}