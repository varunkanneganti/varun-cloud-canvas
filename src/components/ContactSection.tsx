import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/varun-kanneganti",
    color: "hover:text-blue-600"
  },
  {
    name: "GitHub", 
    icon: Github,
    url: "https://github.com/varun-kanneganti",
    color: "hover:text-gray-900 dark:hover:text-gray-100"
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:varun.kanneganti@example.com",
    color: "hover:text-red-600"
  }
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-hero mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaboration, or just having a great conversation about technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Social Links */}
          <div className="space-y-8">
            <h3 className="text-xl font-semibold text-foreground">Get in Touch</h3>
            
            <div className="space-y-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-4 p-4 rounded-xl bg-gradient-card hover:shadow-hover transition-all duration-300 group ${link.color}`}
                  >
                    <div className="p-3 rounded-lg bg-gradient-accent group-hover:scale-110 transition-transform">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-current transition-colors">
                        {link.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {link.name === 'Email' ? 'varun.kanneganti@example.com' : `@varun-kanneganti`}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-card rounded-2xl p-8 shadow-soft">
            <h3 className="text-xl font-semibold text-foreground mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-background/50 border-border/50"
                  required
                />
              </div>
              
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-background/50 border-border/50"
                  required
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="bg-background/50 border-border/50 resize-none"
                  required
                />
              </div>
              
              <Button type="submit" variant="hero" className="w-full group">
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};