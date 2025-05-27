import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "ayush22608@iiitd.ac.in",
      href: "mailto:ayush22608@iiitd.ac.in"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 8445180166",
      href: "tel:+918445180166"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "IIIT-Delhi, New Delhi",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      href: "https://github.com/yourusername"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourusername"
    }
  ];

  return (
    <section id="contact" className="relative min-h-screen w-full flex-shrink-0 flex items-center justify-center overflow-hidden px-4 sm:px-6 snap-start pt-16 sm:pt-20 pb-8 sm:pb-12">
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
              Let's Connect
            </motion.span>
            <motion.h2 
              variants={itemVariants}
              className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-black dark:text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            >
              Get in <motion.span 
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
              >Touch</motion.span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              variants={itemVariants}
              className="space-y-6"
            >
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-6 text-black dark:text-white">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 text-foreground/80 hover:text-foreground transition-colors"
                    >
                      {info.icon}
                      <div>
                        <p className="text-sm text-foreground/60">{info.label}</p>
                        <p>{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-6 text-black dark:text-white">Connect with Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-colors"
                    >
                      {link.icon}
                      <span className="sr-only">{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10"
            >
              <h3 className="text-xl font-semibold mb-6 text-black dark:text-white">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground/80">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground/80">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-colors"
                    placeholder="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground/80">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-colors resize-none"
                    placeholder="Your message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;