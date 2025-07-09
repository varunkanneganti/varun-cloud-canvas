export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-hero mx-auto rounded-full"></div>
        </div>
        
        <div className="bg-gradient-card rounded-2xl p-8 md:p-12 shadow-soft hover:shadow-hover transition-all duration-300">
          <p className="text-lg leading-relaxed text-foreground/90">
            Currently interning at <span className="font-semibold text-primary">Signitives</span>, 
            I focus on cloud-native architecture, automation, and secure AWS infrastructure. 
            I bridge DevOps, backend, and product strategy to deliver robust, scalable solutions 
            that drive business value.
          </p>
          
          <p className="text-lg leading-relaxed text-foreground/90 mt-6">
            My passion lies in leveraging cutting-edge cloud technologies to solve complex 
            problems while maintaining a human-centered approach to technology. I believe 
            that the best solutions emerge when technical excellence meets empathetic design.
          </p>
        </div>
      </div>
    </section>
  );
};