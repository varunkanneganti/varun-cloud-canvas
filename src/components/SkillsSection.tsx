import { motion } from "framer-motion";
import {
  SiAwsamplify, 
  SiTerraform, 
  SiDocker, 
  SiFastapi, 
  SiSpringboot,
  SiPostgresql, 
  SiRedis,
  SiMongodb,
  SiMysql,
  SiGithubactions,
  SiGit,
  SiNginx,
  SiPython,
  SiJunit5,
  SiIntellijidea,
  SiPostman,
  SiMaven
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Database, Cloud, Server, GitBranch } from "lucide-react";

const skillCategories = [
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    gradient: "from-orange-500 to-red-500",
    skills: [
      { name: "AWS EC2", icon: SiAwsamplify, level: "proficient", color: "#FF9900" },
      { name: "S3", icon: SiAwsamplify, level: "proficient", color: "#FF9900" },
      { name: "RDS", icon: SiAwsamplify, level: "proficient", color: "#FF9900" },
      { name: "CloudFront", icon: SiAwsamplify, level: "intermediate", color: "#FF9900" },
      { name: "Route 53", icon: SiAwsamplify, level: "intermediate", color: "#FF9900" },
      { name: "Cognito", icon: SiAwsamplify, level: "intermediate", color: "#FF9900" },
      { name: "ElastiCache", icon: SiAwsamplify, level: "intermediate", color: "#FF9900" },
      { name: "ACM", icon: SiAwsamplify, level: "intermediate", color: "#FF9900" }
    ]
  },
  {
    title: "Backend Development",
    icon: Server,
    gradient: "from-green-500 to-teal-500",
    skills: [
      { name: "Java 8", icon: SiJava, level: "proficient", color: "#ED8B00" },
      { name: "Spring Boot", icon: SiSpringboot, level: "proficient", color: "#6DB33F" },
      { name: "FastAPI", icon: SiFastapi, level: "proficient", color: "#009688" },
      { name: "REST APIs", icon: Server, level: "proficient", color: "#4F46E5" },
      { name: "JUnit", icon: SiJunit5, level: "intermediate", color: "#25A162" },
      { name: "Mockito", icon: SiJava, level: "intermediate", color: "#ED8B00" }
    ]
  },
  {
    title: "Databases",
    icon: Database,
    gradient: "from-blue-500 to-purple-500",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, level: "proficient", color: "#336791" },
      { name: "MySQL", icon: SiMysql, level: "proficient", color: "#4479A1" },
      { name: "Redis", icon: SiRedis, level: "intermediate", color: "#DC382D" },
      { name: "MongoDB", icon: SiMongodb, level: "intermediate", color: "#47A248" },
      { name: "MariaDB", icon: SiMysql, level: "intermediate", color: "#003545" }
    ]
  },
  {
    title: "Tools & Platforms",
    icon: GitBranch,
    gradient: "from-purple-500 to-pink-500",
    skills: [
      { name: "GitHub Actions", icon: SiGithubactions, level: "proficient", color: "#2088FF" },
      { name: "Git", icon: SiGit, level: "proficient", color: "#F05032" },
      { name: "NGINX", icon: SiNginx, level: "intermediate", color: "#009639" },
      { name: "Maven", icon: SiMaven, level: "intermediate", color: "#C71A36" },
      { name: "IntelliJ", icon: SiIntellijidea, level: "proficient", color: "#000000" },
      { name: "Postman", icon: SiPostman, level: "proficient", color: "#FF6C37" }
    ]
  }
];

const getLevelColor = (level: string) => {
  switch (level) {
    case 'proficient':
      return 'skill-level proficient';
    case 'intermediate':
      return 'skill-level intermediate';
    case 'learning':
      return 'skill-level learning';
    default:
      return 'skill-level intermediate';
  }
};

export const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Technical Expertise</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Technologies and tools I use to build scalable cloud solutions and robust backend systems
          </p>
        </motion.div>

        <div className="grid-skills">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                className="card-skill group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Category Header */}
                <div className="mb-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${category.gradient} flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  
                  <div className="w-12 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full"></div>
                </div>

                {/* Skills Grid */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="flex items-center justify-between p-3 rounded-xl glass-card hover:shadow-lg transition-all duration-300 group/skill"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center gap-3">
                        {typeof skill.icon === 'function' ? (
                          <skill.icon 
                            className="w-6 h-6 tech-icon" 
                            style={{ color: skill.color }}
                          />
                        ) : (
                          <skill.icon 
                            className="w-6 h-6 tech-icon" 
                            style={{ color: skill.color }}
                          />
                        )}
                        <span className="font-semibold text-foreground group-hover/skill:text-primary transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      
                      <span className={getLevelColor(skill.level)}>
                        {skill.level}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skills Summary */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="card-modern p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">8+</div>
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  AWS Services
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">6+</div>
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  Backend Frameworks
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">5+</div>
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  Database Systems
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-4xl font-bold text-primary">10+</div>
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  Dev Tools
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-6">Certifications & Learning</h3>
            <div className="inline-flex items-center gap-4 px-8 py-4 glass-card rounded-2xl">
              <SiAwsamplify className="w-8 h-8 text-[#FF9900]" />
              <div className="text-left">
                <div className="font-bold text-foreground">AWS Cloud Practitioner</div>
                <div className="text-sm text-muted-foreground">Currently pursuing</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
