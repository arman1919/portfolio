import { ChevronDown, Phone, Mail, MapPin, Github, Linkedin } from "lucide-react"
import { Button } from "../ui/button"

// components/sections/Hero.tsx
export default function Hero(props: { scrollToSection: (arg0: string) => void; }) {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden mt-16">
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
              <div className="mb-8">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary">AR</span>
                  </div>
                </div>
              </div>
    
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 text-balance">Arman Rafayelyan</h1>
              <p className="text-xl sm:text-2xl text-muted-foreground mb-6">Web Developer & ML Engineer</p>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
                Passionate about creating innovative web solutions and leveraging machine learning to solve complex
                problems. Experienced in full-stack development with a focus on modern technologies and best practices.
              </p>
    
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button
                  onClick={() => props.scrollToSection("contact")}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Get In Touch
                </Button>
                <Button
                  variant="outline"
                  onClick={() => props.scrollToSection("projects")}
                  className="border-border hover:bg-accent/10"
                >
                  View Work
                </Button>
              </div>
    
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <a 
                    href="tel:+37498983797" 
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    +374 98 983797
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <a 
                    href="mailto:arman.raf2001@gmail.com" 
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    arman.raf2001@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <a 
                    href="https://maps.app.goo.gl/bfjTZoYeyv5nLEZ28" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors cursor-pointer"
                  >
                    Yerevan, Armenia
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center items-center gap-6 mt-8">
                <a 
                  href="https://github.com/arman1919" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 glass-card rounded-full hover:bg-primary/10 transition-all duration-300 group"
                >
                  <Github size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/arman-rafayelyan-002a0b188/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 glass-card rounded-full hover:bg-primary/10 transition-all duration-300 group"
                >
                  <Linkedin size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>
        </section>
    );
}