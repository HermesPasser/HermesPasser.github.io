"use strict"

const blockImg = Ramu.Utils.getImage('block.png')
const towerImg = Ramu.Utils.getImage('tower.png')
const windowImg = Ramu.Utils.getImage('window.png')
const doorImg = Ramu.Utils.getImage('door.png')
const bigBlockImg = Ramu.Utils.getImage('bigblock.png')

class CastleElement extends Item {
    constructor(x, y, w, h) {
        super(x, y, w, h)
        this.sprite = new Sprite(new Image(), x, y, w, h)
    }

    setImage(img) {
        this.sprite.img = img
    }

    update() {
        super.update()
        this.sprite.x = this.x
        this.sprite.y = this.y
    }

    destroy() {
        super.destroy()
        this.sprite.destroy()
    }
}

class Game extends Drawable {
    start() {
        this.tools = [0, blockImg, towerImg, windowImg, doorImg, bigBlockImg]
        this.toolNames = ['eraser', 'block', 'tower', 'window', 'door', 'big block']
        this.toolSizes = [0, [31, 31], [108, 62], [56, 62], [62, 62], [62, 62]]
        this.currentTool = 1
        this.currentToolText = new Ramu.Text('', 20, 20, 200)
        new Ramu.Text("q: erase | w: block | e: tower", 200, 20, 300)

        this.area = new Inventory(40, 40, Ramu.width - 40, Ramu.height - 40)
        this.area.drawPriority = -1
    }

    updateUI() {
        this.currentToolText.text = `Current tool: ${this.toolNames[this.currentTool]}`
    }

    updateInput() {
        if (Ramu.onKeyDown('q'))
            this.currentTool = 0
        else if (Ramu.onKeyDown('w'))
            this.currentTool = 1
        else if (Ramu.onKeyDown('e'))
            this.currentTool = 2
        else if (Ramu.onKeyDown('r'))
            this.currentTool = 3
        else if (Ramu.onKeyDown('t'))
            this.currentTool = 4
        else if (Ramu.onKeyDown('y'))
            this.currentTool = 5

        if (Ramu.Utils.isEmpty(Ramu.clickedPosition))
            return
       
        const x = Ramu.clickedPosition.X - 25
        const y = Ramu.clickedPosition.Y - 25
        
        if (this.currentTool === 0){
            this.erase(x, y)
            return
        }

        if (!this.availablePos(Ramu.clickedPosition.X , Ramu.clickedPosition.Y, 50, 50))
            return

        const size = this.toolSizes[this.currentTool]
        const el = new CastleElement(x, y, size[0], size[1])
        el.setImage(this.tools[this.currentTool])
        this.drawPriority++;
    }

    update() {
        this.updateUI()
        this.updateInput()
    }

    availablePos(x, y, w, h) {
        const pos = new Rect(x, y, w, h)
        for (let i = 0; i < Ramu.objsToCollide.length; ++i){
            const obj = Ramu.objsToCollide[i].toRect()
            
            if (Ramu.Math.overlap(pos, obj))
                return false
        }
        return true
    }

    erase(x, y) {
        const pos = new Rect(x, y, 1, 2)
        for (let i = 0; i < Ramu.objsToCollide.length; ++i){
            const obj = Ramu.objsToCollide[i].toRect()
            
            if (Ramu.Math.overlap(pos, obj))
               Ramu.objsToCollide[i].destroy()
        }
    }

    draw() {
        const size = this.toolSizes[this.currentTool] || 1
        Ramu.ctx.strokeRect(Ramu.mousePosition.X -25, Ramu.mousePosition.Y -25, size[0], size[1])
    }

}

let game = new Game(0,0,0,0,true)
//Ramu.debugMode = true
Ramu.init(700, 500)
