class Octopus {
    constructor(){
        const img = document.createElement('img');
        img.onload = () => {
            this.img = img;
            const imgRatio = img.naturalWidth/img.naturalHeight
            this.w = 50;
            this.h = this.w/imgRatio;
            this.x = 0;
            this.y = 0;            
        }
        img.src = "images/octopus.png";
    }

    draw(){
        console.log("drawing")
        if (!this.img) return;
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }
}