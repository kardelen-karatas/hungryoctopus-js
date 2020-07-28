class Game{
    constructor(){
        this.gameTimer = 0;
        this.gameOver;
    }

    drawGame(){
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
        console.log(this.gameTimer)
        if(this.gameTimer === 75){
            gameOver = true
            clearInterval(intervalId)
            this.gameTimer = 0;
        }

    }
}

// function createAndPlaySound(src) {
//     const eatSound = document.createElement('audio') // <audio>
//     eatSound.addEventListener('canplay', function () {
//         eatSound.play()
//     })
//     eatSound.src = src
// }

// createAndPlaySound('sounds/eat.mp3')

