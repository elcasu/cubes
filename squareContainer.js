const SquareContainer = function() {
  this.maxSquares = 100;
  this.squares = [];
  this.group = new THREE.Group();

  for(let i = 0; i < this.maxSquares; i++) {
    const sq = new Square();
    this.squares.push(sq);
    this.group.add(sq.cube)
  }
}

SquareContainer.prototype.update = function() {
  this.squares.forEach(function(sq) {
    sq.update();
  });
}
