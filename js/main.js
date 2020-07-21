let octopus; 
let gameover;
let labyrinth;

const ctx = document.getElementById('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

let raf;
let frameTimer = 0;
function animLoop() {
    frameTimer++;
    ctx.clearRect(0,0,W,H);
    labyrinth.draw()
    octopus.draw()
    if(!gameover){
        raf = requestAnimationFrame(animLoop);
    }
}

function startGame(){
    console.log("game started");
    if(raf){
        cancelAnimationFrame(raf);
    }
    labyrinth = new Labyrinth()
    octopus = new Octopus(); // 1s
    animLoop()
}

document.onkeydown = function (e) {
    if (!octopus) return;
    switch (e.code) {
        case "ArrowLeft": 
            octopus.moveLeft();
            break;
        case "ArrowRight":
            octopus.moveRight();
            break;
        case "ArrowUp":
            octopus.moveUp();
            break;
        case "ArrowDown":
            octopus.moveDown();
            break;
    }
  }

startGame()
