const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const VIEW_ANGLE = 45
const ASPECT = WIDTH / HEIGHT
const NEAR = 0.1
const FAR = 10000;
const RADIUS = 30;

const container = document.querySelector('#container')
const renderer = new THREE.WebGLRenderer();
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
camera.position.z = 1000;
scene.add(camera);

renderer.setSize(WIDTH, HEIGHT);
container.appendChild(renderer.domElement);

const pointLight = new THREE.PointLight(0xFFFFFF);
pointLight.position.x = 100;
pointLight.position.y = 50;
pointLight.position.z = 530;
scene.add(pointLight);

squareContainer = new SquareContainer();
scene.add(squareContainer.group)

window.scene = scene

let cont = 0
let cameraDir = 1
const maxCameraY = 5000

function render() {
  if(cont >= 1000) {
    camera.position.y += cameraDir
  }
  if(camera.position.y > maxCameraY || camera.position.y < -maxCameraY) {
    cameraDir *= -1
  }
  camera.lookAt(squareContainer.position)
  renderer.render(scene, camera);
  squareContainer.update();
  requestAnimationFrame(render);
  cont++
}

render();
