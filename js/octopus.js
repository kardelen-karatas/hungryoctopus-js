class Octopus {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.h = 48;
        this.w = 48;

        this.img = new Image(); // <img>
        
        this.img.onload = () => {
            this.draw()
        }
        this.img.src = 'images/octopus2.png';
    }
    
    draw() {
        ctx.drawImage(this.img, this.x,this.y,this.h,this.w)
    }

    moveUp() {
        if(this.y >= this.h) this.y -= 48        
    }

    moveDown(){
        if(this.y < H - this.h) this.y += 48
    }

    moveRight(){
        if(this.x < W - this.w) this.x += 48
    }

    moveLeft(){
        if(this.x >= this.w) this.x -= 48
    }
    
    canMove(labyrinthe){

    }

    move(eCode){
        switch (eCode) {
        case "ArrowLeft": 
            this.moveLeft();
            break;
        case "ArrowRight":
            this.moveRight();
            break;
        case "ArrowUp":
            this.moveUp();
            break;
        case "ArrowDown":
            this.moveDown();
            break;
    
        }
    }
        
  }

