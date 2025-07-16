import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Resume", href: "#extras" },
  { name: "Contact", href: "#contact" }
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "nav-blur shadow-2xl" 
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-20 px-6">
            {/* Enhanced Logo */}
            <motion.div 
              className="flex items-center cursor-pointer group"
              onClick={() => scrollToSection('#hero')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <div className="text-3xl font-black bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  VK
                </div>
                <div className="absolute -inset-3 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>
              </div>
              <div className="ml-3 hidden sm:block">
                <div className="text-sm font-bold text-foreground">Varun Kanneganti</div>
                <div className="text-xs text-muted-foreground">AWS Cloud Engineer</div>
              </div>
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`nav-item ${
                    activeSection === item.href.substring(1) ? "active" : ""
                  }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
            
            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              <Button 
                variant="outline" 
                size="sm" 
                className="hidden sm:flex btn-secondary group"
              >
                <Download className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                Resume
              </Button>
              
              <ThemeToggle />
              
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-xl glass-card hover:scale-110 transition-all duration-300"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          className="fixed inset-0 z-40 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-sm" 
            onClick={() => setIsMobileMenuOpen(false)} 
          />
          <motion.div 
            className="fixed top-20 left-0 right-0 glass-card border-b border-border shadow-2xl"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-8 space-y-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                    activeSection === item.href.substring(1)
                      ? "bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-lg"
                      : "glass-card hover:shadow-lg"
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.name}
                </motion.button>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Button className="btn-primary w-full mt-4">
                  <Download className="w-5 h-5" />
                  Download Resume
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};