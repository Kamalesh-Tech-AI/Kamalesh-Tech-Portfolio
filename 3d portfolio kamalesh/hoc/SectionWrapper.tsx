
import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';

interface SectionWrapperProps {
  children: React.ReactNode;
  idName: string;
}

// This has been refactored from an HOC to a standard React component.
// This approach is more robust and avoids module initialization race conditions.
export const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, idName }) => {
    return (
      <motion.section
        variants={staggerContainer(0.25, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-7xl mx-auto relative z-0 px-4 sm:px-6 lg:px-8 py-10 sm:py-16"
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        {children}
      </motion.section>
    );
  };