import { ArrowRight, Download, Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  SiAwsamplify, 
  SiTerraform, 
  SiDocker, 
  SiFastapi, 
  SiPostgresql, 
  SiRedis,
  SiGithubactions,
  SiNginx
} from "react-icons/si";

const techKeywords = [
  "AWS Cloud Engineer",
  "FastAPI Developer", 
  "DevOps Engineer",
  "Backend Developer",
  "Infrastructure Architect"
];

const techIcons = [
  { Icon: SiAwsamplify, name: "AWS", color: "#FF9900" },
  { Icon: SiTerraform, name: "Terraform", color: "#7B42BC" },
  { Icon: SiDocker, name: "Docker", color: "#2496ED" },
  { Icon: SiFastapi, name: "FastAPI", color: "#009688" },
  { Icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
  { Icon: SiRedis, name: "Redis", color: "#DC382D" },
  { Icon: SiGithubactions, name: "GitHub Actions", color: "#2088FF" },
  { Icon: SiNginx, name: "NGINX", color: "#009639" }
];

export const HeroSection = () => {
  const [currentKeyword, setCurrentKeyword] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const keyword = techKeywords[currentKeyword];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < keyword.length) {
          setDisplayText(keyword.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentKeyword((prev) => (prev + 1) % techKeywords.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentKeyword]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary-glow/5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="section-container section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Status Badge */}
            <motion.div 
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-green-700 dark:text-green-300">
                Available for AWS Cloud & DevOps Roles
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1 
                className="text-5xl md:text-7xl font-black leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                  Varun
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  Kanneganti
                </span>
              </motion.h1>

              {/* Typewriter Effect */}
              <motion.div 
                className="h-16 flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span className="text-2xl md:text-3xl font-bold text-muted-foreground">
                  {displayText}
                  <span className="typewriter"></span>
                </span>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p 
              className="text-xl text-muted-foreground leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              Building scalable cloud infrastructure and high-performance backend systems. 
              Currently architecting AWS solutions at{" "}
              <span className="font-bold text-primary">Signitives</span> with expertise in 
              FastAPI, DevOps automation, and production-grade deployments.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Button className="btn-glow group">
                <Download className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Download Resume
              </Button>
              
              <Button 
                variant="outline" 
                className="btn-secondary group"
                onClick={scrollToProjects}
              >
                <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                View Projects
              </Button>
              
              <Button 
                variant="ghost" 
                className="btn-secondary group"
                onClick={scrollToContact}
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Let's Connect
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex items-center gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              <a 
                href="https://github.com/varunkanneganti" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-card hover:scale-110 transition-all duration-300 group"
              >
                <Github className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </a>
              <a 
                href="https://www.linkedin.com/in/varun-kanneganti-0672422b7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-card hover:scale-110 transition-all duration-300 group"
              >
                <Linkedin className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </a>
              <a 
                href="mailto:reachtovarun4@gmail.com"
                className="p-3 rounded-full glass-card hover:scale-110 transition-all duration-300 group"
              >
                <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Tech Stack Visualization */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Central Avatar/Logo */}
              <motion.div 
                className="relative z-10 w-48 h-48 mx-auto mb-8 rounded-full glass-card flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-6xl font-black bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  VK
                </div>
              </motion.div>

              {/* Floating Tech Icons */}
              <div className="absolute inset-0">
                {techIcons.map((tech, index) => {
                  const angle = (index * 360) / techIcons.length;
                  const radius = 140;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;
                  
                  return (
                    <motion.div
                      key={tech.name}
                      className="absolute w-16 h-16 rounded-2xl glass-card flex items-center justify-center group cursor-pointer"
                      style={{
                        left: `calc(50% + ${x}px - 2rem)`,
                        top: `calc(50% + ${y}px - 2rem)`,
                      }}
                      animate={{ 
                        rotate: 360,
                        y: [0, -5, 0]
                      }}
                      transition={{ 
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        y: { duration: 2 + index * 0.2, repeat: Infinity, ease: "easeInOut" }
                      }}
                      whileHover={{ scale: 1.2, rotate: 0 }}
                    >
                      <tech.Icon 
                        className="w-8 h-8 transition-all duration-300 group-hover:scale-110" 
                        style={{ color: tech.color }}
                      />
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-xs font-semibold bg-black text-white px-2 py-1 rounded whitespace-nowrap">
                          {tech.name}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div 
          className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div 
            className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};