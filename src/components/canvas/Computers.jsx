import React, { Suspense, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from 'three';

import CanvasLoader from "../Loader";

const Gamer = () => {
  const gamer = useGLTF("./gamer/scene.gltf");

  return (
    <primitive object={gamer.scene} scale={0.6} position-y={-1} rotation-y={0} />
  );
};

const Lights = () => {
  const { scene } = useThree();

  useEffect(() => {
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 10, 0);

    scene.add(ambientLight);
    scene.add(directionalLight);

    // Clean up on unmount
    return () => {
      scene.remove(ambientLight);
      scene.remove(directionalLight);
    };
  }, [scene]);

  return null;
};

const ComputersCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Lights />
        <Gamer />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;