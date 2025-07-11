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
                I'm a Cloud Engineer and Java Backend Developer with a strong foundation in building 
                scalable, secure, and production-ready systems. I specialize in AWS Cloud Infrastructure 
                and backend development using Java, Spring Boot, and modern CI/CD practices. Currently 
                interning at <span className="font-semibold text-primary">Signitives</span> as a Product Intern, 
                I'm actively exploring the synergy between product thinking and robust cloud engineering.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground">
                Previously, I worked as a Java Developer Intern at Arnisys, where I built and tested 
                REST APIs for a Learning Management System using Java 8, Spring Boot, and MySQL. 
                I'm passionate about leveraging cloud technologies to solve complex problems while 
                maintaining clean code principles and robust system architecture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};