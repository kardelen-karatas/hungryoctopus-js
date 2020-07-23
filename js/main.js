let octopus; 
let gameover;
let labyrinth;
let plankton = [];

const ctx = document.getElementById('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

let raf;
let frameTimer = 0;
function animLoop() {
    frameTimer++;
    console.log(frameTimer)
    ctx.clearRect(0,0,W,H);
    labyrinth.draw()
    octopus.draw()
    plankton.draw()
    if(!gameover){
        raf = requestAnimationFrame(animLoop);
    }
    //what to optimise requestAnimationFrame ??? It takes to much sources !!!

}

function startGame(){
    console.log("game started");
    if(raf){
        cancelAnimationFrame(raf);
    }
    labyrinth = new Labyrinth();
    octopus = new Octopus(); // 1s
    
    plankton = new Plankton();
    animLoop()
}
document.onkeydown = function (e) {
    if (!octopus) return;
    octopus.move(e.code, labyrinth);
}

startGame()
