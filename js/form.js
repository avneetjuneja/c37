class Form{
    constructor(){
        this.titleimg=createImg('./images/title.png', 'game title');
        this.input=createInput('').attribute('placeholder', 'enter your name');
        this.playButton=createButton('play');
        this.greeting=createElement('h2');
    }
    SetElementPosition(){
      this.titleimg.position(120,160);
      this.input.position(width/2-110, height/2-80);
      this.playButton.position(width/2-80, height/2-20);
      this.greeting.position(width/2-300, height/2-100);
    }
    HandleMousePressed(){
        this.playButton.mousePressed(()=>{
            this.input.hide();
            this.playButton.hide();
            var message=`hello ${this.input.value()} </br> wait for another player to join...`
            this.greeting.html(message);
            playerCount = playerCount+1
            console.log(playerCount);
            player.name=this.input.value();
            player.index = playerCount;
            player.addPlayer();
            player.updateCount(playerCount);
            player.getDistance();
        })

    }
    hideElements(){
        this.input.hide()
        this.playButton.hide()
        this.greeting.hide()
    }
    display(){
        this.titleimg.html('multiplayer car racing game');
        this.SetElementPosition();
        this.HandleMousePressed();
    }
}