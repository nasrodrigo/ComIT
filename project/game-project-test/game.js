"use strict"

let warrior;

function startGame(){
    gameStage.start();
    warrior = new elementeStage(30, 30, "red", 10, 120);
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
            gameStage.key = e.key;
        });
        window.addEventListener('keyup', function(e){
            gameStage.key = false;
        });
    },
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function elementeStage(width, height, color, x, y){
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;  
    this.x = x;
    this.y = y;
    this.update = function updateElementeStage(){
        this.ctx = gameStage.context;
        this.ctx.fillStyle = color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
    };
    this.newPossition = function newPossitionElementeStage(){
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

function updateGameStage(){
    gameStage.clear();
    warrior.speedX = 0;
    warrior.speedY = 0;
    if (gameStage.key && gameStage.key == "ArrowLeft") {warrior.speedX = -1;}
    if (gameStage.key && gameStage.key == "ArrowRight") {warrior.speedX = 1;}
    if (gameStage.key && gameStage.key == "ArrowDown") {warrior.speedY = 1;}
    if (gameStage.key && gameStage.key == "ArrowUp") {warrior.speedY = -1;}
    warrior.newPossition();
    warrior.update();
}

