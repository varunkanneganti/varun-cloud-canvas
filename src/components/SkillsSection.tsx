import { Cloud, Server, Database, GitBranch } from "lucide-react";

const skillCategories = [
  {
    title: "AWS Cloud",
    icon: Cloud,
    skills: ["EC2", "Lambda", "S3", "CloudFront", "IAM", "RDS", "Route 53"],
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "DevOps & Tools",
    icon: GitBranch,
    skills: ["GitHub Actions", "CI/CD", "Infrastructure as Code", "Docker"],
    color: "from-green-500 to-green-600"
  },
  {
    title: "Backend Stack",
    icon: Server,
    skills: ["Java", "Spring Boot", "REST APIs", "Microservices", "FastAPI"],
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Databases & Testing",
    icon: Database,
    skills: ["MongoDB", "MySQL", "Redis", "JUnit", "Mockito"],
    color: "from-orange-500 to-orange-600"
  }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-accent/30">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Technologies and tools I work with to build scalable solutions
          </p>
        </div>
        
        <div className="grid-skills">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.title}
                className="card-skill group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
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