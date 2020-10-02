"use strict"

let warrior;
let enemy;

function startGame(){
    gameStage.start();
    warrior = new elementStage(30, 30, "red", 10, 120);
    enemy = new elementStage(10, 200, "green", 300, 120);
}

let gameStage = {
    canvas: document.createElement("canvas"),
    start: function(){
        this.canvas.width = 500;
        this.canvas.height = 300;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameStage, 20);
        window.addEventListener('keydown', function(e){
            gameStage.keys = (gameStage.keys ?? []);
            gameStage.keys[e.key] = true;
        });
        window.addEventListener('keyup', function(e){
            gameStage.keys[e.key] = false;
        });
    },
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

function elementStage(width, height, color, x, y){
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;  
    this.x = x;
    this.y = y;
    this.update = function(){
        this.ctx = gameStage.context;
        this.ctx.fillStyle = color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    };
    this.newPossition = function(){
        this.x += this.speedX;
        this.y += this.speedY;
    };
    this.crashElement = function(element) {
        let thisleft = this.x;
        let thisright = this.x + (this.width);
        let thistop = this.y;
        let thisbottom = this.y + (this.height);
        let otherleft = element.x;
        let otherright = element.x + (element.width);
        let othertop = element.y;
        let otherbottom = element.y + (element.height);
        let crash = true;
        if ((thisbottom < othertop) ||
        (thistop > otherbottom) ||
        (thisright < otherleft) ||
        (thisleft > otherright)) {
          crash = false;
        }
        return crash;
    }
    
}

function updateGameStage(){
    if (warrior.crashElement(enemy)) {
        gameStage.stop();
    } else {
        gameStage.clear();
        warrior.speedX = 0;
        warrior.speedY = 0;
        if (gameStage.keys && gameStage.keys["ArrowLeft"]) {warrior.speedX = -1;}
        if (gameStage.keys && gameStage.keys["ArrowRight"]) {warrior.speedX = 1;}
        if (gameStage.keys && gameStage.keys["ArrowDown"]) {warrior.speedY = 1;}
        if (gameStage.keys && gameStage.keys["ArrowUp"]) {warrior.speedY = -1;}
        warrior.newPossition();
        warrior.update();
        enemy.update();
        enemy.x += -1;
    }
}

