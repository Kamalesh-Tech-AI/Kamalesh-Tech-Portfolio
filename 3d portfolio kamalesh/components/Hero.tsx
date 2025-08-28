/// <reference types="@react-three/fiber" />

import React from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import AiAtom from './canvas/AiAtom';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row items-start gap-5 z-10">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-purple-500" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
            Hi, I'm <span className="text-purple-500">Kamalesh S</span>
          </h1>
          <p className="text-gray-300 font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2">
            A B.Tech student passionate about <br className="sm:block hidden" />
            AI, Data, and Innovation.
          </p>
        </div>
      </div>
      
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 5, 15], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <pointLight position={[0, 0, 0]} intensity={2} color="#818cf8" />
          <React.Suspense fallback={null}>
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            <AiAtom />
          </React.Suspense>
        </Canvas>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-gray-400 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-gray-400 mb-1"
            />
          </div>
        </a>
      </div>
      <style>{`
        .violet-gradient {
          background: linear-gradient(180deg, #8b5cf6, #3730A3, transparent);
        }
      `}</style>
    </section>
  );
};

export default Hero;