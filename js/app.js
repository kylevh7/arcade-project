// Enemies our player must avoid
class Enemy{
    constructor(x=300,y=150){
        this.sprite = 'images/enemy-bug.png';
        this.x=x;
        this.y=y
        this.speed=100*Math.random();

    }
    update(dt){
        this.x+=this.speed*dt;
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

        switch(dt){
            case "left":
                this.x-=85;
                 break;
            case "down":
                this.y+=85;
                break;
            case "right":
                this.x+=85;
                break;
            case "up":
                this.y-=85;
                break;
        };
    };


};

var player= new Player();
const bug_one=new Enemy(0,60);
const bug_two=new Enemy(0,145);
const bug_three=new Enemy(0,230);
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
