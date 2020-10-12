"use strict";

const RUN = 1;
const JUMP = 2;

let superMarioBros = {
    mario : document.getElementById("mariobros"),
    marioAction : (mario, action) => {
        if(action == 1)/* RUN */{
            return mario.className = "mario-run";
        }else if(action == 2)/* JUMP */{
            return mario.className = "mario-jump";
        }
    },
    marioPositionX : (mario) => {
        return +mario.getBoundingClientRect().x.toFixed(0);
    }

};

let stageActions = () => {
    let mario = superMarioBros.mario;
    let marioXAxis = superMarioBros.marioPositionX(mario);
    let stageWidth = +document.body.clientWidth;
    let middleOfStage = (stageWidth / 2).toFixed(0);
    
    if(marioXAxis == middleOfStage || marioXAxis > middleOfStage - 5 && marioXAxis < middleOfStage){
        superMarioBros.marioAction(mario, JUMP);
        bockHit();
        mushroomAnimation();
    }else if(marioXAxis > stageWidth){
        stopInterval();
    }else{
        superMarioBros.marioAction(mario, RUN);
    }    
};

let bockHit = () => {
    let block = document.getElementById("block");
    block.className = "block-hit";
};

let mushroomAnimation = () => {
    let mushroom = document.getElementById("mushroom");
    mushroom.style.animation = "mushroomAnimation 5s";
    mushroom.style.bottom = "310px";
};

let interval = window.setInterval(stageActions, 2000);

let stopInterval = () => {
    window.clearInterval(interval);
};

   
