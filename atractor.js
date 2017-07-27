const Atractor = function(x, y, z) {
  this.position = new THREE.Vector3(x, y, z)
  this.defaultStrength = 0.1
}

Atractor.prototype.getForce = function(point, strength) {
  const v = new THREE.Vector3()
  strength = strength || this.defaultStrength
  v.subVectors(this.position, point).normalize().multiplyScalar(strength)
  return v
}
