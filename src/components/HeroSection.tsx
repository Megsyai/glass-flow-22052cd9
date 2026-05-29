import React, { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Globe, Instagram, Twitter } from 'lucide-react';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const [isEnded, setIsEnded] = (window as any).React.useState(false);

  const handleCanPlay = () => {
    videoRef.current?.play();
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    const remainingTime = video.duration - video.currentTime;

    if (remainingTime <= 0.55) {
      video.style.opacity = '0';
      setTimeout(() => {
        video.currentTime = 0;
        video.play();
        video.style.opacity = '1';
      }, 500); 
    }
  };

  const handleVideoEnded = () => {
    setIsEnded(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
        videoRef.current.style.opacity = '1';
      }
      setIsEnded(false);
    }, 100);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {

      video.style.opacity = '0';
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('timeupdate', handleTimeUpdate);
      video.addEventListener('ended', handleVideoEnded);

      
        video.play().catch(error => {
          console.log("Autoplay failed:", error);
          
        });
      

      return () => {
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('timeupdate', handleTimeUpdate);
        video.removeEventListener('ended', handleVideoEnded);
      };
    }
  }, [isEnded]); 

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInputRef.current) {
      console.log('Email submitted:', emailInputRef.current.value);
      
    }
  };

  const socialLinks = [
    { icon: Instagram, url: '#' },
    { icon: Twitter, url: '#' },
    { icon: Globe, url: '#' },
  ];

  return (
    <section className="min-h-screen relative flex flex-col overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-bottom"
        onCanPlay={handleCanPlay}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleVideoEnded}
        style={{ opacity: 0 }} 
      >
        <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <nav className="relative z-20 px-6 py-6">
        <div className="liquid-glass max-w-5xl mx-auto backdrop-blur-lg rounded-full px-6 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <Globe className="w-6 h-6 text-white mr-2" />
            <span className="font-semibold text-lg text-white">Asme</span>
          </div>
          <div className="hidden md:flex items-center gap-8 ml-8">
            <a href="#features" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Features</a>
            <a href="#pricing" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Pricing</a>
            <a href="#about" className="text-white/80 hover:text-white text-sm font-medium transition-colors">About</a>
          </div>
          <div className="flex items-center">
            <button className="text-white text-sm font-medium mr-6">Sign Up</button>
            <button className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium">Login</button>
          </div>
        </div>
      </nav>
      
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[20%] z-10">
        <h1 className="text-7xl md:text-8xl lg:text-9xl white tracking-tight whitespace-nowrap font-['Instrument Serif', serif] mb-8">
          Know it then <em className="italic">all</em>.
        </h1>

        <form onSubmit={handleSubmit} className="liquid-glass max-w-xl w-full pl-6 pr-2 py-2 flex items-center gap-3 mb-6">
          <input
            ref={emailInputRef}
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-transparent border-none focus:outline-none text-white placeholder:text-white/40 placeholder:font-['Instrument Serif', serif]"
            required
          />
          <button type="submit" className="bg-white rounded-full p-3 text-black shadow-lg">
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <p className="text-white text-sm leading-relaxed px-4 mb-8 max-w-2xl">
          Stay updated with the latest news and insights. Subscribe to our newsletter today and never miss out on exciting updates.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors duration-300"
        >
          Manifesto
        </motion.button>
      </div>

      <footer className="relative z-10 flex justify-center gap-4 pb-12">
        {socialLinks.map((social, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300"
          >
            <social.icon className="w-5 h-5" />
          </motion.button>
        ))}
      </footer>
    </section>
  );
};

export default HeroSection;