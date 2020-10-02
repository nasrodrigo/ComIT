let img = document.createElement('img');
img.src = "images/FB_IMG_1426357700818.jpg";
img.alt = "Rodrigo Monteiro";
img.className = "photo";
img.id = "image";

let imgOver = document.createElement('img');
imgOver.src = "images/IMG-20200920-WA0013.jpg";
imgOver.alt = "Rodrigo Monteiro";
imgOver.className = "photo";
imgOver.id = "imageOver";

window.onload = function(){
    document.getElementById("ft").onmouseover = function() {
        if(document.getElementById("image")){
            document.getElementById("ft").removeChild(document.getElementById("image"));
        }
        document.getElementById("ft").appendChild(imgOver);
        
    };

    document.getElementById("ft").onmouseout = function() {
        if(document.getElementById("imageOver")){
            document.getElementById("ft").removeChild(document.getElementById("imageOver"));
        }
        document.getElementById("ft").appendChild(img);
    };
};