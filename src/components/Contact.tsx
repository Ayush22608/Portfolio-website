import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import Button from './ui/Button';

const Contact = () => {
  return (
    <section id="contact" className="relative h-screen w-full flex-shrink-0 flex items-center justify-center overflow-hidden px-4 sm:px-6">
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
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 sm:p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-12"
          >
            <span className="text-sm uppercase tracking-widest text-black/80 dark:text-white/80 mb-4 inline-block drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              Get in Touch
            </span>
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            >
              Let's <span className="text-primary">Connect</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-black/90 dark:text-white/90 max-w-2xl mx-auto text-pretty drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            >
              Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <h3 className="text-sm uppercase tracking-wider text-black/80 dark:text-white/80 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">Email</h3>
                </div>
                <a href="mailto:ayush@example.com" className="text-black dark:text-white hover:text-primary transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                  ayush@example.com
                </a>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="text-sm uppercase tracking-wider text-black/80 dark:text-white/80 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">Location</h3>
                </div>
                <p className="text-black dark:text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">India</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-white/20 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <h3 className="text-sm uppercase tracking-wider text-black/80 dark:text-white/80 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">Phone</h3>
                </div>
                <a href="tel:+1234567890" className="text-black dark:text-white hover:text-primary transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                  +1 (234) 567-890
                </a>
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-black dark:text-white placeholder-black/50 dark:placeholder-white/50 focus:border-white/20 outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-black dark:text-white placeholder-black/50 dark:placeholder-white/50 focus:border-white/20 outline-none transition-colors"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-black dark:text-white placeholder-black/50 dark:placeholder-white/50 focus:border-white/20 outline-none transition-colors resize-none"
                />
              </div>
              <Button
                size="lg"
                className="w-full group relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary/80 to-primary/90 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-primary/25"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Send Message
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </Button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;