
class Rock {
	constructor(xS, yS, sizeS) {
		if (typeof xS !== "undefined") {
			this.sprite = rockSprite.image
			this.x = xS
			this.y = yS
			this.dx = (Math.random() * 6) - 3
			this.dy = (Math.random() * 6) - 3
			this.size = sizeS
		} else {
			this.sprite = rockSprite.image
			this.x = (ship.x + ship.size * 4 + Math.random() * (canvas.width - ship.size * 8)) % canvas.width
			this.y = (ship.y + ship.size * 4 + Math.random() * (canvas.height - ship.size * 8)) % canvas.height
			this.dx = (Math.random() * 6) - 3
			this.dy = (Math.random() * 6) - 3
			this.size = Math.random() * 50 + 80
		}
	}

	step() {
		this.x += this.dx
		this.y += this.dy

		if (this.x < 0) {
	      this.x = canvas.width
	    } else if (this.x > canvas.width) {
	      this.x = 0
	    }
	    if (this.y < 0) {
	      this.y = canvas.height
	    } else if (this.y > canvas.height) {
	      this.y = 0
	    }
	}

	draw () {
		ctx.drawImage(
			this.sprite,
			this.x - this.size/2,
			this.y - this.size/2,
			this.size,
			this.size)
	}
}