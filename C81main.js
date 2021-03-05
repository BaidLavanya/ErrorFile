var canvas = document.getElementById("MyCanvas");
var ctx = canvas.getContext("2d");

var colour = "green";

ctx.beginPath();
ctx.strokeStyle = colour;
ctx.lineWidth = 3;
ctx.arc(200,200, 30 , 0 , 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown" , MyMouseDown);

function MyMouseDown(e)
{
    var X = e.clientX - canvas.offsetLeft;
    var Y = e.clientY - canvas.offsetTop;
    console.log("X = " + X + " Y = "+ Y);
    circle(X , Y);
}

function  circle(X , Y){
    ctx.beginPath();
ctx.strokeStyle = colour;
ctx.lineWidth = 3;
ctx.arc(X,Y, 50 , 0 , 2*Math.PI);
ctx.stroke();
}