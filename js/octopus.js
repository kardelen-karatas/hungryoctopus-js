class Octopus {
    constructor() {
        //const img = new Image();
        const img = document.createElement('img');
        img.onload = () => {
            this.img = img;
            this.x = 10;
            this.y = 10;
            this.h = 100;
            this.w = 100;
        }
        img.src = 'images/octopus2.png';        
    }

    draw() {
        console.log("octopus is loading ...")
        console.log(`canvas W: ${ctx.canvas.width} canvas H: ${ctx.canvas.height}`)
        ctx.drawImage(this.img, 10,10,100,100)
    
    }
        
  }

