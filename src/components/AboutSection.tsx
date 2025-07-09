export const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Passionate about leveraging cutting-edge cloud technologies to solve complex problems
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="card-modern p-8 md:p-12 animate-fade-in-up">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-foreground mb-6">
                Currently interning at <span className="font-semibold text-primary">Signitives</span>, 
                I focus on cloud-native architecture, automation, and secure AWS infrastructure. 
                I bridge DevOps, backend, and product strategy to deliver robust, scalable solutions 
                that drive business value.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground">
                My passion lies in leveraging cutting-edge cloud technologies to solve complex 
                problems while maintaining a human-centered approach to technology. I believe 
                that the best solutions emerge when technical excellence meets empathetic design.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">2+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">5+</div>
                <div className="text-sm text-muted-foreground">AWS Services</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">20+</div>
                <div className="text-sm text-muted-foreground">Students Mentored</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};