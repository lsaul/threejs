import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader();

function loadModel(modelToLoad){
    const model = loader.load(modelToLoad, function ( gltf ) {

        scene.add( gltf.scene );
      
      }, undefined, function ( error ) {
      
        console.error( error );
      
      } );

      return model;
}




export  {loadModel};