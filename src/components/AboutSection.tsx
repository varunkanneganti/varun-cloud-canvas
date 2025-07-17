import { motion } from "framer-motion";
import { Calendar, MapPin, GraduationCap, Briefcase, Award, TrendingUp } from "lucide-react";
import { SiAwsamplify, SiSpringboot, SiFastapi, SiPostgresql } from "react-icons/si";

const milestones = [
  {
    year: "2020-2024",
    title: "B.Tech Computer Science",
    company: "Presidency University, Bangalore",
    description: "Strong foundation in software engineering principles and computer science fundamentals",
    icon: GraduationCap,
    type: "education"
  },
  {
    year: "Aug 2024 - Feb 2025",
    title: "Java Backend Intern",
    company: "Arnisys LLC",
    description: "Built 5+ REST APIs with Spring Boot, achieved 30% performance improvement and 90%+ test coverage",
    icon: Briefcase,
    type: "experience"
  },
  {
    year: "Apr 2025 - Present",
    title: "Product Intern",
    company: "Signitives",
    description: "Leading AWS infrastructure architecture, CI/CD automation, and cost optimization strategies",
    icon: Award,
    type: "current"
  }
];

const stats = [
  { label: "Years Experience", value: "2+", icon: TrendingUp },
  { label: "Projects Completed", value: "10+", icon: Award },
  { label: "AWS Services", value: "15+", icon: SiAwsamplify },
  { label: "Performance Gain", value: "30%", icon: TrendingUp }
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-accent/20">
      <div className="section-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Passionate about building scalable cloud infrastructure and high-performance backend systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Story */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="card-modern p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">My Journey</h3>
                    <p className="text-muted-foreground">From student to cloud engineer</p>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed text-foreground mb-6">
                    I'm a passionate <span className="font-bold text-primary">AWS Cloud Engineer</span> and 
                    <span className="font-bold text-primary"> FastAPI Backend Developer</span> with a proven track 
                    record of building scalable, production-ready systems. My expertise spans cloud infrastructure 
                    architecture, DevOps automation, and high-performance backend development.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-foreground mb-6">
                    Currently at <span className="font-bold text-primary">Signitives</span>, I lead AWS infrastructure 
                    initiatives, implement CI/CD pipelines, and optimize cloud costs. Previously at Arnisys LLC, 
                    I developed REST APIs that improved response times by 30% while maintaining 90%+ test coverage.
                  </p>

                  <p className="text-lg leading-relaxed text-foreground">
                    I'm passionate about leveraging cutting-edge cloud technologies to solve complex problems while 
                    maintaining clean code principles and robust system architecture. Always eager to take on new 
                    challenges in cloud engineering and backend development.
                  </p>
                </div>

                {/* Key Technologies */}
                <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                  <span className="text-sm font-semibold text-muted-foreground">Core Technologies:</span>
                  <div className="flex items-center gap-3">
                    <SiAwsamplify className="w-6 h-6 text-[#FF9900]" />
                    <SiFastapi className="w-6 h-6 text-[#009688]" />
                    <SiSpringboot className="w-6 h-6 text-[#6DB33F]" />
                    <SiPostgresql className="w-6 h-6 text-[#336791]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="card-modern p-6 text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-center mb-3">
                    {typeof stat.icon === 'function' ? (
                      <stat.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                    ) : (
                      <stat.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                    )}
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Timeline */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="card-modern p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Career Timeline</h3>
                  <p className="text-muted-foreground">Key milestones in my journey</p>
                </div>
              </div>

              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    className="timeline-item group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl transition-all duration-300 group-hover:scale-110 ${
                        milestone.type === 'current' 
                          ? 'bg-gradient-to-r from-green-500 to-green-600' 
                          : milestone.type === 'experience'
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600'
                          : 'bg-gradient-to-r from-purple-500 to-purple-600'
                      }`}>
                        <milestone.icon className="w-5 h-5 text-white" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {milestone.year}
                          </span>
                          {milestone.type === 'current' && (
                            <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full dark:text-green-400 dark:bg-green-900/30">
                              CURRENT
                            </span>
                          )}
                        </div>
                        
                        <h4 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {milestone.title}
                        </h4>
                        
                        <p className="text-primary font-semibold mb-3">
                          {milestone.company}
                        </p>
                        
                        <p className="text-muted-foreground leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Location & Contact Info */}
            <div className="card-modern p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">Based in</p>
                    <p className="text-sm text-muted-foreground">Hyderabad, India</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <p className="font-semibold text-foreground">Open to</p>
                  <p className="text-sm text-muted-foreground">Remote & Hybrid roles</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
