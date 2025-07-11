import { Award, Users, Mic, Trophy } from "lucide-react";

const activities = [
  {
    icon: Award,
    title: "Certifications",
    description: "Completed Generative AI: Introduction and Applications certification, staying current with emerging technologies and AI applications in software development.",
    achievement: "Certified"
  },
  {
    icon: Users,
    title: "Cross-functional Collaboration",
    description: "Contributing to user-focused digital product development with involvement in user research, agile product cycles, and cross-functional team collaboration.",
    achievement: "Product Intern"
  },
  {
    icon: Trophy,
    title: "Continuous Learning",
    description: "Currently diving deeper into AWS services, focusing on scalable backend deployments using EC2, Lambda, and ECS with secure authentication practices.",
    achievement: "In Progress"
  },
  {
    icon: Mic,
    title: "Education",
    description: "B.Tech in Computer Science from Presidency University, Bangalore (2020–2024), with a strong foundation in software engineering principles.",
    achievement: "Graduate"
  }
];

export const ExtrasSection = () => {
  return (
    <section id="extras" className="section-padding bg-accent/30">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Beyond Tech</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Leadership, community engagement, and continuous learning shape my approach to technology and teamwork
          </p>
        </div>
        
        <div className="grid-extras">
          {activities.map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <div 
                key={activity.title}
                className="card-modern p-8 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-primary to-primary-glow group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {activity.title}
                      </h3>
                    </div>
                    
                    <div className="mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
                        {activity.achievement}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};