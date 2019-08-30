/**
* Common functions and constants.
*/

const WHITE = "rgb(255, 255, 255)";
const LIGHT_GRAY = "rgb(192, 192, 192)";
const GRAY = "rgb(128, 128, 128)";
const RED = "rgb(255, 0, 0)";
const DARK_RED = "rgb(128, 0, 0)";
const GREEN = "rgb(0, 255, 0)";
const DARK_GREEN = "rgb(0, 128, 0)";
const BLUE = "rgb(0, 0, 255)";
const DARK_BLUE = "rgb(0, 0, 128)";
const ORANGE = "rgb(255, 128, 0)";


function randomInt(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function randomColor()
{
    red = Math.floor((Math.random() * 256));
    green = Math.floor((Math.random() * 256));
    blue = Math.floor((Math.random() * 256));
    
    return "#" + red.toString(16) + green.toString(16) + blue.toString(16);
}


function drawPoint(pointX, pointY, size, color)
{
    context2d.fillStyle = color;
    context2d.beginPath();
    context2d.arc(pointX, pointY, size, 0, Math.PI * 2.0, true);
    context2d.closePath();
    context2d.fill();
}


function fractionWay(startX, startY, newX, newY, fraction)
{
    result = [];
    result[0] = startX + ((newX - startX) * fraction);
    result[1] = startY + ((newY - startY) * fraction);
    return result;
}
