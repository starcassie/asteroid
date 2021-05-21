// game.js file

// game state
let ship = new Ship()
let rocks = [new Rock(), new Rock(), new Rock()]
let lasers = []
let makeRockCounter = 1000
let countRocks = 3
let hey
let text = $('.over')
let button = $('button')

let keyPressed = {}
// check for user input
window.addEventListener('keydown', event => {
  keyPressed[event.code] = true
})

window.addEventListener('keyup', event => {
  keyPressed[event.code] = false
})

function checkCollide() {
  let value = false
  rocks.forEach(function checkInner(rock) {
    lasers.forEach(function check(laser) {
      if (Math.sqrt(Math.pow(laser.y - rock.y, 2) + Math.pow(laser.x - rock.x, 2)) <= (rock.size/2)) {
        rocks.splice(rocks.indexOf(rock), 1)
        countRocks -= 1
        lasers.splice(lasers.indexOf(laser), 1)
        if (rock.size > 70) {
          rocks.push(new Rock(rock.x, rock.y, rock.size/2))
          rocks.push(new Rock(rock.x, rock.y, rock.size/2))
        }
      }
    })
    if (Math.sqrt(Math.pow(ship.y - rock.y, 2) + Math.pow(ship.x - rock.x, 2)) <= (rock.size/2 + ship.size/2)) {
        console.log("collision")
        value = true
    }
  })
  if (value) {
    console.log(value)
  }
  return value
}

// game loop
function loop() {
  // todo check user input to change ship's angle and speed
  if (keyPressed['ArrowLeft'] === true) {
    ship.rotateLeft()
  }
  // challenge: check for right / up and call the appropriate ship method
  if (keyPressed['ArrowRight'] === true) {
    ship.rotateRight()
  }
  if (keyPressed['ArrowUp'] === true) {
    ship.thrust()
  }
  if (keyPressed['Space'] === true) {
    lasers.push(new Laser(ship.x + Math.cos(ship.angle) * 25, ship.y + Math.sin(ship.angle) * 25 , Math.cos(ship.angle), Math.sin(ship.angle)))
  }

  if (makeRockCounter % 30 === 0 && countRocks < 20) {
    rocks.push(new Rock())
    countRocks += 1
  }
  makeRockCounter += 1

  // change game state
  ship.step()
  rocks.forEach(rock => rock.step())
  lasers.forEach(laser => laser.step())

  // draw all
  erase()
  ship.draw()
  rocks.forEach(rock => rock.draw())
  lasers.forEach(laser => laser.draw())

  if (checkCollide()) {
    console.log("stop")
    clearTimeout(hey)
    text.toggleClass("hidden")
  } else {
    hey = setTimeout(() => loop(), 1000 / 60)
  }
}

// wait for images to load
async function loadGame() {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
  await shipSprite.loaded
  await rockSprite.loaded
  loop()
  console.log("here")
}
loadGame()

function startAgain() {
  console.log("researt")
  text.toggleClass("hidden")
  ship = new Ship()
  rocks = [new Rock(), new Rock(), new Rock()]
  lasers = []
  makeRockCounter = 1000
  countRocks = 3
  loadGame()
}

button.on("click", startAgain)
