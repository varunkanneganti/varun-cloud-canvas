import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "URL Shortener API",
    description: "A high-performance URL shortening service built with FastAPI, featuring Redis caching for lightning-fast redirects and PostgreSQL for persistent storage. Deployed with CloudFront CDN for global low-latency access.",
    tech: ["FastAPI", "PostgreSQL", "Redis", "CloudFront", "AWS Lambda"],
    features: ["Sub-100ms response times", "Custom short codes", "Analytics tracking", "Rate limiting"]
  },
  {
    title: "CI/CD Pipeline Automation",
    description: "Comprehensive GitHub Actions workflows for automated testing, building, and deployment. Features multi-environment support, automated rollbacks, and integration with AWS services.",
    tech: ["GitHub Actions", "Docker", "AWS ECS", "SonarQube"],
    features: ["Zero-downtime deployments", "Automated testing", "Security scanning", "Infrastructure as Code"]
  },
  {
    title: "Portfolio Website",
    description: "This responsive portfolio website showcasing modern web development practices. Built with React and deployed using AWS S3 and CloudFront for optimal performance and global distribution.",
    tech: ["React", "TypeScript", "Tailwind CSS", "AWS S3", "CloudFront"],
    features: ["Mobile-first design", "Dark/light themes", "SEO optimized", "Fast loading"]
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-hero mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-gradient-card rounded-2xl p-8 shadow-soft hover:shadow-hover transition-all duration-300 hover:scale-105 group"
            >
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <li 
                      key={feature}
                      className="text-sm text-muted-foreground flex items-center"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex gap-3">
                <Button variant="default" size="sm" className="flex-1">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};