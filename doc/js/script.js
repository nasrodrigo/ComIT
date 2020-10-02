let title;

function startEffect() {
    stageArea.start();
    title = new drawText("Rodrigo Nascimento", "green", "olive", 500, 300, +window.innerWidth / 2, +window.innerHeight / 2, 6);
}

var stageArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    },
    clear : function() {
        this.context.clearText(0, 0, this.canvas.width, this.canvas.height);
    }
}

function drawText(text, txtColor, sdwColor, width, height, x, y, depth = 0){
    this.text = text;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.depth = depth;
    this.txtColor = txtColor;
    this.sdwColor = sdwColor;
    ctx = stageArea.context;

    ctx.font = "70pt Verdana";
	ctx.fillStyle = txtColor;
	ctx.textAlign = "center";
    
    let cnt;
	for (cnt = 0; cnt < this.depth; cnt++) {
		ctx.fillText(text, this.width - cnt, this.height - cnt, this.x, this.y);
    }

    ctx.rotate(Math.PI*2/(i*6));

	ctx.fillStyle = txtColor;
	ctx.shadowColor = sdwColor;
	ctx.shadowBlur = 8;
	ctx.shadowOffsetX = this.depth + 2;
	ctx.shadowOffsetY = this.depth + 2;
    ctx.fillText(text, this.width - cnt, this.height - cnt, this.x, this.y);
    
    this.update = function(){
        ctx = stageArea.context;
        ctx.fillStyle = txtColor;
        ctx.fillText(text, this.width - cnt, this.height - cnt, this.x, this.y);
    }

}

function updateGameArea() {
    stageArea.clear();
    title.x += 1;
    title.update();
}
