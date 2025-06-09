import { World } from './world/World.js';

function main(loadModel) {
  // Get a reference to the container element
  const container = document.querySelector('#scene-container');
  const model = loadModel;
  // create a new world
  const world = new World(container, model);

  // start the animation loop
  world.start();
}

main(loadModel);
