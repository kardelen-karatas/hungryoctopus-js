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
        let x = randomNum(1, 14)
        let y = randomNum(1, 14)        
        //console.log(`lab : ${labyrinth}, tileType : ${labyrinth.tileType(x,y)}`)
        
        if(labyrinth.tileType(x,y) === "F"){
            console.log(`planktons : ${planktons}`)

            this.x = x * this.w
            this.y = y * this.h
            if(planktons) {
            
                for(const id in planktons){
                 
                    let plankton = planktons[id]
                    console.log(`existing planton ${id} : ${plankton.x /48}, ${plankton.y/48}`)
                    console.log(`Newly plankton : ${x}, ${y}`)
                    if(plankton.x === x && plankton.y === y){
                        console.log("test") 
                    }
                }
        } 

        }
        else {this.selectRandomPosition()}
        
    }

    draw(){
        ctx.drawImage(this.img, this.x,this.y,this.h,this.w)
    }

    isEaten(){
        return octopus.x === this.x && octopus.y === this.y
    }

}