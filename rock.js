
class Rock {
	constructor() {
		this.sprite = rockSprite.image
		this.x = (Math.random() * canvas.width)
		this.y = (Math.random() * canvas.height)
		this.dx = (Math.random() * 6) - 3
		this.dy = (Math.random() * 6) - 3
		this.size = Math.random() * 50 + 80
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