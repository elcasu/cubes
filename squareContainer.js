const SquareContainer = function() {
  this.maxSquares = 500;
  this.squares = [];
  this.group = new THREE.Group();
  this.atractor = new Atractor(0, 0, -1000);

  for(let i = 0; i < this.maxSquares; i++) {
    const sq = new Square();
    this.squares.push(sq);
    this.group.add(sq.cube)
  }
}

SquareContainer.prototype.update = function() {
  const atractor = this.atractor
  let s = 0.1
  let dir = -1
  this.squares.forEach(function(sq) {
    const atractorForce = atractor.getForce(sq.cube.position, s)
    sq.applyForce(atractorForce)
    sq.update();
    s += dir * 0.0001
    if(s < 0 || s > 0.1) {
      dir *= -1
    }
  });
}

SquareContainer.prototype.expand = function(x, y) {
  const md = 100
  this.squares.forEach(function(sq) {
    let normF = new THREE.Vector3(Math.random(), Math.random(), Math.random())
    normF.normalize()
    let d = normF.distanceTo(sq.cube.position)

    sq.applyForce(new THREE.Vector3(
      normF.x * d / md,
      normF.y * d / md,
      normF.z * d / md
    ))
  })
}
/*
 * m - 1
 * d - x
 * x = d / m
 */
