import { Award, Users, Mic, Trophy } from "lucide-react";

const activities = [
  {
    icon: Users,
    title: "Sports Leadership",
    description: "Captain of university basketball team, leading team strategy and fostering collaborative excellence both on and off the court."
  },
  {
    icon: Trophy,
    title: "Technical Fest Winner",
    description: "First place in inter-college hackathon for developing an innovative IoT solution for smart campus management."
  },
  {
    icon: Mic,
    title: "Public Speaking",
    description: "Winner of regional technical presentation competition, delivered talks on cloud architecture to 300+ attendees."
  },
  {
    icon: Award,
    title: "Community Impact",
    description: "Mentored 20+ students in cloud technologies and organized workshops on AWS fundamentals and best practices."
  }
];

export const ExtrasSection = () => {
  return (
    <section id="extras" className="py-20 px-4 bg-gradient-to-br from-accent/10 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Beyond Tech
          </h2>
          <div className="w-20 h-1 bg-gradient-hero mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Leadership, community engagement, and continuous learning shape my approach to technology and teamwork.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <div 
                key={activity.title}
                className="bg-gradient-card rounded-2xl p-8 shadow-soft hover:shadow-hover transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-gradient-accent group-hover:scale-110 transition-transform">
                    <IconComponent className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {activity.title}
                    </h3>
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