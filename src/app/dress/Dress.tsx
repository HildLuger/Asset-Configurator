// Dress.tsx
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Dress = () => {
  const { scene } = useGLTF('/dress.glb');
  const rotationZ = Math.PI; // Rotate 180 degrees in radians

  return (
    <primitive 
      object={scene} 
      scale={[3,3,3]}
      position={[0, -2.5, 0]} 
      rotation={[0, rotationZ, 0]} 
    />
  );
};

useGLTF.preload('/dress.glb'); // Preload the model for better performance

export default Dress;
