import React, { useRef } from "react";
import { useLoader, useFrame, extend, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls as ThreeOrbitControls } from "three/examples/jsm/controls/OrbitControls";

// Extend OrbitControls
extend({ OrbitControls: ThreeOrbitControls });

const BirdModel = React.forwardRef((props, ref) => {
  const gltf = useLoader(GLTFLoader, "/bird.glb");

  // Make sure all meshes cast and receive shadows
  gltf.scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  // Floating animation (no rotation)
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return <primitive ref={ref} object={gltf.scene} scale={15} />;
});

const Controls = () => {
  const controlsRef = useRef();
  const { camera, gl } = useThree();

  useFrame(() => {
    controlsRef.current?.update();
  });

  return (
    <orbitControls
      ref={controlsRef}
      args={[camera, gl.domElement]}
      enableZoom={false}
      enablePan={false}
    />
  );
};

const Bird3D = () => {
  const spotRef = useRef();
  const birdRef = useRef();

  // Keep spotlight target synced to bird
  useFrame(() => {
    if (spotRef.current && birdRef.current) {
      spotRef.current.target.position.copy(birdRef.current.position);
      spotRef.current.target.updateMatrixWorld();
    }
  });

  return (
    <>
      {/* Soft ambient light */}
      <ambientLight intensity={0.8} />

      {/* Main spotlight following bird */}
      <spotLight
        ref={spotRef}
        position={[10, 15, 10]}
        angle={0.8}
        penumbra={0.5}
        intensity={3}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* Fill light to brighten shadows */}
      <directionalLight
        position={[-10, 10, 5]}
        intensity={1}
        castShadow={false}
      />

      {/* Bird Model */}
      <BirdModel ref={birdRef} />

      {/* Camera Controls */}
      <Controls />
    </>
  );
};

export default Bird3D;
