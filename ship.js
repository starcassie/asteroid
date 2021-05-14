// ship.js file

// define classes to track our state
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
class Ship {
  constructor() {
    this.sprite = shipSprite.image
    // x,y describe the center of the ship
    this.x = canvas.width / 2
    this.y = canvas.height / 2
    // dx,dy describe the speed the ship is traveling
    this.dx = 0
    this.dy = 0
    // the angle is in radians, meaning it goes from 0 - 2*Math.PI
    this.angle = Math.PI * 1.5
    this.size = 50
  }
  rotateLeft() {
    // this.angle = this.angle - 0.1
    this.angle -= 0.1
  }
  rotateRight() {
    this.angle += 0.1
  }
  thrust() {
    this.dx += Math.cos(this.angle)
    this.dy += Math.sin(this.angle)
  }
  step() {
    this.x += this.dx
    this.y += this.dy

    // todo slow down the ship by updating dx,dy
    this.dx *= 0.98
    this.dy *= 0.98

    // todo if out of bounds, wrap to the other side of the canvas
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
  draw() {
    ctx.save()
    ctx.translate(this.x, this.y)
    ctx.rotate(this.angle)
    ctx.drawImage(this.sprite, -this.size / 2, -this.size / 2, this.size, this.size)
    ctx.restore()
  }
}
