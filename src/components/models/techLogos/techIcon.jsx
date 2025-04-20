import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

// Step for setup 3d model
// 1) import a model (.glb) in GLTF format
// 2) Add Basic lighting, rotation and scale
// 3) Wrapes the model in floating animation
// 4) Tweaks the original meshes if needed
// 5) Disabled zoom adjust camera angles with OrbitControls

const TechIcon = ({ model }) => {
  const scene = useGLTF(model.modelPath);

  useEffect(() => {
    if (model.name === "Interactive Developer") {
      scene.scene.traverse((child) => {
        if (child.isMesh && child.name === "Object_5") {
          child.material = new THREE.MeshStandardMaterial({
            color: "white",
          });
        }
      });
    }
  }, []);

  return (
    <Canvas>
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Environment preset="city" />
      <Float speed={5.5} rotationIntensity={1} floatIntensity={0.9}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={scene.scene} />
        </group>
      </Float>
    </Canvas>
  );
};

export default TechIcon;
