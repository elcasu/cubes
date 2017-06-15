const SquareContainer = function() {
  this.maxSquares = 10;
  this.squares = [];
  this.group = new THREE.Group();

  for(let i = 0; i < this.maxSquares; i++) {
    const sq = new Square();
    this.squares.push(sq);
    this.group.add(sq.cube)
  }
}

SquareContainer.prototype.update = function() {
  const _this = this;
  this.squares.forEach(function(sq) {
    sq.update();
  });
}
