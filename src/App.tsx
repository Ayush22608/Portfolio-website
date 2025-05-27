import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { ThemeProvider } from './context/ThemeContext';
import Button from './components/ui/Button';

const App = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
      return savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    return 'light';
  });

  const [currentPage, setCurrentPage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const totalPages = 4; // Hero, About, Projects, Contact

  const backgroundY = useTransform(
    useScroll().scrollYProgress,
    [0, 1],
    ['0%', '100%']
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isMobile) return; // Don't handle wheel events on mobile
      
      e.preventDefault();
      
      if (isScrolling) return; // Prevent multiple scrolls while animation is in progress
      
      if (e.deltaY > 0 && currentPage < totalPages - 1) {
        setIsScrolling(true);
        setCurrentPage(prev => prev + 1);
      } else if (e.deltaY < 0 && currentPage > 0) {
        setIsScrolling(true);
        setCurrentPage(prev => prev - 1);
      }
    };

    const container = scrollContainerRef.current;
    if (container && !isMobile) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [currentPage, isScrolling, isMobile]);

  useEffect(() => {
    if (!isMobile && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: currentPage * window.innerWidth,
        behavior: 'smooth'
      });
      
      // Reset scrolling state after animation completes
      const timer = setTimeout(() => {
        setIsScrolling(false);
      }, 800); // Slightly longer than the scroll animation duration
      
      return () => clearTimeout(timer);
    }
  }, [currentPage, isMobile]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider value={{ theme, setTheme }}>
      <div className={`${isMobile ? 'relative' : 'fixed'} inset-0 bg-background text-foreground transition-colors duration-300`}>
        {/* Animated Background Pattern with Overlay */}
        <motion.div 
          className="background-pattern"
          style={{ y: backgroundY }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="background-overlay"
          animate={{
            opacity: [0.7, 0.8, 0.7]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Theme Toggle Button */}
        <motion.div 
          className="fixed bottom-6 right-6 z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            onClick={toggleTheme}
            variant="ghost"
            size="sm"
            className="p-3 rounded-full bg-primary/10 hover:bg-primary/20"
            aria-label="Toggle theme"
          >
            <motion.div
              initial={false}
              animate={{ rotate: theme === 'light' ? 0 : 180 }}
              transition={{ duration: 0.3 }}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </motion.div>
          </Button>
        </motion.div>

        <div className={`${isMobile ? 'min-h-screen' : 'h-screen'} flex flex-col bg-background`}>
          <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
          <main className="flex-1 bg-background">
            {isMobile ? (
              <div className="flex flex-col bg-background">
                <section id="hero" className="w-full min-h-screen bg-background">
                  <Hero />
                </section>
                <section id="about" className="w-full min-h-screen bg-background">
                  <About />
                </section>
                <section id="projects" className="w-full min-h-screen bg-background">
                  <Projects />
                </section>
                <section id="contact" className="w-full min-h-screen bg-background">
                  <Contact />
                </section>
              </div>
            ) : (
              <div 
                ref={scrollContainerRef}
                className="h-full overflow-x-auto overflow-y-hidden bg-background"
                style={{ 
                  scrollbarWidth: 'none', 
                  msOverflowStyle: 'none',
                  scrollBehavior: 'smooth'
                }}
              >
                <div className="flex h-full bg-background">
                  <section id="hero" className="w-screen flex-shrink-0 bg-background">
                    <Hero />
                  </section>
                  <section id="about" className="w-screen flex-shrink-0 bg-background">
                    <About />
                  </section>
                  <section id="projects" className="w-screen flex-shrink-0 bg-background">
                    <Projects />
                  </section>
                  <section id="contact" className="w-screen flex-shrink-0 bg-background">
                    <Contact />
                  </section>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;