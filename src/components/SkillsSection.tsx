import { Cloud, Server, Database, GitBranch, Award, TrendingUp } from "lucide-react";

const skillCategories = [
  {
    title: "Cloud & AWS",
    icon: Cloud,
    skills: ["AWS EC2", "S3", "RDS", "CloudFront", "Route 53", "ACM", "Cognito", "ElastiCache"],
    color: "from-blue-500 to-blue-600",
    level: "Advanced"
  },
  {
    title: "CI/CD & Tools",
    icon: GitBranch,
    skills: ["GitHub Actions", "NGINX", "systemd", "Git", "Maven", "IntelliJ", "Postman"],
    color: "from-green-500 to-green-600",
    level: "Intermediate"
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Java 8", "Spring Boot", "FastAPI", "REST APIs", "Streams & Lambdas", "JUnit"],
    color: "from-purple-500 to-purple-600",
    level: "Advanced"
  },
  {
    title: "Databases & Testing",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "MariaDB", "Mockito"],
    color: "from-orange-500 to-orange-600",
    level: "Intermediate"
  }
];

const getLevelIcon = (level: string) => {
  switch (level) {
    case 'Advanced':
      return <Award className="w-4 h-4" />;
    case 'Intermediate':
      return <TrendingUp className="w-4 h-4" />;
    default:
      return <TrendingUp className="w-4 h-4" />;
  }
};

const getLevelColor = (level: string) => {
  switch (level) {
    case 'Advanced':
      return 'text-green-600 bg-green-50 border-green-200 dark:text-green-400 dark:bg-green-900/20 dark:border-green-800';
    case 'Intermediate':
      return 'text-blue-600 bg-blue-50 border-blue-200 dark:text-blue-400 dark:bg-blue-900/20 dark:border-blue-800';
    default:
      return 'text-gray-600 bg-gray-50 border-gray-200 dark:text-gray-400 dark:bg-gray-900/20 dark:border-gray-800';
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
            Technologies and tools I work with to build scalable solutions
          </p>
        </div>
        
        <div className="grid-skills">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.title}
                className="card-skill group animate-fade-in-up relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity">
                  <IconComponent className="w-full h-full" />
                </div>

                <div className="relative z-10">
                  <div className="flex flex-col items-center mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {category.title}
                      </h3>
                      
                      {/* Skill level indicator */}
                      <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${getLevelColor(category.level)}`}>
                        {getLevelIcon(category.level)}
                        {category.level}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skill} 
                        className="skill-tag"
                        style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </div>
            );
          })}
        </div>

        {/* Skills summary */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 px-8 py-4 bg-card rounded-2xl border border-border/50 shadow-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4+</div>
              <div className="text-sm text-muted-foreground">Tech Stacks</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">20+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">AWS</div>
              <div className="text-sm text-muted-foreground">Learning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};