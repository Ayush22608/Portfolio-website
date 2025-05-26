import React from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork } from 'lucide-react';
import Button from './ui/Button';

const projects = [
  {
    title: 'Project One',
    description: 'A modern web application built with React and TypeScript.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/username/project-one',
    demo: 'https://project-one.demo',
    stats: {
      stars: 120,
      forks: 45
    }
  },
  {
    title: 'Project Two',
    description: 'An e-commerce platform with real-time inventory management.',
    tags: ['Next.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com/username/project-two',
    demo: 'https://project-two.demo',
    stats: {
      stars: 85,
      forks: 32
    }
  },
  {
    title: 'Project Three',
    description: 'A social media dashboard with analytics and reporting.',
    tags: ['Vue.js', 'Firebase', 'Chart.js'],
    github: 'https://github.com/username/project-three',
    demo: 'https://project-three.demo',
    stats: {
      stars: 65,
      forks: 28
    }
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative h-screen w-full flex-shrink-0 flex items-center justify-center overflow-hidden px-4 sm:px-6 snap-start">
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
        <div className="max-w-6xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-4 sm:p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-6 sm:mb-12"
          >
            <span className="text-sm uppercase tracking-widest text-black/80 dark:text-white/80 mb-3 sm:mb-4 inline-block drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              My Work
            </span>
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-black dark:text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            >
              Featured <span className="text-primary">Projects</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-sm sm:text-base text-black/90 dark:text-white/90 max-w-2xl mx-auto text-pretty drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            >
              A collection of my recent work showcasing my skills and experience in web development.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-colors overflow-hidden group"
              >
                <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-black/90 dark:text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full bg-white/10 text-black dark:text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 text-xs sm:text-sm text-black/80 dark:text-white/80 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                    <span className="flex items-center gap-1">
                      <Star className="h-3 w-3 sm:h-4 sm:w-4" />
                      {project.stats.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="h-3 w-3 sm:h-4 sm:w-4" />
                      {project.stats.forks}
                    </span>
                  </div>
                  <div className="flex gap-3 sm:gap-4 pt-3 sm:pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 bg-white/5 border-white/10 text-black dark:text-white hover:bg-white/10 hover:border-white/20"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      View Code
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-primary/80 text-white hover:bg-primary/90"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      Live Demo
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;