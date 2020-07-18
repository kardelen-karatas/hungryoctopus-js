let octopus; 

const ctx = document.getElementById('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;


function startGame(){
    console.log("game started");
    octopus = new Octopus();
    octopus.draw();

}

startGame()


// const octopusImg = new Image()
// function draw(){
//     octopusImg.onload = function() {
//         ctx.drawImage(octopusImg,10, 10, 100, 100)
//     }
//     octopusImg.src = 'images/octopus2.png';
// } 
    
// draw()


