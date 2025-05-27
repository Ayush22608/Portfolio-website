import React from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

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

  const cardVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const projects = [
    {
      title: "Movie Recommendation System",
      description: "A content-based recommendation system that uses movie metadata to generate personalized suggestions. Features an intuitive Streamlit interface with poster previews.",
      technologies: ["Python", "Streamlit", "TMDB API", "Cosine Similarity", "Pandas", "Scikit-learn"],
      github: "https://github.com/yourusername/movie-recommendation",
      demo: "#"
    },
    {
      title: "Chatbot for E-Restaurant",
      description: "An intelligent chatbot system for automating customer interactions and streamlining restaurant operations. Features natural language processing for queries and reservations.",
      technologies: ["FastAPI", "Python", "MySQL", "Dialogflow", "HTML/CSS", "API Integration"],
      github: "https://github.com/yourusername/restaurant-chatbot",
      demo: "#"
    },
    {
      title: "SkyBound Bird Game",
      description: "A web-based version of the classic Flappy Bird game with smooth controls and engaging gameplay mechanics.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/yourusername/skybound-bird",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="relative min-h-screen w-full flex-shrink-0 flex items-center justify-center overflow-hidden px-2 sm:px-6 snap-start pt-12 sm:pt-20 pb-6 sm:pb-12">
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
          className="max-w-4xl mx-auto px-2 sm:px-4"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-4 sm:mb-6"
          >
            <motion.span 
              variants={itemVariants}
              className="text-xs sm:text-sm uppercase tracking-widest text-black/80 dark:text-white/80 mb-1 sm:mb-3 inline-block drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            >
              My Work
            </motion.span>
            <motion.h2 
              variants={itemVariants}
              className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 text-black dark:text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            >
              Featured <motion.span 
                variants={itemVariants}
                className="text-primary"
                animate={{
                  textShadow: [
                    "0 0 8px rgba(var(--primary), 0.3)",
                    "0 0 16px rgba(var(--primary), 0.5)",
                    "0 0 8px rgba(var(--primary), 0.3)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >Projects</motion.span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative bg-white/5 backdrop-blur-md rounded-xl p-3 sm:p-4 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    scale: hoveredIndex === index ? [1, 1.02, 1] : 1,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-black dark:text-white relative z-10">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-foreground/80 mb-2 sm:mb-3 line-clamp-2 relative z-10">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-2 sm:mb-3 relative z-10">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-1.5 sm:px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] sm:text-xs"
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(var(--primary), 0.2)"
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex gap-2 sm:gap-3 relative z-10">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 sm:gap-1.5 text-foreground/80 hover:text-foreground transition-colors text-xs sm:text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 sm:gap-1.5 text-foreground/80 hover:text-foreground transition-colors text-xs sm:text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    <span>Demo</span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;