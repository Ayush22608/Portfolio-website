import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: number;
  onNavigate: (page: number) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#hero', preview: 'Welcome to my portfolio' },
    { name: 'About', href: '#about', preview: 'Learn more about me' },
    { name: 'Projects', href: '#projects', preview: 'Explore my work' },
    { name: 'Contact', href: '#contact', preview: 'Get in touch' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent origin-left z-50"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: (currentPage + 1) / navItems.length }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
      />

      <nav className="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
        <div className="relative">
          {/* Gradient Border with Shadow */}
          <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-foreground/20 to-transparent shadow-[0_1px_3px_rgba(0,0,0,0.1)]" />
          
          {/* Animated Border Glow with Enhanced Shadow */}
          <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100 shadow-[0_1px_8px_rgba(0,0,0,0.15)]" />
          
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <motion.button
                onClick={() => onNavigate(0)}
                className="text-2xl font-heading font-semibold relative group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Portfolio
                <span className="text-red-500">.</span>
                {/* Underline effect */}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-transparent via-foreground/50 to-transparent group-hover:w-full transition-all duration-300" />
              </motion.button>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => onNavigate(index)}
                    className={`text-foreground/80 hover:text-foreground relative group ${
                      currentPage === index ? 'text-foreground' : ''
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                    {/* Underline effect */}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-transparent via-foreground/50 to-transparent group-hover:w-full transition-all duration-300" />
                    {currentPage === index && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-foreground/50 to-transparent"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                className="md:hidden text-foreground/80 hover:text-foreground"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="md:hidden"
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { height: "auto", opacity: 1 },
            closed: { height: 0, opacity: 0 }
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-6 py-4 bg-background/95 backdrop-blur-md border-t border-foreground/10">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => {
                    onNavigate(index);
                    setIsOpen(false);
                  }}
                  className={`text-foreground/80 hover:text-foreground py-2 text-left ${
                    currentPage === index ? 'text-foreground' : ''
                  }`}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;