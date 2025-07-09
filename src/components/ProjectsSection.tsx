import { ExternalLink, Github, Star, GitFork } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "URL Shortener API",
    description: "A high-performance URL shortening service built with FastAPI, featuring Redis caching for lightning-fast redirects and PostgreSQL for persistent storage. Deployed with CloudFront CDN for global low-latency access.",
    tech: ["FastAPI", "PostgreSQL", "Redis", "CloudFront", "AWS Lambda"],
    features: ["Fast response times", "Custom short codes", "Analytics tracking", "Rate limiting"],
    stats: { stars: "★", forks: "⑂" },
    status: "Production",
    image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Portfolio Website",
    description: "This responsive portfolio website showcasing modern web development practices. Built with React and deployed using AWS S3 and CloudFront for optimal performance and global distribution.",
    tech: ["React", "TypeScript", "Tailwind CSS", "AWS S3", "CloudFront"],
    features: ["Mobile-first design", "Dark/light themes", "SEO optimized", "Fast loading"],
    stats: { stars: "★", forks: "⑂" },
    status: "Live",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            A showcase of my recent work in cloud infrastructure and web development
          </p>
        </div>
        
        <div className="grid-projects">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="card-project group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative mb-6 rounded-xl overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Production' 
                      ? 'bg-green-100 text-green-800 border border-green-200' 
                      : 'bg-blue-100 text-blue-800 border border-blue-200'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Header */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {project.stats.stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      {project.stats.forks}
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              {/* Technologies */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Key Features */}
              <div className="mb-8">
                <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <li 
                      key={feature}
                      className="text-sm text-muted-foreground flex items-center"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-3 mt-auto">
                <Button variant="default" size="sm" className="flex-1 group/button">
                  <Github className="w-4 h-4 group-hover/button:rotate-12 transition-transform duration-200" />
                  Code
                </Button>
                <Button variant="outline" size="sm" className="flex-1 group/button">
                  <ExternalLink className="w-4 h-4 group-hover/button:rotate-12 transition-transform duration-200" />
                  Live Demo
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="text-center mt-12">
          <Button variant="outline" className="btn-secondary">
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};