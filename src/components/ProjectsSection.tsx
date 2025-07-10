import { ExternalLink, Github, Star, GitFork, Calendar, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const projects = [
  {
    title: "URL Shortener API",
    description: "A high-performance URL shortening service built with FastAPI, featuring Redis caching for lightning-fast redirects and PostgreSQL for persistent storage. Deployed with CloudFront CDN for global low-latency access.",
    tech: ["FastAPI", "PostgreSQL", "Redis", "CloudFront", "AWS Lambda"],
    features: ["Fast response times", "Custom short codes", "Analytics tracking", "Rate limiting"],
    stats: { stars: "★", forks: "⑂" },
    status: "Production",
    category: "Backend",
    image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Portfolio Website",
    description: "This responsive portfolio website showcasing modern web development practices. Built with React and deployed using AWS S3 and CloudFront for optimal performance and global distribution.",
    tech: ["React", "TypeScript", "Tailwind CSS", "AWS S3", "CloudFront"],
    features: ["Mobile-first design", "Dark/light themes", "SEO optimized", "Fast loading"],
    stats: { stars: "★", forks: "⑂" },
    status: "Live",
    category: "Frontend",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800"
  },
  {
    title: "Cloud Infrastructure Automation",
    description: "Infrastructure as Code solution using AWS CDK and Terraform for automated deployment of scalable cloud resources with monitoring and security best practices.",
    tech: ["AWS CDK", "Terraform", "CloudWatch", "IAM", "VPC"],
    features: ["Auto-scaling", "Monitoring", "Security compliance", "Cost optimization"],
    stats: { stars: "★", forks: "⑂" },
    status: "Development",
    category: "DevOps",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800"
  }
];

const categories = ["All", "Frontend", "Backend", "DevOps"];

export const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production':
        return 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800';
      case 'Live':
        return 'bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800';
      case 'Development':
        return 'bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/20 dark:text-orange-300 dark:border-orange-800';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-900/20 dark:text-gray-300 dark:border-gray-800';
    }
  };

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

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-accent rounded-xl border border-border/50">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid-projects">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.title}
              className="card-project group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Enhanced Project Image */}
              <div className="relative mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-accent to-muted">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Status and Category badges */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/20 text-white backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Hover overlay with quick actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex gap-3">
                    <Button size="sm" variant="secondary" className="backdrop-blur-sm bg-white/90 hover:bg-white">
                      <Code className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="backdrop-blur-sm bg-white/90 hover:bg-white">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Enhanced Project Header */}
              <div className="mb-4">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground ml-4">
                    <div className="flex items-center gap-1 hover:text-foreground transition-colors">
                      <Star className="w-4 h-4" />
                      {project.stats.stars}
                    </div>
                    <div className="flex items-center gap-1 hover:text-foreground transition-colors">
                      <GitFork className="w-4 h-4" />
                      {project.stats.forks}
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>
              
              {/* Enhanced Technologies */}
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide flex items-center gap-2">
                  <Code className="w-4 h-4" />
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
              
              {/* Enhanced Key Features */}
              <div className="mb-8">
                <h4 className="font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <li 
                      key={feature}
                      className="text-sm text-muted-foreground flex items-center group/item"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                      <span className="group-hover/item:text-foreground transition-colors">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Enhanced Action Buttons */}
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

        {/* Enhanced View More Projects Button */}
        <div className="text-center mt-16">
          <Button variant="outline" className="btn-secondary group">
            <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};