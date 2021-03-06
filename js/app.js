"use strict";
//Class to build the enemy array

class Enemy {
    constructor(x = 300, y = 150) {
        this.sprite = 'images/enemy-bug.png';
        this.x = x;
        this.y = y
        this.speed = 100 * Math.random();
        this.reset = function() {
            if (this.x > 505) {
                this.x = -50;
                this.speed = 150 + this.speed * Math.random();
            }
        }
    }

    update(dt) {
        this.x += this.speed * dt;
        this.reset();
        //collision detection send player back to starting line
        if (player.x < this.x + 80 && player.x + 80 > this.x && player.y < this.y + 60 && player.y + 60 > this.y) {
            player.x = 200;
            player.y = 400;
        }
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}
//class to build players in a default starting position
class Player {
    constructor(x = 200, y = 400) {
        this.sprite = 'images/char-cat-girl.png';
        this.x = x;
        this.y = y;
//method to keep player in a boundry
        this.boundry = function() {
            if (this.x > 500) {
                this.x -= 101;
            } else if (this.x < -50) {
                this.x += 101;
            } else if (this.y > 400) {
                this.y -= 85;
            } else if (this.y < -50) {
                this.y += 85;
            }
        }
    }
    update(dt) {
        this.boundry();
        //Announce winner, send back to start line
        if (this.y < -20) {
            this.x = 200;
            this.y = 400;
            setTimeout(function() {
                alert("winner!!!");
            }, 100);
        }
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
//instructions for keypress listeners
    handleInput(dt) {
        switch (dt) {
            case "left":
                this.x -= 101;
                break;
            case "down":
                this.y += 85;
                break;
            case "right":
                this.x += 101;
                break;
            case "up":
                this.y -= 85;
                break;
        }
    }
}

var player = new Player();
const bug_one = new Enemy(0, 60);
const bug_two = new Enemy(0, 145);
const bug_three = new Enemy(0, 230);
var allEnemies = [bug_one, bug_two, bug_three];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    }

    player.handleInput(allowedKeys[e.keyCode]);
});
