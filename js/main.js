let octopus; 
let labyrinth;
let timer;
let game;
let planktons = {};

let gameOver
let planktonId = 0;
let eatenPlanktons = 0;
let planktonInterval = 500;

let $gameTimer = document.getElementById("game-timer")
let $planktonCounter = document.getElementById("eaten-planktons-game")
let $totalEatenPlanktons = document.getElementById("eaten-planktons-end")
let $soundCheckBox = document.getElementById("sound-checkbox")

const ctx = document.getElementById('canvas').getContext('2d');
const W = ctx.canvas.width;
const H = ctx.canvas.height;

let raf;
let frameTimer = 0;
function animLoop() {
    frameTimer++;
    $gameTimer.innerHTML = `${timer.printTime()}`
    drawGame()
    if(frameTimer % planktonInterval === 0){
        addPlankton()
        planktonInterval += 90
    }
    
    if(!gameOver){
        raf = requestAnimationFrame(animLoop);
    }
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
    if(timer.currentTime === 75){
        gameOver = true
        timer.stop()
        timer.reset()
        disableDiv("game-board");
        enableDiv("game-end");
        $totalEatenPlanktons.innerHTML = `${eatenPlanktons}`;
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
    timer = new Timer()
    timer.start()
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
    disableDiv("game-intro");
    enableDiv("game-board");
    startGame();
    createAndPlaySound("sounds/underwater-sound.mp3")

  };


function createAndPlaySound(src) {
    const sound = document.createElement('audio') // <audio>
    window.sound = sound;
    sound.addEventListener('canplay', function () {
        if(document.getElementById("sound-checkbox").checked){
            sound.play()
        }
    })
    sound.src = src
}

function enableDiv(divId){
    let el = document.getElementById(divId);
    el.classList.add("active");
}

function disableDiv(divId){
    let el = document.getElementById(divId);
    el.classList.remove("active");
}