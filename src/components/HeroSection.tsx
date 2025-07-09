import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient">
      <div className="section-container section-padding">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Varun Kanneganti
            </h1>
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <span className="skill-tag">AWS Cloud Engineer</span>
              <span className="skill-tag">Product Intern</span>
              <span className="skill-tag">Backend Developer</span>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium max-w-3xl mx-auto leading-relaxed">
              Building scalable cloud infrastructure and secure AWS solutions while bridging 
              DevOps, backend development, and product strategy at{" "}
              <span className="text-primary font-semibold">Signitives</span>.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up-delay">
            <Button className="btn-primary group">
              <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
              View Resume
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" className="btn-secondary group">
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Connect with Me
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};