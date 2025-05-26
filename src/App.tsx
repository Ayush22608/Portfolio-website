import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import Button from './components/ui/Button';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
      return savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    return 'light';
  });

  const [currentPage, setCurrentPage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const totalPages = 4; // Hero, About, Projects, Contact

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
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
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [currentPage, isScrolling]);

  useEffect(() => {
    if (scrollContainerRef.current) {
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
  }, [currentPage]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider value={{ theme, setTheme }}>
      <div className="fixed inset-0 bg-background text-foreground transition-colors duration-300">
        {/* Background Pattern with Overlay */}
        <div className="background-pattern" />
        <div className="background-overlay" />

        {/* Theme Toggle Button */}
        <div className="fixed bottom-6 right-6 z-50">
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
        </div>

        <div className="h-screen flex flex-col">
          <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
          <main className="flex-1 relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="h-full"
            >
              <div 
                ref={scrollContainerRef}
                className="h-full overflow-x-auto overflow-y-hidden"
                style={{ 
                  scrollbarWidth: 'none', 
                  msOverflowStyle: 'none',
                  scrollBehavior: 'smooth'
                }}
              >
                <div className="flex h-full">
                  <div className="w-screen flex-shrink-0">
                    <Hero />
                  </div>
                  <div className="w-screen flex-shrink-0">
                    <About />
                  </div>
                  <div className="w-screen flex-shrink-0">
                    <Projects />
                  </div>
                  <div className="w-screen flex-shrink-0">
                    <Contact />
                  </div>
                </div>
              </div>
            </motion.div>
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;