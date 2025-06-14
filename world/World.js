import { createCamera } from './components/camera.js';
// import { createCube } from './components/cube';
// import { loadModel } from './components/model.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';

import { createControls } from './systems/controls';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';

import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader();

let camera;
let renderer;
let scene;
let loop;

class World {
  constructor(container, model) {
    let cameraPos = ''
    if (model != 'models/modern_bedroom/scene.gltf'){cameraPos = 'default'}
    camera = createCamera(cameraPos);
    renderer = createRenderer();
    scene = createScene();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);

    const controls = createControls(camera, renderer.domElement);
    
    
    // const cube = createCube();
    // const model = loadModel('models/cyberpunk_store/scene.gltf');
    
    console.log("world start model",  model);
    const { ambientLight, mainLight } = createLights();

    loop.updatables.push(controls);
    scene.add(ambientLight, mainLight);
    loader.load(model, function ( gltf ) {

        scene.add( gltf.scene );
      
      },function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	}, undefined, function ( error ) {
      
        console.error( error );
      
      } );

    const resizer = new Resizer(container, camera, renderer);
  }

  render() {
    // draw a single frame
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
