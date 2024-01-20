'use client';

import React, { useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';
import MyEnvironment from '../Environment';

const Ring: React.FC = () => {
  const { scene } = useGLTF('./car0.glb');
  const controlsRef = useRef(null);

     // Convert 180 degrees to radians
     const rotationY = Math.PI; // 180 degrees

  return (
    <main>
      <Canvas style={{ width: '100vw', height: '100vh' }} shadows>
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 5, 5]} castShadow />
        <primitive object={scene} position={[0, -1, 0]} rotation={[0, rotationY, 0]} />
        <OrbitControls
          ref={controlsRef}
          enableDamping
          dampingFactor={0.03}
          autoRotate
          autoRotateSpeed={2}
          minDistance={3}
          maxDistance={10}
        />
         <MyEnvironment />
      </Canvas>
    </main>
  );
};

export default Ring;
