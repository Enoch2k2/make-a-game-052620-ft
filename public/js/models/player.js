class Player {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.direction = 'up'
    this.speed = 0;
    this.laserEntryPoint = {
      x: this.x + 6.5,
      y: this.y - 25,
      direction: this.direction
    }

    this.fireRate = 500;
    this.fireReady = true;
  }

  reload() {
    debugger;
    this.fireReady = true;
  }

  update() {
    if (this.direction == "up" || this.direction == "down") {
      this.y += this.speed;
    } else if (this.direction == "left" || this.direction == "right") {
      this.x += this.speed;
    }
    this.updateLaserEntryPoint();
  }

  updateLaserEntryPoint() {
    if (this.direction == "up") {
      this.laserEntryPoint = {
        x: this.x + 6.5,
        y: this.y - 25,
        direction: this.direction
      }
    } else if (this.direction == "down") {
      this.laserEntryPoint = {
        x: this.x + 6.5,
        y: this.y + 25,
        direction: this.direction
      }
    } else if (this.direction == "left") {
      this.laserEntryPoint = {
        x: this.x - 25,
        y: this.y + 6.5,
        direction: this.direction
      }
    } else if (this.direction == "right") {
      this.laserEntryPoint = {
        x: this.x + 25,
        y: this.y + 6.5,
        direction: this.direction
      }
    }
  }

  render() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}