import { motion } from "framer-motion";
import { Award, Users, Mic, Trophy, Calendar, MapPin, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const activities = [
  {
    icon: Users,
    title: "Professional Experience",
    description: "Currently leading AWS infrastructure initiatives at Signitives, focusing on cost optimization and CI/CD automation. Previously developed high-performance REST APIs at Arnisys LLC with proven results.",
    achievement: "Current Role",
    color: "from-blue-500 to-blue-600",
    stats: ["2+ Years Experience", "2 Companies", "AWS Infrastructure"]
  },
  {
    icon: Award,
    title: "Certifications & Learning",
    description: "Completed Generative AI: Introduction and Applications certification. Currently pursuing AWS Cloud Practitioner certification to deepen cloud expertise.",
    achievement: "Certified",
    color: "from-green-500 to-green-600",
    stats: ["AI Certified", "AWS Learning", "Continuous Growth"]
  },
  {
    icon: Trophy,
    title: "Technical Achievements",
    description: "Delivered measurable impact: 30% API performance improvement, 90%+ test coverage, zero-downtime deployments, and cost-optimized AWS infrastructure serving 500+ users.",
    achievement: "Proven Results",
    color: "from-purple-500 to-purple-600",
    stats: ["30% Performance ↑", "90%+ Coverage", "Zero Downtime"]
  },
  {
    icon: Mic,
    title: "Education & Foundation",
    description: "B.Tech in Computer Science from Presidency University, Bangalore (2020–2024). Strong foundation in algorithms, data structures, and software engineering principles.",
    achievement: "Graduate",
    color: "from-orange-500 to-orange-600",
    stats: ["CS Graduate", "4 Years", "Strong Foundation"]
  }
];

const resume = {
  sections: [
    { name: "Experience", items: 2 },
    { name: "Projects", items: 5 },
    { name: "Skills", items: 20 },
    { name: "Education", items: 1 }
  ],
  lastUpdated: "January 2025",
  format: "ATS-Optimized PDF"
};

export const ExtrasSection = () => {
  return (
    <section id="extras" className="section-padding">
      <div className="section-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Beyond the Code</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Professional journey, achievements, and continuous learning that shape my approach to technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {activities.map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <motion.div
                key={activity.title}
                className="card-modern p-8 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${activity.color} group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {activity.title}
                      </h3>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20">
                        {activity.achievement}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {activity.description}
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-2">
                      {activity.stats.map((stat) => (
                        <span 
                          key={stat}
                          className="px-3 py-1 rounded-full text-xs font-semibold glass-card hover:scale-105 transition-transform"
                        >
                          {stat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Resume Section */}
        <motion.div
          className="card-modern p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Resume Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Resume</h3>
                  <p className="text-muted-foreground">Complete professional profile</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-muted-foreground">Format:</span>
                  <span className="text-sm font-bold text-foreground">{resume.format}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-muted-foreground">Last Updated:</span>
                  <span className="text-sm font-bold text-foreground">{resume.lastUpdated}</span>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <h4 className="font-semibold text-foreground mb-3">Includes:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {resume.sections.map((section) => (
                      <div key={section.name} className="flex items-center justify-between p-2 glass-card rounded-lg">
                        <span className="text-sm font-medium text-foreground">{section.name}</span>
                        <span className="text-xs font-bold text-primary">{section.items}+</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Download Actions */}
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <h4 className="text-lg font-bold text-foreground mb-2">
                  Ready to Download
                </h4>
                <p className="text-muted-foreground mb-6">
                  Get my complete professional profile optimized for ATS systems and recruiters.
                </p>
              </div>

              <div className="space-y-4">
                <Button className="btn-primary w-full group">
                  <Download className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Download Resume (PDF)
                </Button>
                
                <Button variant="outline" className="btn-secondary w-full group">
                  <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  View Online Version
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/50">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-xs text-muted-foreground">Years Exp</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-xs text-muted-foreground">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">20+</div>
                  <div className="text-xs text-muted-foreground">Skills</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};