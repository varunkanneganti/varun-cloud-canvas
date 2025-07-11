import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExtrasSection } from "@/components/ExtrasSection";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
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
      <footer className="footer-modern section-padding py-12">
        <div className="section-container">
          <div className="text-center">
            <div className="mb-6">
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-2">
                Varun Kanneganti
              </div>
              <p className="text-muted-foreground">
                Cloud Engineer & Java Backend Developer
              </p>
            </div>
            
            <div className="border-t border-border/50 pt-6">
              <p className="text-sm text-muted-foreground">
                © 2024 Varun Kanneganti. Built with React, TypeScript, and lots of ☕
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Designed with passion for clean, modern web experiences
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;