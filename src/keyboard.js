/**
* Keyboard handler.
*/

var paused = true;
var speed = 1000;
var intervalId;

document.addEventListener('keydown', function(event) 
{
    switch(event.keyCode) 
    {
        case 32: // Space: Toggle pause.
            paused = !paused; 
            break;
            
        case 107: // Plus key: Speed up.
            if (speed > 10) 
            { 
                speed -= 10; 
                clearInterval(intervalId);
                intervalId = setInterval(draw, speed);
            } 
            break;
            
        case 109: // Minus key: Speed down;
            if (speed < 500) 
            { 
                speed += 10; 
                clearInterval(intervalId);
                intervalId = setInterval(draw, speed);
            } 
            break;
    }
});
