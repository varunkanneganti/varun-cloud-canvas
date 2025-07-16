import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, MapPin, Phone, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/varun-kanneganti-0672422b7",
    color: "hover:text-blue-600",
    handle: "varun-kanneganti",
    description: "Professional network & career updates"
  },
  {
    name: "GitHub", 
    icon: Github,
    url: "https://github.com/varunkanneganti",
    color: "hover:text-gray-900 dark:hover:text-gray-100",
    handle: "@varunkanneganti",
    description: "Code repositories & open source"
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:reachtovarun4@gmail.com",
    color: "hover:text-red-600",
    handle: "reachtovarun4@gmail.com",
    description: "Direct communication"
  }
];

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Hyderabad, India",
    subtext: "Open to remote & hybrid roles"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9640657591",
    subtext: "Available 9 AM - 6 PM IST"
  },
  {
    icon: Calendar,
    label: "Availability",
    value: "Immediate",
    subtext: "Ready for new opportunities"
  }
];

export const ContactSection = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (form.current) {
      emailjs
        .sendForm(
          "service_a1oblvt",
          "template_8oby3ko",
          form.current,
          "WKI0O6c9hjBypJxFn"
        )
        .then(
          (result) => {
            console.log("Email sent:", result.text);
            alert("Message sent successfully! ✅");
            setFormData({
              name: '',
              email: '',
              subject: '',
              message: ''
            });
            setIsSubmitting(false);
          },
          (error) => {
            console.error("Email send failed:", error);
            alert("Oops! Something went wrong ❌");
            setIsSubmitting(false);
          }
        );
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-accent/20">
      <div className="section-container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Let's Build Something Amazing</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Ready to discuss AWS cloud solutions, backend architecture, or your next big project? Let's connect!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Contact Info & Social */}
          <motion.div 
            className="lg:col-span-1 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Contact Information */}
            <div className="card-modern p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Get in Touch</h3>
                  <p className="text-sm text-muted-foreground">Let's start a conversation</p>
                </div>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((info) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={info.label} className="flex items-start gap-4 group">
                      <div className="p-3 rounded-xl glass-card group-hover:scale-110 transition-transform">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                          {info.label}
                        </p>
                        <p className="text-foreground font-semibold">{info.value}</p>
                        <p className="text-xs text-muted-foreground mt-1">{info.subtext}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div className="card-modern p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center">
                  <Github className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Connect Online</h3>
                  <p className="text-sm text-muted-foreground">Follow my journey</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <motion.a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-4 rounded-2xl glass-card hover:shadow-lg transition-all duration-300 group ${link.color}`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="p-3 rounded-xl bg-accent group-hover:scale-110 transition-transform">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-foreground group-hover:text-current transition-colors">
                          {link.name}
                        </h4>
                        <p className="text-sm text-muted-foreground truncate">
                          {link.handle}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {link.description}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="card-modern p-8 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-y-20 translate-x-20"></div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-primary to-primary-glow flex items-center justify-center">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Send a Message</h3>
                  <p className="text-muted-foreground">I'll get back to you within 24 hours</p>
                </div>
              </div>
              
              <form ref={form} onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-foreground mb-3 uppercase tracking-wide">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-foreground mb-3 uppercase tracking-wide">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-foreground mb-3 uppercase tracking-wide">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-foreground mb-3 uppercase tracking-wide">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project, job opportunity, or just say hello!"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="form-textarea"
                    required
                  />
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-glow w-full group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    <span className="relative z-10">
                      {isSubmitting ? 'Sending Message...' : 'Send Message'}
                    </span>
                  </Button>
                </motion.div>
              </form>

              {/* Quick Response Promise */}
              <div className="mt-8 p-4 glass-card rounded-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-sm font-semibold text-foreground">
                    Quick Response Guaranteed
                  </p>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  I typically respond within 24 hours. For urgent matters, feel free to reach out via LinkedIn or phone.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};