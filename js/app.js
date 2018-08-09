// Enemies our player must avoid
class Enemy{
    constructor(x=300,y=150){
        this.sprite = 'images/enemy-bug.png';
        this.x=x;
        this.y=y
    }
    update(dt){
        this.x+=100*dt;
    }

    render(){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };

};

class Player{
    constructor(x=200, y=200){
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
        if(this.x<500 && this.x>50){
        switch(dt){
            case "left":
                this.x-=100;
                 break;
            case "down":
                this.y+=100;
                break;
            case "right":
                this.x+=100;
                break;
            case "up":
                this.y-=100;
                break;
        };
    };
    };

};

var player= new Player();
const bug_one=new Enemy();
const bug_two=new Enemy();
const bug_three=new Enemy();
var allEnemies = [bug_one, bug_two, bug_three];

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
