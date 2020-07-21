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
        ctx.fillStyle(color)
        ctx.drawRect(x, y, 75, 75)
    }
    
    drawTiles(x, y, type){
        if(type === "S"){
            this.drawRect(x, y, "bleu")
        }
        else if(type === "A"){
            this.drawRect(x, y, "green")
        }
    }
    
    drawLabyrinth(){}
    

}