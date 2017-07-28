const SquareContainer = function() {
  this.position = new THREE.Vector3(0, 0, -5000)
  this.maxSquares = 1500;
  this.squares = [];
  this.group = new THREE.Group();
  this.atractor = new Atractor(this.position);

  for(let i = 0; i < this.maxSquares; i++) {
    const sq = new Square(new THREE.Vector3(5, 0, 0));
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
