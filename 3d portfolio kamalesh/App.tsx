

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import StarsCanvas from './components/canvas/Stars';
import { SectionWrapper } from './hoc/SectionWrapper';

// Import the plain components
import AboutComponent from './components/About';
import ExperienceComponent from './components/Experience';
import ProjectsComponent from './components/Projects';
import ContactComponent from './components/Contact';

/*
NOTE: This application uses several libraries for 3D rendering and animations.
In a real-world scenario, you would install them via npm/yarn:
- npm install @react-three/fiber @react-three/drei framer-motion react-vertical-timeline-component react-tilt
- npm install -D @types/react-vertical-timeline-component
*/

const App: React.FC = () => {
  return (
    <div className="relative z-0 bg-gray-900 text-white font-[Poppins]">
      <div className="bg-cover bg-no-repeat bg-center">
        <Header />
        <Hero />
      </div>
      <SectionWrapper idName='about'>
        <AboutComponent />
      </SectionWrapper>
      <SectionWrapper idName='work'>
        <ExperienceComponent />
      </SectionWrapper>
      <SectionWrapper idName='projects'>
        <ProjectsComponent />
      </SectionWrapper>
      <div className="relative z-0">
        <SectionWrapper idName='contact'>
          <ContactComponent />
        </SectionWrapper>
        <StarsCanvas />
      </div>
    </div>
  );
}

export default App;