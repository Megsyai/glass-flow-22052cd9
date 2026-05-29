import React from 'react';
import { motion, useInView } from 'framer-motion';

const FeaturedVideoSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 } }
  };

  return (
    <section ref={ref} className="bg-black pt-6 md:pt-10 pb-20 md:pb-32 px-6 overflow-hidden max-w-6xl mx-auto">
      <motion.div
        className="rounded-3xl overflow-hidden aspect-video relative"
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col md:flex-row items-center justify-between">
          <div className="liquid-glass rounded-2xl p-6 md:p-8 max-w-md mb-6 md:mb-0">
            <p className="text-white/50 text-xs tracking-widest uppercase mb-3">Our Approach</p>
            <p className="text-white text-sm md:text-base leading-relaxed">
              We believe in the power of curiosity-driven exploration. Every project starts with a question, and every answer opens a new door to innovation.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium whitespace-nowrap"
          >
            Explore more
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedVideoSection;