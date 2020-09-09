class LaserBeam {
  static all = []

  constructor(startingPoint, width, height) {
    this.x = startingPoint.x;
    this.y = startingPoint.y;
    this.direction = startingPoint.direction;
    this.width = width;
    this.height = height;
    this.color = "#7DFF33";
    this.speed = 1;
  }

  static create(startingPoint, width, height) {
    let laserbeam = new LaserBeam(startingPoint, width, height)
    LaserBeam.all.push(laserbeam);
  }

  update() {
    if (this.direction == "up") {
      this.y -= this.speed;
    } else if (this.direction == "down") {
      this.y += this.speed;
    } else if (this.direction == "left") {
      this.x -= this.speed;
    } else if (this.direction == "right") {
      this.x += this.speed;
    }
  }

  static updateAll() {
    LaserBeam.sanitize();
    LaserBeam.all.forEach(laserbeam => laserbeam.update());
  }

  // moving left
  // laserbeam.x + laserbeam.width > 0

  // moving right
  // laserbeam.x < GAME_WIDTH

  // moving up
  // laserbeam.y + laserbeam.height > 0

  // moving down
  // laserbeam.y < GAME_HEIGHT


  static sanitize() {
    LaserBeam.all = LaserBeam.all.filter(function (laserbeam) {
      if (laserbeam.x + laserbeam.width > 0 && laserbeam.x < GAME_WIDTH && laserbeam.y + laserbeam.height > 0 && laserbeam.y < GAME_HEIGHT) {
        return laserbeam
      }
    })
  }

  render() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  static renderAll() {
    LaserBeam.all.forEach(laserbeam => laserbeam.render());
  }
}