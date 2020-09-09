class Player {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.direction = 'up'
    this.speed = 0;
  }

  update() {
    if (this.direction == "up" || this.direction == "down") {
      this.y += this.speed;
    } else if (this.direction == "left" || this.direction == "right") {
      this.x += this.speed;
    }
  }

  render() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}