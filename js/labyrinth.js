class MovableTile {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}


class Labyrinth {

    constructor(){
        this.pattern = 
        [
        "PFFWWWWWFWFFWWW"
        ,"FWFFFFFWFWWFWFF"
        ,"FFWWFWFFFWFFFFW"
        ,"WFFFWWWWFFFFWWW"
        ,"FFFWFFFFFWWFFFW"
        ,"WWFWWWWFWWFFFWW"
        ,"FFFWWWFFFFWWFWW"
        ,"FWFFFWWFWFWWFFF"
        ,"FWWFWFFFWFFFWWF"
        ,"WWWFFWWWWFWWWWF"
        ,"WWWFWWFWFFWWFFF"
        ,"WFFFFFFWFWWFFWW"
        ,"FFWWFFFFFFFFWWW"
        ,"WWWWFFWWFWWFWWW"
        ,"WFFFFWWWFFWFFFF"
        ]
        this.movableTiles = []
    }

    drawRect(x, y, color){
        ctx.fillStyle = color;
        ctx.fillRect(x, y, 48, 48);
    }
    
    drawTiles(x, y, type){
        switch(type){
            case "F":
                this.drawRect(x, y, "#63c5ec");
                break;
            case "W":
                this.drawRect(x, y, "#f0b6a1");
                break;
            case "P":
                this.drawRect(x, y, "#63c5ec");
                break;
        }
    }

    tileType(x, y){
        return this.pattern[x][y]
    }
    
    draw(){
        for (let y=0; y< this.pattern.length; y++){
            let labY = y*48
            for(let x=0; x<this.pattern[y].length; x++){
                let labX = x*48
                let type = this.tileType(x, y)

                if(type === "F"){
                    this.movableTiles.push(new MovableTile(x,y))
                }
                
                this.drawTiles(labX, labY, type)
            }
        }
    }
}