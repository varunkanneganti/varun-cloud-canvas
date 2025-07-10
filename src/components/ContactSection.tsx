import { Github, Linkedin, Mail, Send, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/varun-kanneganti",
    color: "hover:text-blue-600",
    handle: "@varun-kanneganti"
  },
  {
    name: "GitHub", 
    icon: Github,
    url: "https://github.com/varun-kanneganti",
    color: "hover:text-gray-900 dark:hover:text-gray-100",
    handle: "@varun-kanneganti"
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:varun.kanneganti@example.com",
    color: "hover:text-red-600",
    handle: "varun.kanneganti@example.com"
  }
];

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Hyderabad, India"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "Available on request"
  },
  {
    icon: Mail,
    label: "Email",
    value: "varun.kanneganti@example.com"
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
          "service_a1oblvt",        // Your Service ID
          "template_8oby3ko",       // Your Template ID
          form.current,
          "WKI0O6c9hjBypJxFn"       // Your Public API Key
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
    <section id="contact" className="section-padding">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Let's Connect</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            I'm always open to discussing new opportunities, collaboration, or just having a great conversation about technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={info.label} className="flex items-center space-x-4">
                      <div className="p-3 rounded-xl bg-accent">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{info.label}</p>
                        <p className="text-foreground">{info.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">Follow Me</h3>
              
              <div className="space-y-4">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-4 p-4 rounded-xl bg-card border border-border/50 hover:border-border transition-all duration-300 group ${link.color}`}
                    >
                      <div className="p-3 rounded-lg bg-accent group-hover:scale-110 transition-transform">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground group-hover:text-current transition-colors">
                          {link.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {link.handle}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card-modern p-8 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
              
              <h3 className="text-xl font-semibold text-foreground mb-6">Send a Message</h3>
              
              <form ref={form} onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
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
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
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
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
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
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or just say hello!"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="form-textarea"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-primary w-full group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Send className="w-5 h-5" />
                  <span className="relative z-10">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};