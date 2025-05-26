import React from 'react';
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-20">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="mb-8 md:mb-0">
              <h2 className="text-xl font-heading font-medium mb-2">Jane Doe</h2>
              <p className="text-sm uppercase tracking-wider text-muted-foreground">UI/UX Designer</p>
            </div>

            <div className="flex space-x-6">
              <a 
                href="#" 
                className="p-2 rounded-full text-muted-foreground hover:text-primary transition-colors hover-lift"
                aria-label="Github"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full text-muted-foreground hover:text-primary transition-colors hover-lift"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full text-muted-foreground hover:text-primary transition-colors hover-lift"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full text-muted-foreground hover:text-primary transition-colors hover-lift"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {currentYear} Jane Doe. All rights reserved.
            </p>
            
            <div className="flex space-x-8">
              <a href="#" className="text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;