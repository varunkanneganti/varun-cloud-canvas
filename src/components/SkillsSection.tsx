import { Cloud, Server, Database, GitBranch } from "lucide-react";

const skillCategories = [
  {
    title: "AWS Cloud",
    icon: Cloud,
    skills: ["EC2", "Lambda", "S3", "CloudFront", "IAM", "RDS", "Route 53"],
    color: "from-primary to-primary-glow"
  },
  {
    title: "DevOps & Tools",
    icon: GitBranch,
    skills: ["GitHub Actions", "CI/CD", "Infrastructure as Code", "Docker"],
    color: "from-accent to-primary"
  },
  {
    title: "Backend Stack",
    icon: Server,
    skills: ["Java", "Spring Boot", "REST APIs", "Microservices", "FastAPI"],
    color: "from-secondary to-accent"
  },
  {
    title: "Databases & Testing",
    icon: Database,
    skills: ["MongoDB", "MySQL", "Redis", "JUnit", "Mockito"],
    color: "from-muted to-secondary"
  }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-accent/10 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-hero mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.title}
                className="bg-gradient-card rounded-2xl p-8 shadow-soft hover:shadow-hover transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} mr-4`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-accent/50 text-accent-foreground rounded-full text-sm font-medium hover:bg-accent transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};