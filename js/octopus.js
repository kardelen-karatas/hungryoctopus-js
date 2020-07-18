class Octopus {
    constructor() {
        this.x = 10;
        this.y = 10;
        this.h = 75;
        this.w = 75;

        this.img = new Image(); // <img>
        
        this.img.onload = () => {
            console.log("img loaded!")
            this.draw()
        }
        this.img.src = 'images/octopus2.png';

    }

    draw() {
        ctx.drawImage(this.img, this.x,this.y,this.h,this.w)
    
    }

    moveUp() {
        this.y -= 75
    }

    moveDown(){
        this.y += 75
    }

    moveRight(){
        this.x += 75
    }

    moveLeft(){
        this.x -= 75
    }
        
  }

