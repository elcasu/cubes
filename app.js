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

window.addEventListener('click', function(e) {
  e.preventDefault();
  squareContainer.expand(e.clientX, e.clientY)
})

function render() {
  renderer.render(scene, camera);
  squareContainer.update();
  requestAnimationFrame(render);
}

render();
