/// <reference types="@react-three/fiber" />

import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { inSphere } from "maath/random/dist/maath-random.esm";

// Pre-calculate the points outside the component.
// This ensures the expensive calculation runs only once when the module is loaded, not on every render.
const spherePositions = inSphere(new Float32Array(5000), { radius: 1.2 });

const Stars = (props: any) => {
  // FIX: Provided null as an initial value to useRef to fix the "Expected 1 arguments, but got 0" error.
  const ref = useRef<any>(null);

  useFrame((state, delta) => {
    if(ref.current) {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={spherePositions} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas: React.FC = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;