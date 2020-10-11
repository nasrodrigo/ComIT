"use strict";

let getMiddleOfStage = () => {
    let mario = document.getElementById("mariobros");
    let marioXAxis = +mario.getBoundingClientRect().x.toFixed(0);
    let middleOfStage = +(document.body.clientWidth / 2).toFixed(0);
    let stageWidth = document.body.clientWidth;

    if(marioXAxis == middleOfStage || marioXAxis > middleOfStage - 5 && marioXAxis < middleOfStage){
        mario.className = "mario-jump";
        bockHit();
        mushroomAnimation();
    }else if(marioXAxis > stageWidth){
        stopInterval();
    }else{
        mario.className = "mario-run";
    }    
};

let bockHit = () => {
    let block = document.getElementById("block");
    block.className = "block-hit";
};

let mushroomAnimation = () => {
    let mushroom = document.getElementById("mushroom");
    mushroom.style.animation = "mushroomAnimation 5s";
    mushroom.style.height = "235px";
};

let interval = window.setInterval(getMiddleOfStage, 2000);

let stopInterval = () => {
    window.clearInterval(interval);
};

   
