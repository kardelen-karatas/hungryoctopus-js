class Octopus {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.h = 48;
        this.w = 48;
        this.nextStepX
        this.nextStepY

        this.img = new Image(); // <img>
        
        this.img.onload = () => {
            this.draw()
        }
        this.img.src = 'images/octopus.png';
    }
    
    draw() {
        ctx.drawImage(this.img, this.x,this.y,this.h,this.w)
    }

    moveUp(isMovable) {
        if(this.y >= this.h && isMovable) this.y -= 48        
    }

    moveDown(isMovable){
        if(this.y < H - this.h && isMovable) this.y += 48
    }

    moveRight(isMovable){
        if(this.x < W - this.w && isMovable) this.x += 48
    }

    moveLeft(isMovable){
        if(this.x >= this.w && isMovable) this.x -= 48
    }

    isMovableTileType(eCode){
        let nextStepX = this.x / this.w;
        let nextStepY = this.y / this.h;

        if(eCode === "ArrowLeft"){nextStepX -= 1}
        if(eCode === "ArrowRight"){nextStepX += 1}
        if(eCode === "ArrowUp"){nextStepY -= 1}
        if(eCode === "ArrowDown"){nextStepY += 1}

        let tileType = labyrinth.tileType(nextStepX,nextStepY)
        
        if(tileType === "W")return false
        return true
        
    }

    move(eCode){
        let isMovable = this.isMovableTileType(eCode)

        console.log(isMovable)
        switch (eCode) {
        case "ArrowLeft": 
            this.moveLeft(isMovable);
            break;
        case "ArrowRight":
            this.moveRight(isMovable);
            break;
        case "ArrowUp":
            this.moveUp(isMovable);
            break;
        case "ArrowDown":
            this.moveDown(isMovable);
            break;
    
        }
    }

    eatPlankton(){

    }
        
  }

