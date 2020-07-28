frameTimer = 0;
class Game{
    constructor(){
        this.gameOver;
        this.raf;

    }

    startGame(){
        if(this.raf){
            cancelAnimationFrame(raf);
        }
        labyrinth = new Labyrinth();
        octopus = new Octopus(); // 1s
        this.   addPlankton()
        this.addPlankton()
        this.addPlankton()
        this.addPlankton()
        this.addPlankton()
        this.addPlankton()
        this.addPlankton()
        this.addPlankton()
        this.addPlankton()
        this.addPlankton()
        timer = new Timer()
        timer.start()
        this.animLoop()
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
                createAndPlaySound("sounds/eating-sound2.mp3");
            }
        }
        if(timer.currentTime === 75){
            gameOver = true
            timer.stop()
            timer.reset()
            ctx.clearRect(0,0,W,H)
        }
    }

    animLoop() {
        frameTimer++;
        $gameTimer.innerHTML = `${timer.printTime()}`
        this.drawGame()
        if(frameTimer % planktonInterval === 0){
            addPlankton()
            planktonInterval += 90
        }
        
        if(!gameOver){
            this.raf = requestAnimationFrame(this.animLoop);
        }
    }

    addPlankton(){
        let plankton = new Plankton()
        planktons[planktonId] = plankton
        planktonId++
    }

    createAndPlaySound(src) {
        const sound = document.createElement('audio') // <audio>
        sound.addEventListener('canplay', function () {
            if(document.getElementById("sound-checkbox").checked){
                sound.play()
            }
        })
        sound.src = src
    }

}



