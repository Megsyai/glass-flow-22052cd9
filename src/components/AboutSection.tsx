import React from 'react';
import { motion, useInView } from 'framer-motion';

const AboutSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1 } }
  };

  return (
    <section
      ref={ref}
      className="bg-black pt-32 md:pt-44 pb-10 md:pb-14 px-6 overflow-hidden relative"
      style={{
        background: 'radial-gradient(ellipse at top, rgba(255, 255, 255, 0.03) 0%, transparent 70%)',
      }}
    >
      <motion.p 
        className="text-white/40 text-sm tracking-widest uppercase mb-4"
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        About Us
      </motion.p>
      <motion.h2
        className="text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight"
        variants={headingVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        Pioneering then ideas <em className="italic font-['Instrument Serif', serif] not-italic text-white/60">for</em>
        <br className="hidden md:block" />
        <em className="italic font-['Instrument Serif', serif] text-white/60 mr-2">minds that then create, build, and inspire.</em>
      </motion.h2>
    </section>
  );
};

export default AboutSection;