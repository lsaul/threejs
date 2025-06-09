import { PerspectiveCamera } from 'three';

function createCamera(cameraPos) {
  const camera = new PerspectiveCamera(35, 1, 0.1, 100);

  if(cameraPos=='default')
    camera.position.set(5, 5, 6);
  else{
    camera.position.set(10, 2, -20);
  }

  return camera;
}

export { createCamera };
