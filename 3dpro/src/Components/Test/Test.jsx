import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Test = () => {
  const gltf = useLoader(GLTFLoader, "./desktop_pc/scene.gltf");
  return (
      <Canvas
      camera={{position:[30, 20, 20], fov:30}}>
        <OrbitControls enableZoom={false}/>
        <mesh>
          <ambientLight />
          <primitive object={gltf.scene} scale={1} />
        </mesh>
      </Canvas>
  );
};

export default Test;
