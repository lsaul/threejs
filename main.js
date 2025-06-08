import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import GUI from 'lil-gui';
 
const gui = new GUI();
gui.add( document, 'title' );




const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const  camera = new THREE.PerspectiveCamera(70, 2, 1, 1000);
camera.position.z = 400;



const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );
// const controls = new OrbitControls(camera, canvas);
// controls.target.set(0, 5, 0);
// controls.update();

// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// const light1 = new THREE.PointLight(0xff80C0, 100, 0);
// light1.position.set(200, 100, 300);
// scene.add(light1);

const color = 0xFFFFFF;
const intensity = 10;
const light = new THREE.AmbientLight(color, intensity);
scene.add(light);




const loader = new GLTFLoader();

loader.load( 'models/cyberpunk_store/scene.gltf', function ( gltf ) {

  scene.add( gltf.scene );

}, undefined, function ( error ) {

  console.error( error );

} );


camera.position.z = 5;

function animate() {
    renderer.render( scene, camera );
  }
  renderer.setAnimationLoop( animate );