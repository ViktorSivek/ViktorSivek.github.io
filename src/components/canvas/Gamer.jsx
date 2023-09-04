import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { CuboidCollider, Physics, RigidBody } from "@react-three/rapier";
import { Suspense } from "react";
import CanvasLoader from "../Loader"; // adjust import path based on your project structure
import React, { useState, useRef, useEffect } from 'react'; // Importing useState, useRef, and useEffect

const GameContainer = () => {
  const gameRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const rect = gameRef.current.getBoundingClientRect();
      const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
      setIsInView(isInView);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={gameRef} style={{ width: '100%', height: '100vh' }}>
        {isInView && <GamerCanvas />}
    </div>
  );
};

const GamerCanvas = () => (
  <Canvas camera={{ position: [0, 5, 12], fov: 50 }}>
    <ambientLight intensity={0.5} />
    <pointLight position={[10, 10, 5]} />
    <Physics gravity={[0, -30, 0]}>
      <Suspense fallback={<CanvasLoader />}>
        <Ball />
        <Paddle />
        <Enemy color="orange" position={[2.75, 1.5, 0]} />
        <Enemy color="hotpink" position={[-2.75, 3.5, 0]} />
      </Suspense>
    </Physics>
  </Canvas>
);

function Ball() {
  const ref = useRef();
  const { viewport } = useThree();
  const onCollisionEnter = () => {
    ref.current.setTranslation({ x: 0, y: 0, z: 0 });
    ref.current.setLinvel({ x: 0, y: 10, z: 0 });
  };
  return (
    <>
      <RigidBody ref={ref} colliders="ball" mass={1}>
        <mesh>
          <sphereGeometry args={[0.75, 32, 32]} />
          <meshStandardMaterial />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" colliders={false} position={[0, -viewport.height, 0]} restitution={2.1} onCollisionEnter={onCollisionEnter}>
        <CuboidCollider args={[30, 2, 30]} />
      </RigidBody>
    </>
  );
}

const Enemy = ({ position, color }) => (
  <RigidBody colliders="cuboid" type="fixed" position={position} restitution={2.1}>
    <mesh>
      <boxGeometry args={[2.5, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  </RigidBody>
);

function Paddle({ euler = new THREE.Euler(), quaternion = new THREE.Quaternion() }) {
  const ref = useRef();
  useFrame(({ pointer, viewport }) => {
    ref.current.setTranslation({ x: (pointer.x * viewport.width) / 2, y: -viewport.height / 3, z: 0 });
    ref.current.setRotation(quaternion.setFromEuler(euler.set(0, 0, (pointer.x * Math.PI) / 10)));
  });
  return (
    <RigidBody ref={ref} colliders="cuboid" type="fixed" restitution={2.1}>
      <mesh>
        <boxGeometry args={[4, 1, 1]} />
        <meshStandardMaterial color="lightblue" />
      </mesh>
    </RigidBody>
  );
}

export default GameContainer;