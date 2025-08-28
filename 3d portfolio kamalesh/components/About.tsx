



import React, { useState } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

interface ServiceCardProps {
  index: number;
  title: string;
  icon: string;
  details: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, icon, details }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <Tilt max={10} scale={1} speed={450} className="xs:w-[250px] w-full" style={{ perspective: '1000px' }}>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full h-[280px] rounded-[20px] shadow-lg relative cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front */}
        <div
          className="absolute w-full h-full bg-gradient-to-br from-purple-900 to-gray-800 p-[1px] rounded-[20px]"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="bg-gray-900 rounded-[20px] w-full h-full flex justify-evenly items-center flex-col p-4">
            <img src={icon} alt={title} className="w-16 h-16 object-contain rounded-full" />
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute w-full h-full bg-gradient-to-br from-purple-900 to-gray-800 p-[1px] rounded-[20px]"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="bg-gray-900 rounded-[20px] w-full h-full flex justify-center items-center flex-col p-4">
              <h4 className="text-white text-[18px] font-bold text-center mb-3">Key Skills</h4>
              <ul className="list-disc list-inside text-left">
                  {details.map((detail, i) => (
                      <li key={i} className="text-gray-300 text-[14px]">{detail}</li>
                  ))}
              </ul>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};


const About: React.FC = () => {
  return (
    <>
      <motion.div variants={textVariant(0.1)}>
        <p className="sm:text-[18px] text-[14px] text-gray-400 uppercase tracking-wider">Introduction</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("up", "tween", 0.1, 1)}
        className="mt-4 text-gray-300 text-[17px] max-w-3xl leading-[30px]"
      >
        I am a motivated 3rd-year B.Tech student in Artificial Intelligence and Data Science, looking for an opportunity to gain real-world experience. I am interested in Data Structures, AI, Data Analysis and Solving Problems and I want to contribute to useful and innovative projects while continuing my studies.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default About;