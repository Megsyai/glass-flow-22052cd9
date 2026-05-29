import React from 'react';
import { motion, useInView } from 'framer-motion';

const PhilosophySection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const headingVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.1 } }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };


  return (
    <section ref={ref} className="bg-black py-28 md:py-40 px-6 overflow-hidden max-w-6xl mx-auto">
       <motion.h2
          className="text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] tracking-tight mb-8"
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          Philosophy
      </motion.h2>
      
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
              <motion.h3 
                  className="text-3xl lg:text-4xl text-white/80 mb-4 font-['Instrument Serif', serif] italic"
                  variants={paragraphVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
              >
                  Innovation x Vision
              </motion.h3>
              <motion.p 
                  className="text-white text-base md:text-lg leading-relaxed"
                  variants={paragraphVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: 0.2 }} 
              >
                  We are driven by a relentless pursuit of the new. Our vision is to not just follow trends, but to define them, creating solutions that are both insightful and impactful.
              </motion.p>
          </div>
          <div>
              <motion.h3 
                  className="text-3xl lg:text-4xl text-white/80 mb-4 font-['Instrument Serif', serif] italic"
                  variants={paragraphVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
              >
                  Cultivating Minds
              </motion.h3>
              <motion.p 
                  className="text-white text-base md:text-lg leading-relaxed"
                  variants={paragraphVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: 0.2 }} 
              >
                  We foster an environment where curiosity thrives, empowering our team to explore, experiment, and push the boundaries of what's possible.
              </motion.p>
          </div>
      </div>
    </section>
  );
};

export default PhilosophySection;