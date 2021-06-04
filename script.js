

  const images = [['images/PacMan1.png','images/PacMan2.png'],
                  ['images/PacMan3.png','images/PacMan4.png']];
  

  const pacman = document.getElementById('pacMan');
  var pos = 0;



  const windowWidth = window.innerWidth;
  const imgWidth = 80; // in html file I assign it as 80px
  var focus = 0;
  var direction = 0;
  


    move = () => {


        focus = ( focus + 1 ) % 2;
        
        pacman.src = images[direction][focus];

        direction = directions_decide(pos,windowWidth,direction, imgWidth);


        if(direction == 0){
            pos += 20;
            pacman.style.left = pos + 'px';
        }
        else{
            pos -= 20;
            pacman.style.left = pos + 'px';
        }


    
    }

    setInterval(move, 200);


    function directions_decide(pos,windowWidth,direction,imgWidth){

        if(pos + imgWidth >= windowWidth && direction == 0){
            direction = 1;
        }
        if(pos < 0 && direction == 1){
            direction = 0;
        }

        return direction;
    }


