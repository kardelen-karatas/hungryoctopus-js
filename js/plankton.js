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
        let x = randomNum(1, 15)
        let y = randomNum(1, 15)        
        if(labyrinth.tileType(x,y) === "F"){
            this.x = x * this.w
            this.y = y * this.h
        } else {this.selectRandomPosition()}
        
    }

    draw(){
        ctx.drawImage(this.img, this.x,this.y,this.h,this.w)
    }

    isEaten(){
        return octopus.x === this.x && octopus.y === this.y
    }

}