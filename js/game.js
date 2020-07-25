class Game{
    constructor(){

    }
}

function createAndPlaySound(src) {
    const eatSound = document.createElement('audio') // <audio>
    eatSound.addEventListener('canplay', function () {
        eatSound.play()
    })
    eatSound.src = src
}

createAndPlaySound('sounds/eat.mp3')

