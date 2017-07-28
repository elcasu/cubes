const Square = function(vInit) {
  const geometry = new THREE.BoxGeometry(
    Math.random() * 50,
    Math.random() * 50,
    Math.random() * 50
  );
  material = new THREE.MeshLambertMaterial({
    color: new THREE.Color(Math.random(), Math.random(), Math.random())
  });
  const a = 1;
  this.velocity = new THREE.Vector3(
    vInit.x || 0,
    vInit.y || 0,
    vInit.z || 0
  );
  this.mass = 1;
  this.acceleration = new THREE.Vector3();
  this.wDir = 1;
  this.hDir = 1;
  this.dDir = 1;
  this.cube = new THREE.Mesh(geometry, material);
  this.cube.position.x = Math.random() * WIDTH - WIDTH / 2;
  this.cube.position.y = Math.random() * HEIGHT - HEIGHT / 2;
  this.cube.position.z = Math.random() * 100 - 100 / 2;
  this.cube.rotation.x = Math.random() * 2 * Math.PI;
  this.cube.rotation.y = Math.random() * 2 * Math.PI;
  this.updated = false;
}

Square.prototype.applyForce = function(force) {
  force.divideScalar(this.mass);
  this.acceleration.add(force);
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

Square.prototype.update = function(cb) {
  //this.checkConstraints();
  this.velocity.add(this.acceleration);
  this.cube.position.add(this.velocity);
  this.acceleration.multiplyScalar(0);
  this.cube.rotation.x += 0.01;
  this.cube.rotation.y += 0.01;
  this.cube.rotation.z += 0.01;
  this.cube.verticesNeedUpdate = true;
};
