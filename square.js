const Square = function() {
  const geometry = new THREE.BoxGeometry(
    Math.random() * 50,
    Math.random() * 50,
    Math.random() * 50
  );
  const material = new THREE.MeshLambertMaterial({
    color: new THREE.Color(Math.random(), Math.random(), Math.random())
  });
  this.velocity = new THREE.Vector3(
    Math.random(),
    Math.random(),
    Math.random()
  );
  this.wDir = 1;
  this.hDir = 1;
  this.dDir = 1;
  this.cube = new THREE.Mesh(geometry, material);
  this.cube.position.x = Math.random() * WIDTH - WIDTH / 2;
  this.cube.position.y = Math.random() * HEIGHT - HEIGHT / 2;
  this.cube.rotation.x = Math.random() * 2 * Math.PI;
  this.cube.rotation.y = Math.random() * 2 * Math.PI;
}

Square.prototype.checkConstraints = function() {
  if(this.cube.position.x < -WIDTH / 2 || this.cube.position.x > WIDTH / 2) {
    this.velocity.x *= -1;
  }

  if(this.cube.position.y < -HEIGHT / 2 || this.cube.position.y > HEIGHT / 2) {
    this.velocity.y *= -1;
  }

  if(this.cube.position.z < -100 || this.cube.position.z > 100) {
    this.velocity.z *= -1;
  }
};

Square.prototype.update = function() {
  this.checkConstraints();
  this.cube.position.add(this.velocity);
  this.cube.rotation.x += 0.01;
  this.cube.rotation.y += 0.01;
  this.cube.rotation.z += 0.01;
  this.cube.scale.x += this.wDir * 0.01;
  this.cube.scale.y += this.hDir * 0.01;
  this.cube.scale.z += this.dDir * 0.01;
  if(this.cube.scale.x > 2 || this.cube.scale.x < 0) {
    this.wDir *= -1;
  }
  if(this.cube.scale.y > 2 || this.cube.scale.y < 0) {
    this.hDir *= -1;
  }
  if(this.cube.scale.z > 2 || this.cube.scale.z < 0) {
    this.dDir *= -1;
  }
  this.cube.verticesNeedUpdate = true;
};
