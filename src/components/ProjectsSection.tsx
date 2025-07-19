import { motion } from "framer-motion";
import { ExternalLink, Github, Star, Calendar, Code, Filter, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { 
  SiAwsamplify, 
  SiFastapi, 
  SiPostgresql, 
  SiRedis,
  SiGithubactions,
  SiNginx,
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiJunit5
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "AWS-Powered URL Shortener",
    description: "Production-grade cloud application with comprehensive AWS infrastructure including EC2, S3, RDS, ElastiCache, and Cognito. Features CI/CD automation, HTTPS with custom domain, and enterprise-level security.",
    longDescription: "A full-stack cloud application showcasing modern AWS architecture patterns. Built with FastAPI backend hosted on EC2 with NGINX reverse proxy, PostgreSQL RDS for data persistence, Redis ElastiCache for caching, and S3+CloudFront for frontend hosting. Implements secure user authentication with Amazon Cognito and automated deployments via GitHub Actions.",
    tech: [
      { name: "AWS EC2", icon: SiAwsamplify, color: "#FF9900" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
      { name: "S3", icon: SiAwsamplify, color: "#FF9900" },
      { name: "CloudFront", icon: SiAwsamplify, color: "#FF9900" },
      { name: "Cognito", icon: SiAwsamplify, color: "#FF9900" },
      { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" }
    ],
    features: [
      "Zero-downtime CI/CD deployment",
      "HTTPS with custom domain (Route 53 + ACM)",
      "User authentication & authorization",
      "Production-grade reliability & monitoring",
      "Auto-scaling infrastructure",
      "Cost-optimized architecture"
    ],
    category: "DevOps",
    status: "Live",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/varunkanneganti/aws-url-shortener",
    demo: "https://short.varunkanneganti.com",
    metrics: {
      performance: "99.9% uptime",
      users: "500+ active users",
      requests: "10K+ daily requests"
    }
  },
  {
    id: 2,
    title: "High-Performance REST APIs",
    description: "Enterprise-grade Spring Boot APIs with 30% performance improvement and 90%+ test coverage. Built using Java 8 features, multi-tier architecture, and comprehensive testing strategies.",
    longDescription: "A collection of production-ready REST APIs built with Spring Boot, showcasing advanced Java 8 features like Streams and Lambdas. Implements multi-tier architecture with both SQL and NoSQL databases, comprehensive testing with JUnit and Mockito, and follows Agile development practices.",
    tech: [
      { name: "Java 8", icon: FaJava, color: "#ED8B00" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "MariaDB", icon: SiMysql, color: "#003545" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "JUnit", icon: SiJunit5, color: "#25A162" },
      { name: "Mockito", icon: FaJava, color: "#ED8B00" }
    ],
    features: [
      "30% response time improvement",
      "90%+ test coverage with JUnit & Mockito",
      "Multi-tier application architecture",
      "Java 8 Streams & Lambdas optimization",
      "SQL & NoSQL database integration",
      "Agile development methodology"
    ],
    category: "Backend",
    status: "Production",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
    github: "https://github.com/varunkanneganti/spring-boot-apis",
    metrics: {
      performance: "30% faster response",
      coverage: "90%+ test coverage",
      apis: "5+ REST endpoints"
    }
  }
];

const categories = ["All", "DevOps", "Backend", "Frontend"];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Live':
      return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800';
    case 'Production':
      return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800';
    case 'Development':
      return 'bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-900/30 dark:text-gray-300 dark:border-gray-800';
  }
};

export const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="section-padding bg-accent/20">
      <div className="section-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Showcasing production-grade applications with modern cloud architecture and backend engineering
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex justify-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 p-2 glass-card rounded-2xl">
            <Filter className="w-5 h-5 text-muted-foreground ml-2" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`filter-chip ${selectedCategory === category ? 'active' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid-projects">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="card-project group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
            >
              {/* Project Image */}
              <div className="relative mb-6 rounded-2xl overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Status and Category */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-black/30 text-white backdrop-blur-sm border border-white/20">
                    {project.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/20">
                  <div className="flex gap-3">
                    <Button size="sm" className="btn-secondary backdrop-blur-sm">
                      <Play className="w-4 h-4" />
                      View Details
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {selectedProject === project.id ? project.longDescription : project.description}
                </p>

                {/* Metrics */}
                {selectedProject === project.id && (
                  <motion.div 
                    className="grid grid-cols-3 gap-4 mb-6 p-4 glass-card rounded-xl"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wide">{key}</div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wide flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <div 
                      key={tech.name} 
                      className="skill-tag group/tech"
                    >
                      <tech.icon 
                        className="w-4 h-4 group-hover/tech:scale-110 transition-transform" 
                        style={{ color: tech.color }}
                      />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="mb-8">
                <h4 className="font-bold text-foreground mb-4 text-sm uppercase tracking-wide">
                  Key Features
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {project.features.slice(0, selectedProject === project.id ? project.features.length : 3).map((feature) => (
                    <div 
                      key={feature}
                      className="flex items-center text-sm text-muted-foreground group/feature"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0 group-hover/feature:scale-125 transition-transform"></div>
                      <span className="group-hover/feature:text-foreground transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-auto">
                <Button 
                  variant="default" 
                  size="sm" 
                  className="flex-1 group/button"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.github, '_blank');
                  }}
                >
                  <Github className="w-4 h-4 group-hover/button:rotate-12 transition-transform" />
                  Code
                </Button>
                
                {project.demo && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 group/button"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(project.demo, '_blank');
                    }}
                  >
                    <ExternalLink className="w-4 h-4 group-hover/button:rotate-12 transition-transform" />
                    Live Demo
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button 
            variant="outline" 
            className="btn-secondary group"
            onClick={() => window.open('https://github.com/varunkanneganti', '_blank')}
          >
            <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            View All Projects on GitHub
            <ExternalLink className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};