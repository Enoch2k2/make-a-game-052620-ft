const animate = window.requestAnimationFrame;

// GAME WINDOW INFORMATION
const GAME_HEIGHT = 600;
const GAME_WIDTH = 800;

const W_KEY = 87;
const A_KEY = 65;
const S_KEY = 83;
const D_KEY = 68;

const SPACEBAR = 32;

let canvas, ctx, player;

let counter = 0;

document.addEventListener("DOMContentLoaded", function () {
  setup();
  animate(draw);
})

function setup() {
  setupControls();
  canvas = document.querySelector('canvas');
  ctx = canvas.getContext('2d');
  player = new Player((GAME_WIDTH / 2) - 10, (GAME_HEIGHT / 2) - 10, 20, 20, "blue");
}

function setupControls() {
  setupMovement()
  setupPlayerStop()
  setupFireLaserBeams();
}

function setupFireLaserBeams() {
  document.addEventListener('keydown', function (e) {
    if (e.which == SPACEBAR && player.fireReady) {
      if (player.direction == "up" || player.direction == "down") {
        LaserBeam.create(player.laserEntryPoint, (player.width / 2) - 2, player.height + 2)
        player.fireReady = false;
        setTimeout(player.reload.bind(player), player.fireRate)
      } else {
        LaserBeam.create(player.laserEntryPoint, player.height + 2, (player.width / 2) - 2)
        player.fireReady = false;
        setTimeout(player.reload.bind(player), player.fireRate)
      }
    }
  })
}

function setupMovement() {
  document.addEventListener('keydown', function (e) {
    if (e.which == W_KEY) {
      player.speed = -0.75;
      player.direction = "up"
    } else if (e.which == S_KEY) {
      player.speed = 0.75;
      player.direction = "down"
    } else if (e.which == A_KEY) {
      player.speed = -0.75;
      player.direction = "left"
    } else if (e.which == D_KEY) {
      player.speed = 0.75;
      player.direction = "right"
    }
  })
}

function setupPlayerStop() {
  document.addEventListener('keyup', function (e) {
    if (e.which == W_KEY || e.which == S_KEY || e.which == A_KEY || e.which == D_KEY) {
      player.speed = 0;
    }
  })
}

function background() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
}

function clearWindow() {
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
}

function update() {
  player.update();
  LaserBeam.updateAll();
}

function render() {
  player.render();
  LaserBeam.renderAll();
}

function draw() {
  clearWindow();
  background();
  update();
  render();
  animate(draw);
}

