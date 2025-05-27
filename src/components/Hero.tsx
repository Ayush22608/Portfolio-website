import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const phrases = [
    "Developer.",
    "Designer.",
    "Gamer.",
    "Creator."
  ];

  const typingSpeed = 100;
  const deletingSpeed = 25;
  const pauseTime = 2000;

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!isPaused) {
      if (!isDeleting && text === phrases[currentIndex]) {
        timeout = setTimeout(() => {
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, pauseTime);
        }, pauseTime);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
      } else {
        timeout = setTimeout(() => {
          setText(
            isDeleting
              ? phrases[currentIndex].substring(0, text.length - 1)
              : phrases[currentIndex].substring(0, text.length + 1)
          );
        }, isDeleting ? deletingSpeed : typingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, isPaused, currentIndex, phrases]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/yourusername",
      label: "GitHub"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:ayush22608@iiitd.ac.in",
      label: "Email"
    }
  ];

  return (
    <section id="hero" className="relative min-h-screen w-full flex-shrink-0 flex items-center justify-center overflow-hidden px-4 sm:px-6 snap-start pt-16 sm:pt-20 pb-8 sm:pb-12">
      {/* Animated Background Image */}
      <motion.div 
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
        animate={{
          scale: [1.1, 1.15, 1.1],
          filter: ['brightness(0.4) contrast(1.1)', 'brightness(0.45) contrast(1.15)', 'brightness(0.4) contrast(1.1)']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Animated Gradient Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/70"
        animate={{
          opacity: [0.7, 0.8, 0.7]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            variants={itemVariants}
            className="space-y-8 sm:space-y-12"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center text-black dark:text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            >
              Hi, I'm Ayush
              <motion.span 
                variants={itemVariants}
                className="block mt-2 text-primary"
              >
                <span className="inline-block">
                  {text}
                  <motion.span 
                    className="inline-block ml-0.5 w-[1px] h-8 sm:h-12 bg-primary/80"
                    animate={{
                      opacity: [1, 0, 1],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </span>
              </motion.span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl text-black dark:text-white max-w-2xl mx-auto leading-relaxed text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            >
              B.Tech CSE student at IIIT-Delhi, passionate about full-stack development and machine learning. 
              Have a keen eye for UI/UX design and love creating beautiful, intuitive interfaces.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="#projects"
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/80 to-primary/90 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-primary/25 px-6 py-3 text-white font-semibold inline-flex items-center"
                >
                  <span className="relative z-10 flex items-center">
                    View Projects
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.div>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </a>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="#contact"
                  className="group relative overflow-hidden rounded-2xl backdrop-blur-sm border border-white/20 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-all duration-300 px-6 py-3 text-black dark:text-white font-semibold inline-flex items-center"
                >
                  <span className="relative z-10 flex items-center">
                    Contact Me
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </motion.div>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Social Links */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 sm:gap-4"
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: index * 0.1 }}
          >
            {link.icon}
            <span className="sr-only">{link.label}</span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;