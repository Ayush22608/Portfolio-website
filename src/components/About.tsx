import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Briefcase, GraduationCap } from 'lucide-react';

const skills = [
  'React & TypeScript',
  'Next.js & Node.js',
  'Tailwind CSS & Framer Motion',
  'UI/UX Design',
  'Responsive Web Design',
  'Git & Version Control'
];

const experience = [
  'Frontend Developer at Tech Corp',
  'UI/UX Designer at Design Studio',
  'Freelance Web Developer',
  'Open Source Contributor'
];

const About = () => {
  return (
    <section id="about" className="relative h-screen w-full flex-shrink-0 flex items-center justify-center overflow-hidden px-4 sm:px-6 snap-start">
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
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-4 sm:p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-6 sm:mb-12"
          >
            <span className="text-sm uppercase tracking-widest text-black/80 dark:text-white/80 mb-3 sm:mb-4 inline-block drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              About Me
            </span>
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-black dark:text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            >
              Crafting Digital <span className="text-primary">Experiences</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-sm sm:text-base text-black/90 dark:text-white/90 max-w-2xl mx-auto text-pretty drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            >
              A passionate web developer focused on creating modern, responsive, and user-friendly applications.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                <h3 className="text-base sm:text-lg font-semibold text-black dark:text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">Development</h3>
              </div>
              <p className="text-sm sm:text-base text-black/90 dark:text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                Specializing in React, TypeScript, and modern web technologies to build scalable applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                <h3 className="text-base sm:text-lg font-semibold text-black dark:text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">Experience</h3>
              </div>
              <p className="text-sm sm:text-base text-black/90 dark:text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                Building and maintaining web applications with a focus on performance and user experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/10 hover:border-white/20 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                <h3 className="text-base sm:text-lg font-semibold text-black dark:text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">Learning</h3>
              </div>
              <p className="text-sm sm:text-base text-black/90 dark:text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                Continuously exploring new technologies and best practices in web development.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;