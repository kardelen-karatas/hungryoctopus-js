class Plankton{
    constructor() {
        this.x 
        this.y  
        this.h = 48
        this.w = 48
        this.img = new Image(); 
        
        this.img.onload = () => {
            this.selectRandomPosition()
            this.draw()
        }
        this.img.src = 'images/item1.png';

    }

    selectRandomPosition(){
        const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
        let randomPos = randomNum(0, labyrinth.movableTiles.length - 1)
        let randomTile = labyrinth.movableTiles[randomPos]
        this.x = randomTile.x * this.w
        this.y = randomTile.y * this.h
        delete labyrinth.movableTiles[randomPos]
        
    }

    draw(){
        ctx.drawImage(this.img, this.x,this.y,this.h,this.w)
    }

    isEaten(){
        labyrinth.movableTiles.push[new MovableTile(this.x, this.y)]
        return octopus.x === this.x && octopus.y === this.y
    }

}