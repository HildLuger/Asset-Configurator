// Dress.tsx
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Ring = () => {
  const { scene } = useGLTF('/ring.glb');
  const rotationY = Math.PI; // Rotate 180 degrees in radians

  return (
    <primitive 
      object={scene} 
      scale={[0.3,0.3,0.3]}
      position={[0, 0, 0]} 
      rotation={[45, rotationY, 0]} 
    />
  );
};

useGLTF.preload('/ring.glb'); // Preload the model for better performance

export default Ring;
