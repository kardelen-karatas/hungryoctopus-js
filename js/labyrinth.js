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
        ,"FWFFFWWFWFWWFFW"
        ,"FWWFWFFFWFFFWWW"
        ,"WWWFFWWWWFWWWWW"
        ,"WWWFWWFWFFWWFFW"
        ,"WFFFFFFWFWWFFWW"
        ,"FFWWFFFFFFFFWWW"
        ,"WWWWFFWWFWWFWWW"
        ,"WFFFFWWWFFWFFFG"
        ]
    }

    drawRect(x, y, color){
        ctx.fillStyle = color;
        ctx.fillRect(x, y, 48, 48);
    }
    
    drawTiles(x, y, type){
        switch(type){
            case "F":
                this.drawRect(x, y, "#009FE1");
                break;
            case "W":
                this.drawRect(x, y, "#D9B8AD");
                break;
            case "P":
                this.drawRect(x, y, "#009FE1");
                break;
            case "G":
                this.drawRect(x, y, "#825438");
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
                
                this.drawTiles(labX, labY, type)
            }
        }
    }
}