import React from "react";
import * as THREE from "three";

const HeroLights = () => {
  return (
    <>
      <spotLight
        intensity={150}
        position={[1, 6, 6]}
        angle={0.17}
        penumbra={0.3}
        color="white"
      />
      <spotLight
        intensity={100}
        position={[6, 4, 6]}
        angle={0.3}
        penumbra={0.5}
        color="#4cc9f0"
      />
      <spotLight
        intensity={60}
        position={[-3, 5, 5]}
        angle={0.4}
        penumbra={0.5}
        color="#9d4edd"
      />
      <primitive
        object={new THREE.RectAreaLight("#A259FF", 8, 3, 2)}
        position={[1, 3, 2]}
        intensity={25}
        rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      />
      <pointLight position={[0, 1, 0]} intensity={10} color="#7209b7" />
      <pointLight position={[1, 2, -2]} intensity={10} color="#0d00a4" />
    </>
  );
};

export default HeroLights;
