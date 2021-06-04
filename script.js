
    const pacman = document.getElementById('pacMan');
    var pos = 0;


    const windowWidth = window.innerWidth;

    move = () => {




        pos += 20;
        pacman.style.left = pos + 'px';


    
    }

    setInterval(move, 200);

