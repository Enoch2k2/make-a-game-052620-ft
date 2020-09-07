const animate = window.requestAnimationFrame;

// GAME WINDOW INFORMATION
const GAME_HEIGHT = 600;
const GAME_WIDTH = 800;

let canvas, ctx;

document.addEventListener("DOMContentLoaded", function () {
  setup();
  animate(draw);
})

function setup() {
  canvas = document.querySelector('canvas');
  ctx = canvas.getContext('2d');
}

function background() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
}

function clearWindow() {
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
}

function draw() {
  clearWindow();
  background();

  animate(draw);
}

