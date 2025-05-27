import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, BookOpen, Trophy, Music } from 'lucide-react';

const About = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState('education');

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

  const skills = [
    {
      category: "Programming Languages",
      items: ["Python", "Java", "C/C++", "HTML", "CSS", "JavaScript", "SQL", "NoSQL", "TypeScript"]
    },
    {
      category: "Tools & Technologies",
      items: ["Git/GitHub", "Figma", "Ubuntu", "MySQL", "React.js", "Django", "Node.js", "MongoDB"]
    },
    {
      category: "Areas of Expertise",
      items: ["Fullstack Development", "Database Management", "Machine Learning"]
    }
  ];

  const tabs = [
    { id: 'education', label: 'Education', icon: <BookOpen className="h-5 w-5" /> },
    { id: 'skills', label: 'Skills', icon: <Code className="h-5 w-5" /> },
    { id: 'roles', label: 'Roles', icon: <Trophy className="h-5 w-5" /> },
    { id: 'interests', label: 'Interests', icon: <Music className="h-5 w-5" /> }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'education':
        return (
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-black dark:text-white">IIIT-Delhi</h4>
              <p className="text-foreground/80">B.Tech CSE • 2022 – Present</p>
            </div>
            <div>
              <h4 className="font-medium text-black dark:text-white">St. Thomas College, Dehradun</h4>
              <p className="text-foreground/80">ICSE • 2020 – 2021 (93.8%)</p>
              <p className="text-foreground/80">ICSE • 2018 – 2019 (88.0%)</p>
            </div>
          </div>
        );
      case 'skills':
        return (
          <div className="space-y-4">
            {skills.map((skillGroup, index) => (
              <div key={index}>
                <h4 className="font-medium mb-2 text-black dark:text-white">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 rounded-full bg-primary/10 text-primary text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      case 'roles':
        return (
          <ul className="space-y-3 text-foreground/80">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              Core Member, Audiobytes (Music club of IIIT D) • Dec 2022 – Present
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              Event Organizer in Odyssey (Cultural fest of IIIT D) • Dec 2023 – Jan 2024
            </li>
          </ul>
        );
      case 'interests':
        return (
          <div className="flex flex-wrap gap-2">
            {["Singing", "Playing Guitar", "Chess", "Swimming"].map((hobby, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
              >
                {hobby}
              </span>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="about" className="relative min-h-screen w-full flex-shrink-0 flex items-center justify-center overflow-hidden px-4 sm:px-6 snap-start pt-16 sm:pt-20 pb-8 sm:pb-12">
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
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-8"
          >
            <motion.span 
              variants={itemVariants}
              className="text-sm uppercase tracking-widest text-black/80 dark:text-white/80 mb-3 sm:mb-4 inline-block drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            >
              Professional Profile
            </motion.span>
            <motion.h2 
              variants={itemVariants}
              className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-black dark:text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            >
              About <motion.span 
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
              >Me</motion.span>
            </motion.h2>
          </motion.div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
            <div className="flex justify-center gap-4 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    activeTab === tab.id
                      ? 'bg-primary text-white dark:text-black'
                      : 'text-foreground/80 hover:text-foreground hover:bg-white/5'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="min-h-[200px]"
            >
              {renderContent()}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;