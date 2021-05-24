
const images = [
    ['./img/PacMan1.png','./img/PacMan2.png'],
    ['./img/PacMan3.png','./img/PacMan4.png']
            ];


var pos = 0;
var anim = 0;
var direction = 0;

var pacMan = document.getElementById('img');






move = () =>{


    var imgW = pacMan.width;
    var windowW = window.innerWidth;  


    anim = ( anim + 1 ) % 2;
    
    

    direction = boundryChecker(direction, imgW, windowW, pos);

    console.log("image Width "+imgW);
    console.log("Window Width "+imgW);

    pacMan.src = images[direction][anim];

    if(direction) {
        pos -= 20;
        pacMan.style.left = pos + 'px';
    }
    else{
        pos += 20;
        pacMan.style.left = pos + 'px';

    }


}

setInterval(move, 200);

boundryChecker = ( direction, imgW, windowW, pos ) => {
    if( imgW + pos > windowW && direction == 0){
        direction = 1;
    }
    if( pos < 0 && direction == 1) {
        direction = 0;
    }
    return direction;
}


