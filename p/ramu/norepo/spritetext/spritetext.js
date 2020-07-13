"use strict"

class SpriteText extends Drawable {
	fontImg = null
	wrap = false // breaks the line if the char position is greater than the obj's size

	fontSize = 22
	padding = 5
	linePadding = 5
	// fontSize is the size of each individual subimage
	mapper = { celSize: 15, imageWidth: 390, order: "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm" }
	mapperFontSize = 8 // not in use yet
	text = ""

	constructor(text, mapper, font, r) {
		super(r.x, r.y, r.width, r.height, true)
		this.mapper = mapper ? mapper : this.mapper // cuz' || isn' working for some reason
		this.fontImage = font
		this.text = text
	}

	static makeMapper(celSize, imageWidth, charOrder) {
		return { celSize: celSize, imageWidth: imageWidth, order: charOrder }
	}
	
	draw() {
		let x = this.x
		let y = this.y
		
		for(let char of this.text) {
			const id = this.mapper.order.indexOf(char)
			const dx = (id % (this.mapper.imageWidth / this.mapper.celSize)) * this.mapper.celSize;
			const dy = ~~(id / (this.mapper.imageWidth / this.mapper.celSize)) * this.mapper.celSize;

			Ramu.ctx.drawImage(this.fontImage, dx, dy, this.mapper.celSize, this.mapper.celSize,
				x, y, this.fontSize, this.fontSize)

			x += this.fontSize + this.padding
			if (char == "\n" || (this.wrap && x + this.fontSize > this.x + this.width)) {
				x = this.x
				y += this.fontSize + this.linePadding	
			}
		}
		
		if (Ramu.debugMode && this.canDraw) {
			Ramu.ctx.strokeRect(this.x, this.y, this.width, this.height)
		}
	}
}


