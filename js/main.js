// TODO: define the canvas pattern
canvasPattern = undefined 

let octopus = new Octopus();

const ctx = document.querySelector('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

// ctx.beginPath();
// ctx.rect(10, 10, 20, 20);
// ctx.stroke();

//octopus.draw()

const octopusImg = new Image()
octopusImg.src = '../images/octopus.png'
ctx.drawImage(octopusImg,10, 10, 20, 20)
