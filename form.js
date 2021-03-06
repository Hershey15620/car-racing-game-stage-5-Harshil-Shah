class Form{
    constructor(){
 this.input= createInput("Name");
    this.button= createButton("Start");
    this.greeting= createElement("h3");
    this.title= createElement("h2");
    this.resetbutton= createButton("Reset")
    }

    hide (){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
        this.title.hide();
    }

    display (){
   this.title.html("Car-racing game");
    this.title.position(displayWidth/2-50,0);
    this.resetbutton.position(displayWidth-100, 20)
    this.input.position(displayWidth/2-40,displayHeight/2-80);
    this.button.position(displayWidth/2-30,displayHeight/2);
    this.button.mousePressed ( ()=>{
        this.input.hide(); 
        this.button.hide();
    player.Name= this.input.value();
    playerCount+=1
    player.index=playerCount
    player.updateName();
    player.updateCount(playerCount);
    
    this.greeting.html("Hello "+ player.Name)
    this.greeting.position(displayWidth/2-70,displayHeight/4);
    }) 

    this.resetbutton.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
        player.delplayer();

    })
    }
}

