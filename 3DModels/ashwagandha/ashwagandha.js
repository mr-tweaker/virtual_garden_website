import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.outputColorSpace = THREE.SRGBColorSpace;

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xf5f8f9, 1);
renderer.setPixelRatio(window.devicePixelRatio);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.minDistance = 1;
controls.maxDistance = 25;
controls.minPolarAngle = 0;
controls.maxPolarAngle = Math.PI / 2;
controls.autoRotate = true;
controls.update();

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const spotLight = new THREE.SpotLight(0xffffff, 100, 50, 0.22, 1);
spotLight.position.set(2, 10, 0);
spotLight.castShadow = true;
spotLight.shadow.bias = -0.0001;
scene.add(spotLight);

function fitCameraToObject(camera, object, offset, controls) {
  const boundingBox = new THREE.Box3().setFromObject(object);
  const center = boundingBox.getCenter(new THREE.Vector3());
  const size = boundingBox.getSize(new THREE.Vector3());

  const maxDim = Math.max(size.x, size.y, size.z);
  const fov = camera.fov * (Math.PI / 180);
  let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2)) * offset;

  cameraZ = Math.max(cameraZ, 1); // Ensure a minimum distance

  camera.position.set(center.x, center.y, center.z + cameraZ);

  const minZ = boundingBox.min.z;
  const cameraToFarEdge = (minZ < 0) ? -minZ + cameraZ : cameraZ - minZ;

  camera.far = cameraToFarEdge * 3;
  camera.updateProjectionMatrix();

  if (controls) {
    controls.target.copy(center);
    controls.maxDistance = cameraToFarEdge * 2;
    controls.saveState();
  }
}

const loader = new GLTFLoader();
loader.load('https://mr-tweaker.github.io/virtual_garden_website/3DModels/ashwagandha/ashwagandha.glb', (gltf) => {
  console.log('Model loaded successfully');
  const model = gltf.scene;
  scene.add(model);
  
  // Fit camera to the model
  fitCameraToObject(camera, model, 1.25, controls);
  
  // Optional: adjust model position if needed
  // model.position.y = -1; // Adjust this value to move the model up or down
}, (xhr) => {
  console.log(`Loading: ${(xhr.loaded / xhr.total * 100).toFixed(2)}%`);
}, (error) => {
  console.error('Error loading model:', error);
});

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();