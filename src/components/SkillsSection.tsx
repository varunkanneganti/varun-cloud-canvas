import { Cloud, Server, Database, GitBranch } from "lucide-react";

const skillCategories = [
  {
    title: "AWS Cloud",
    icon: Cloud,
    skills: [
      { name: "EC2", level: "Advanced" },
      { name: "Lambda", level: "Advanced" },
      { name: "S3", level: "Expert" },
      { name: "CloudFront", level: "Advanced" },
      { name: "IAM", level: "Advanced" },
      { name: "RDS", level: "Intermediate" },
      { name: "Route 53", level: "Intermediate" }
    ],
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "DevOps & Tools",
    icon: GitBranch,
    skills: [
      { name: "GitHub Actions", level: "Advanced" },
      { name: "CI/CD", level: "Advanced" },
      { name: "Infrastructure as Code", level: "Intermediate" },
      { name: "Docker", level: "Intermediate" }
    ],
    color: "from-green-500 to-green-600"
  },
  {
    title: "Backend Stack",
    icon: Server,
    skills: [
      { name: "Java", level: "Advanced" },
      { name: "Spring Boot", level: "Advanced" },
      { name: "REST APIs", level: "Expert" },
      { name: "Microservices", level: "Intermediate" },
      { name: "FastAPI", level: "Intermediate" }
    ],
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Databases & Testing",
    icon: Database,
    skills: [
      { name: "MongoDB", level: "Advanced" },
      { name: "MySQL", level: "Advanced" },
      { name: "Redis", level: "Intermediate" },
      { name: "JUnit", level: "Advanced" },
      { name: "Mockito", level: "Intermediate" }
    ],
    color: "from-orange-500 to-orange-600"
  }
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert": return "text-green-600 bg-green-50 border-green-200";
    case "Advanced": return "text-blue-600 bg-blue-50 border-blue-200";
    case "Intermediate": return "text-orange-600 bg-orange-50 border-orange-200";
    default: return "text-gray-600 bg-gray-50 border-gray-200";
  }
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-accent/30">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Expertise across cloud infrastructure, backend development, and modern DevOps practices
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
                
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill.name}
                      className="tooltip-trigger relative"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full border ${getLevelColor(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                      <div className="tooltip -top-10 left-1/2 transform -translate-x-1/2">
                        {skill.level} level proficiency
                      </div>
                    </div>
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