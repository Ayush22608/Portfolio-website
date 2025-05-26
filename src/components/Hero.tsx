import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from './ui/Button';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const phrases = [
    "Web Developer",
    "Web Designer",
    "UI/UX Designer",
    "Musician"
  ];

  useEffect(() => {
    const typingSpeed = 150;
    const deletingSpeed = 50;
    const pauseTime = 2000;

    const handleTyping = () => {
      const currentPhrase = phrases[currentIndex];
      
      if (!isPaused) {
        if (!isDeleting) {
          // Typing phase
          if (text === currentPhrase) {
            setIsPaused(true);
            setTimeout(() => {
              setIsPaused(false);
              setIsDeleting(true);
            }, pauseTime);
            return;
          }

          setText(currentPhrase.slice(0, text.length + 1));
        } else {
          // Deleting phase
          if (text === "") {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % phrases.length);
            return;
          }

          setText(text.slice(0, -1));
        }
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [text, currentIndex, isDeleting, isPaused]);

  return (
    <section className="relative h-screen w-full flex-shrink-0 flex items-center justify-center overflow-hidden px-4 sm:px-6">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url("/images/background img.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.4) contrast(1.1)',
          transform: 'scale(1.1)',
          transformOrigin: 'center',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/70" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 sm:space-y-12"
          >
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center text-black dark:text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            >
              Hi, I'm Ayush
              <span className="block mt-2 text-primary">
                <span className="inline-block">
                  {text}
                  <span className="inline-block ml-0.5 w-[1px] h-8 sm:h-12 bg-primary animate-pulse"></span>
                </span>
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg sm:text-xl md:text-2xl text-black dark:text-white max-w-2xl mx-auto leading-relaxed text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            >
              I build modern web applications with React and TypeScript. 
              Passionate about creating clean, efficient, and user-friendly interfaces.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0"
            >
              <Button 
                size="lg"
                className="w-full sm:w-auto group relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/80 to-primary/90 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-primary/25"
              >
                <span className="relative z-10 flex items-center justify-center">
                  See My Work
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto group relative overflow-hidden rounded-2xl backdrop-blur-sm border border-white/20 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;