class Octopus {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.h = 48;
        this.w = 48;

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
        this.y -= 48
    }

    moveDown(){
        this.y += 48
    }

    moveRight(){
        this.x += 48
    }

    moveLeft(){
        this.x -= 48
    }
        
  }

