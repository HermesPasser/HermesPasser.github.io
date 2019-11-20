"use strict"

class DashedLine extends Line {
	
	draw() {
		Ramu.ctx.setLineDash([2, 5])
		super.draw()
		Ramu.ctx.setLineDash([])
	}
}
