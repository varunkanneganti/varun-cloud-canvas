import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExtrasSection } from "@/components/ExtrasSection";
import { ContactSection } from "@/components/ContactSection";
import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail, Heart, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExtrasSection />
        <ContactSection />
      </main>
      
      {/* Enhanced Footer */}
      <footer className="section-padding py-16 bg-accent/30 border-t border-border/50">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center">
                  <span className="text-xl font-black text-white">VK</span>
                </div>
                <div>
                  <div className="text-xl font-bold text-foreground">Varun Kanneganti</div>
                  <div className="text-sm text-muted-foreground">AWS Cloud Engineer</div>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                Building scalable cloud infrastructure and high-performance backend systems. 
                Passionate about AWS, DevOps, and modern web technologies.
              </p>
              
              <div className="flex items-center gap-4">
                <a 
                  href="https://github.com/varunkanneganti" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass-card hover:scale-110 transition-all duration-300 group"
                >
                  <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/varun-kanneganti-0672422b7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass-card hover:scale-110 transition-all duration-300 group"
                >
                  <Linkedin className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </a>
                <a 
                  href="mailto:reachtovarun4@gmail.com"
                  className="p-3 rounded-full glass-card hover:scale-110 transition-all duration-300 group"
                >
                  <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-foreground">Quick Links</h3>
              <div className="space-y-3">
                {[
                  { name: "About Me", href: "#about" },
                  { name: "Technical Skills", href: "#skills" },
                  { name: "Featured Projects", href: "#projects" },
                  { name: "Resume & Experience", href: "#extras" },
                  { name: "Contact", href: "#contact" }
                ].map((link) => (
                  <button
                    key={link.name}
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-2"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-foreground">Get in Touch</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Email</p>
                  <a 
                    href="mailto:reachtovarun4@gmail.com"
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    reachtovarun4@gmail.com
                  </a>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Location</p>
                  <p className="text-foreground">Hyderabad, India</p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Availability</p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-600 dark:text-green-400 font-semibold">Available for opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border/50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>© 2025 Varun Kanneganti. Built with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>using React, TypeScript & Tailwind CSS</span>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  <span>Open Source</span>
                </div>
                <div className="w-px h-4 bg-border"></div>
                <span>Deployed on AWS</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          <Button
            onClick={scrollToTop}
            className="btn-primary rounded-full w-14 h-14 shadow-2xl hover:shadow-primary/30"
          >
            <ArrowUp className="w-6 h-6" />
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default Index;