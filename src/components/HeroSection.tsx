import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-background via-background to-accent/20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Varun Kanneganti
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
            AWS Cloud Engineer · Product Intern · Backend Dev
          </p>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            Building scalable cloud infrastructure and secure AWS solutions while bridging 
            DevOps, backend development, and product strategy at Signitives.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg"
            className="group"
          >
            <Download className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            View Resume
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="glass" 
            size="lg"
            className="group"
          >
            <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Connect with Me
          </Button>
        </div>
      </div>
    </section>
  );
};