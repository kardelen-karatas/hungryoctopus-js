let octopus; 
let gameEnded;
let labyrinth;
let planktons = {};
let planktonId = 0;
let eatenPlanktons = 0;
let $planktonCounter = document.getElementById("eaten-planktons")

const ctx = document.getElementById('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

let raf;
let frameTimer = 0;
function animLoop() {
    frameTimer++;
    
    drawGame()
    
    if(!gameEnded){
        raf = requestAnimationFrame(animLoop);
    }
    //how to optimise requestAnimationFrame ??? It takes to much sources !!!

}

function drawGame(){
    ctx.clearRect(0,0,W,H);
    labyrinth.draw()
    octopus.draw()
    
    for (const id in planktons){
        planktons[id].draw()
    }

    for (const id in planktons){
        if(planktons[id].isEaten()){
            delete planktons[id];
            eatenPlanktons++;
            $planktonCounter.innerHTML = `${eatenPlanktons}`;
        }
    }
    
    if(!planktons && octopus.x === W - octopus.w && octopus.y === H - octopus.h){
        gameEnded = true
    }
    
}

function startGame(){
    if(raf){
        cancelAnimationFrame(raf);
    }
    labyrinth = new Labyrinth();
    octopus = new Octopus(); // 1s
    addPlankton()
    addPlankton()
    console.log(gameEnded)
    animLoop()
}

function addPlankton(){
    let plankton = new Plankton()
    planktons[planktonId] = plankton
    planktonId++
}

document.onkeydown = function (e) {
    if (!octopus) return;
    octopus.move(e.code, labyrinth);
}

startGame()
