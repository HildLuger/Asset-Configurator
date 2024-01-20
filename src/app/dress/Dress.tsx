// Dress.tsx
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const Dress = () => {
  const { scene } = useGLTF('/dress.glb');
  const rotationY = Math.PI; // Rotate 180 degrees in radians

  return (
    <primitive 
      object={scene} 
      position={[0, 0, 0]} 
      rotation={[0, rotationY, 0]} 
    />
  );
};

useGLTF.preload('/dress.glb'); // Preload the model for better performance

export default Dress;
