// Enemies our player must avoid
class Enemy{
    constructor(x,y){
        this.sprite = 'images/enemy-bug.png';
        this.x=300;
        this.y=60;
    }
    update(dt){
    }

    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };

};

class Player{
    constructor(x=200, y=400){
        this.sprite = 'images/char-cat-girl.png';
        this.x=200;
        this.y=400;
    }
    update(dt){
    };

    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };

    handleInput(dt){
        switch(dt){
            case "left":
                this.x-=50;
                break;
            case "down":
                this.y+=50;
                break;
            case "right":
                this.x+=50;
                break;
            case "up":
                this.y-=50;
                break;
        };
    };

};

var player= new Player();
var allEnemies = [new Enemy()];
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
