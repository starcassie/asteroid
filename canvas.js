// canvas.js file

// setup canvas
let canvas = document.getElementById('display')
canvas.width = document.body.clientWidth
canvas.height = document.body.clientHeight
let ctx = canvas.getContext('2d')

// loading images so we can draw them later
function loadSprite(url) {
  let image = new Image()
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
  let loaded = new Promise((resolve, reject) => {
    image.onload = resolve
  })
  image.src = url
  return {
    image: image,
    loaded: loaded,
  }
}
let shipSprite = loadSprite('ship.png')
let rockSprite = loadSprite('rock.png')

// draw helpers
function erase() {
  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
}

// Discussion:
// - How to move ship forward?
//   - arrow player presses on determines the direction the ship does
//   - when player presses ArrowUp, thrust is called
//   - when thrust is called, update dx, dy
//   - update x,y of ship by dx,dy
// - How to rotate ship?
//   - arrow player presses on determines the direction the ship does
//   - when left / right is pressed
//   - update angle
// - How to speed up / slow down ship?
//   - increasing dx,dy to speed up, decreasing dx,dy to slow down
// - How can we check if ship went out of bounds and wrap around screen?
//   - size of the screen/canvas would be the boundary
//   - compare with the center of the ship (x,y)
// - How can we keep track of when keys are pressed/released?
//   - using if statements, check for event.code








