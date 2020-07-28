let octopus; 
let labyrinth;
let planktons = {};

let gameOver
let gameTimer = 0;
let planktonId = 0;
let eatenPlanktons = 0;
let planktonInterval = 500;

let $gameTimer = document.getElementById("game-timer")
let $planktonCounter = document.getElementById("eaten-planktons")

const ctx = document.getElementById('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

let raf;
let frameTimer = 0;
function animLoop() {
    frameTimer++;
    $gameTimer.innerHTML = `${gameTimer % 60}`
    drawGame()
    if(frameTimer % planktonInterval === 0){
        addPlankton()
        planktonInterval += 90
    }
    
    if(!gameOver){
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
            createAndPlaySound("sounds/eating-sound2.mp3");
        }
    }
    console.log(gameTimer)
    if(gameTimer === 75){
        gameOver = true
        clearInterval(intervalId)
        gameTimer = 0;
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
    addPlankton()
    addPlankton()
    addPlankton()
    addPlankton()
    addPlankton()
    addPlankton()
    addPlankton()
    addPlankton()
    intervalId = setInterval(() => {
        gameTimer++;
    }, 1000)
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

document.getElementById("start-button").onclick = function() {
    startGame();
    createAndPlaySound("sounds/underwater-sound.mp3")
  };


function createAndPlaySound(src) {
    const sound = document.createElement('audio') // <audio>
    sound.addEventListener('canplay', function () {
        if(document.getElementById("sound-checkbox").checked){
            sound.play()
        }
    })
    sound.src = src
}

