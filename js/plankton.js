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
        console.log(randomTile.x, randomTile.y)

        this.x = randomTile.x * this.w
        this.y = randomTile.y * this.h
        
        // let x = randomNum(1, 14)
        // let y = randomNum(1, 14)        
        // //console.log(`lab : ${labyrinth}, tileType : ${labyrinth.tileType(x,y)}`)
        
        // if(labyrinth.tileType(x,y) === "F"){
        //     console.log(`planktons : ${planktons}`)

        //     this.x = x * this.w
        //     this.y = y * this.h

        //     let firstPlank = planktons[0]
        //     console.log(`Tile Type : ${labyrinth.tileType(x,y)}`)
        //     console.log(`Random coord: ${x}, ${y}`)
        //     console.log(`First plankton coord: ${firstPlank.x /48}, ${firstPlank.y/48}`)
        //     if(firstPlank.x === x && firstPlank.y === y){
        //         console.log("the same")
        //     }
        
        // } else {this.selectRandomPosition()}
        
    }

    draw(){
        ctx.drawImage(this.img, this.x,this.y,this.h,this.w)
    }

    isEaten(){
        return octopus.x === this.x && octopus.y === this.y
    }

}