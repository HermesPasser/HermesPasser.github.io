
class Item extends SimpleRectCollider {
    start() {
        this.clickable = new Clickable(this.x, this.y, this.width, this.height)
        this.firsClick = true
        this.canDraw = true
        this.canDrop = false
        this.moving = false
        this.clickable.onClick = () => { this.tryDrop() }
        this.drawitemBg = false
        Inventory.addItem(this)
    }
    
    get dropped() {
        return Inventory.isInside(this) && this.canDrop
    }
    
    tryDrop() {
        if (Inventory.isInside(this)) {
            this.canDrop = this.collision.length === 0
        } else {
            this.canDrop = false
        }
        
        if (this.dropped) {
                this.moving = !this.moving 
        }
        
        `				
            já que eu "escolho" o item clicando então eu preciso
            clicar com ele fora primeiro
            
            se isso fosse aplicado em game, eu apertaria para pegar o item
            então o inventario abriria automaticamente com o item já moving = true
            e eu poderia coloca-lo dentro do inventario ou apertar algum botão para
            descarta-lo
            
        `
        if (this.firsClick){ 
            this.firsClick = false
            this.moving = !this.moving
        }
    }
    
    _updateClickable() {
        this.clickable.x = this.x
        this.clickable.y = this.y
        this.clickable.width = this.width 
        this.clickable.height = this.height
    }
    
    update() {
        if (this.moving) {
            this.x = Ramu.mousePosition.X - this.width / 2
            this.y = Ramu.mousePosition.Y - this.height / 2
        }
    
        this._updateClickable()
    }
    
    draw() {
        if(this.drawitemBg) {
            Ramu.ctx.fillStyle = 'green'
            Ramu.ctx.fillRect(this.x, this.y, this.width, this.height)
            
            Ramu.ctx.strokeStyle = 'black'
            
            if (Inventory.isInside(this)) {
                if (this.moving)
                    Ramu.ctx.strokeStyle = 'blue'
                    
                if (this.collision.length !== 0)
                    Ramu.ctx.strokeStyle = 'red'
            }
            
            Ramu.ctx.strokeRect(this.x, this.y, this.width, this.height)
        }
        super.draw()
    }
    
    destroy() {
        super.destroy()
        this.clickable.destroy()
    }
}

class Inventory extends Drawable {
    static instance = null
    static itens = []
    
    static addItem(item) {
        Inventory.itens.push(item)
    }
    
    constructor(x, y, w, h) {
        super(x, y, w, h, true)
        
        if (Inventory.instance != null) {
            Inventory.instance.destroy()
            return Inventory.instance	
        }
        
        Inventory.instance = this
    }
    
    static isInside(gameObject) {
        return Inventory.instance.inside(gameObject)
    }
    
    inside(gameObject){
        return gameObject.x > this.x && gameObject.x + gameObject.width < this.x + this.width  
            && gameObject.y > this.y && gameObject.y + gameObject.height < this.y + this.height
    }
                    
    draw() {
        Ramu.ctx.fillStyle = '#dcdcdc'
        Ramu.ctx.fillRect(this.x, this.y, this.width, this.height)
        Ramu.ctx.strokeStyle = 'black'
        Ramu.ctx.strokeRect(this.x, this.y, this.width, this.height)
        super.draw()
    }
                    
    static destroy() {
        Inventory.instance.destroy()
        for (let item of Inventory.itens)
            item.destroy()
    }
}
