class Player{
    constructor(){
        this.name=null;
        this.index=null;
        this.positionX=0;
        this.positionY=0;
    }
    addPlayer(){
        var playerIndex="players/player" + this.index;
        if(this.index===1){
            this.positionX=width/2-100;
        }
        else{
            this.positionX=width/2+100;
        }
        database.ref(playerIndex).set({
            name:this.name,
            positionX:this.positionX, positionY:this.positionY
        })
    }
    getDistance(){
        var playerDistanceref = database.ref('players/player' + this.index);
        playerDistanceref.on('value',data=>{
            var data = data.val()
            this.positionX = data.positionX;
            this.positionY = data.positionY;
        })
    }
    update(){
        var playerDistanceref = 'players/player' + this.index;
        database.ref(playerDistanceref).update({
            positionX : this.positionX,
            positionY : this.positionY,
            rank : this.rank,
            score : this.score
        })
    }
    static getPlayerInfo(){
        var playerInforef=database.ref('players')
        playerInforef.on('value',data=>{
            allPlayers=data.val()
        })
    }
    getCount(){
        var playerInforef=database.ref('playerCount')
        playerInforef.on('value',data=>{
            playerCount=data.val()
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount : count
        })
    }
}