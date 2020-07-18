// TODO: define the canvas pattern
let canvasPattern = undefined 

let octopus = new Octopus();

const ctx = document.querySelector('canvas').getContext('2d');
// const W = ctx.canvas.width;
// const H = ctx.canvas.height;

// ctx.rect(10, 10, 20, 20);
// ctx.stroke();

// octopus.draw()

const octopusImg = new Image()
octopusImg.src = 'images/octopus2.png'
ctx.drawImage(octopusImg,10, 10)
