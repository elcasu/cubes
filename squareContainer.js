const SquareContainer = function() {
  this.position = new THREE.Vector3(0, 0, -1000)
  this.maxSquares = 500;
  this.squares = [];
  this.group = new THREE.Group();
  this.atractor = new Atractor(this.position);

  for(let i = 0; i < this.maxSquares; i++) {
    const sq = new Square(new THREE.Vector3(5, 0, 0));
    this.squares.push(sq);
    this.group.add(sq.cube)
  }
}

let s = 0.3
SquareContainer.prototype.update = function() {
  const atractor = this.atractor
  this.squares.forEach(function(sq) {
    const atractorForce = atractor.getForce(sq.cube.position, s)
    sq.applyForce(atractorForce)
    sq.update();
  });
}
