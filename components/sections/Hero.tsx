import { ChevronDown, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "../ui/button"

// components/sections/Hero.tsx
export default function Hero(props: { scrollToSection: (arg0: string) => void; }) {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-background via-background to-card/30">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20"></div>
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
                  <span>+374 98 983797</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>arman.raf2001@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>Yerevan, Armenia</span>
                </div>
              </div>
    
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <ChevronDown size={24} className="text-muted-foreground" />
              </div>
            </div>
        </section>
    );
}