"use strict"

class MovableEntity extends Drawable {
	margin = 5
	fillStyle = '#fdfd96'
	
	constructor(x, y, w, h, txt) {
		super(x, y, w, h, true)
		if (typeof txt !== 'string')
			throw new Error('txt must be a string')
		
		this.label = new Ramu.Text(txt, x, y, 100, 15)
		this.label.tag = `$Text-of({this.tag})`
		this.label.align = 'center'
		this.clickable = new Clickable(x, y, w, h)
		this.clickable.onClick = () => { this.move = !this.move } /*this is pointing to Movable*/
		this.move = false
	}
	
	_updateClickableRect() {
		this.clickable.x = this.x
		this.clickable.y = this.y
		this.clickable.width = this.width
		this.clickable.height = this.height
	}
	
	_updatePosition() {
		if (!this.move)
			return
		
		this.x = Ramu.mousePosition.X
		this.y = Ramu.mousePosition.Y	
	}
	
	update() {
		this._updateClickableRect()
		this._updatePosition()
	}
	
	get topAnchor() {
		return { x: this.x + this.width / 2, y: this.y - this.margin }
	}
	
	get leftAnchor() {
		return { x: this.x - this.margin, y: this.y + this.height / 2 }
	}
	
	get rightAnchor() {
		return { x: this.x + this.width + this.margin, y: this.y + this.height / 2 }
	}
	
	get bottomAnchor() {
		return { x: this.x + this.width / 2, y: this.y + this.height + this.margin }
	}
	
	setFocus() {
		if (this.move) {
			Ramu.ctx.strokeStyle = 'blue'	
			this.label.fillStyle = 'blue'
		}	
	}
	
	removeFocus() {
		if (!this.move)
			this.label.fillStyle = 'black'
		
		Ramu.ctx.strokeStyle = 'black'
	}
	
	drawEntity() {} // virtual
	
	draw() {
		if (Ramu.debugMode) {		
			Ramu.ctx.strokeRect(this.x, this.y, this.width, this.height)
			
			this.setFocus()
			Ramu.ctx.fillRect(this.topAnchor.x, this.topAnchor.y, 2, 2)
			Ramu.ctx.fillRect(this.bottomAnchor.x, this.bottomAnchor.y, 2, 2)
			Ramu.ctx.fillRect(this.leftAnchor.x, this.leftAnchor.y, 2, 2)
			Ramu.ctx.fillRect(this.rightAnchor.x, this.rightAnchor.y, 2, 2)
			this.removeFocus()
		}
		
		this.setFocus()
		this.drawEntity()
		this.removeFocus()
	}
}
