import { ArrowRight, Download, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-glow/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="section-container section-padding relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-fade-in-up">
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 mb-8">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-700 dark:text-green-300">Available for opportunities</span>
            </div>

            <h1 className="mb-8 bg-gradient-to-r from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent">
              Varun Kanneganti
            </h1>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="skill-tag-hero">AWS Cloud Engineer</span>
              <span className="skill-tag-hero">Product Intern</span>
              <span className="skill-tag-hero">Backend Developer</span>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-medium max-w-4xl mx-auto leading-relaxed">
              Building scalable cloud infrastructure and secure AWS solutions while bridging 
              DevOps, backend development, and product strategy at{" "}
              <span className="text-primary font-semibold relative">
                Signitives
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-primary-glow"></div>
              </span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up-delay mb-16">
            <Button className="btn-primary group min-w-[200px]">
              <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
              View Resume
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" className="btn-secondary group min-w-[200px]">
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Let's Connect
            </Button>
          </div>

          {/* Enhanced scroll indicator */}
          <button 
            onClick={scrollToAbout}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:animate-none transition-all duration-300 group cursor-pointer"
          >
            <div className="flex flex-col items-center gap-2 text-muted-foreground group-hover:text-primary transition-colors">
              <span className="text-sm font-medium">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center relative">
                <div className="w-1 h-3 bg-current rounded-full mt-2 animate-pulse"></div>
              </div>
              <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};