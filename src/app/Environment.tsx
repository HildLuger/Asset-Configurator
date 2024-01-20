// Environment.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { Environment as DreiEnvironment, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { RootState } from './store';

const MyEnvironment = () => {
  const isDarkMode = useSelector((state: RootState) => state.darkMode.isDarkMode);

  // Create a radial gradient texture manually
  const createRadialGradientTexture = () => {
    const size = 1024;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;

    const context = canvas.getContext('2d');
    if (!context) {
      throw new Error('Failed to get canvas context');
    }

    const gradient = context.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
    gradient.addColorStop(0, '#222230');
    gradient.addColorStop(1, '#373754');

    context.fillStyle = gradient;
    context.fillRect(0, 0, size, size);

    return new THREE.CanvasTexture(canvas);
  };

  const radialTexture = React.useMemo(createRadialGradientTexture, []);

  return (
    <>
      {isDarkMode ? (
        <>
          {/* Simulate a radial gradient background using a sphere */}
          <Sphere args={[500, 60, 40]} scale={[-1, 1, 1]}>
            <meshBasicMaterial attach="material" map={radialTexture} side={THREE.BackSide} />
          </Sphere>
          <directionalLight position={[1, 2, 3]} intensity={3} />
          <directionalLight position={[-1, 2, -3]} intensity={3} />
        </>
      ) : (
        <>
          <DreiEnvironment preset="sunset" background blur={0.9} />
          <directionalLight position={[1, 2, 3]} intensity={0} />
          <directionalLight position={[-1, 2, -3]} intensity={0} />
        </>
      )}
    </>
  );
};

export default MyEnvironment;
