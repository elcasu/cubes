const Atractor = function(position) {
  this.position = position || new THREE.Vector3(0, 0, 0)
  this.defaultStrength = 0.1
}

Atractor.prototype.getForce = function(point, strength) {
  const v = new THREE.Vector3()
  strength = strength || this.defaultStrength
  v.subVectors(this.position, point).normalize().multiplyScalar(strength)
  return v
}
