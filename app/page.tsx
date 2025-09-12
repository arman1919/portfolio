"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Menu,
  X,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Github,
  ExternalLink,
  Code,
  Database,
  Brain,
  Wrench,
  GraduationCap,
  Languages,
  Users,
  CheckCircle,
  Award,
  ImageIcon,
  Filter,
  Bot,
  Zap,
  Globe,
  Search,
  MessageSquare,
  Monitor,
  Settings,
} from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "gallery", "experience", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const galleryImages = [
    { id: 1, src: "/portfolio-images/analytics-menu.png", category: "wordpress", title: "Analytics Menu" },
    { id: 2, src: "/portfolio-images/analytic-tab.png", category: "wordpress", title: "Analytics Tab" },
    { id: 3, src: "/portfolio-images/announcements-front.png", category: "wordpress", title: "Announcements Frontend Tab" },
    { id: 4, src: "/portfolio-images/attachment-section.png", category: "wordpress", title: "Attachment Admin Panel" },
    { id: 5, src: "/portfolio-images/color-palette.png", category: "wordpress", title: "Color Palette System" },
    { id: 6, src: "/portfolio-images/coupon-admin.png", category: "payment", title: "Coupon Admin Panel" },
    { id: 7, src: "/portfolio-images/coupon-front.png", category: "payment", title: "Coupon Frontend" },
    { id: 8, src: "/portfolio-images/gamipress.png", category: "wordpress", title: "GamiPress Integration Admin Panel" },
    { id: 9, src: "/portfolio-images/notifications.png", category: "wordpress", title: "Notifications System Frontend" },
    { id: 10, src: "/portfolio-images/paymeny.png", category: "payment", title: "Payment Integration Admin Panel" },
    { id: 11, src: "/portfolio-images/popup-1.png", category: "banners", title: "Popup Plugin Frontend" },
    { id: 12, src: "/portfolio-images/popup-demo-1.png", category: "website", title: "Popup Plugin Demo Landing Page" },
    { id: 13, src: "/portfolio-images/popup-demo-2.png", category: "website", title: "Popup Plugin Free Demo Landing Page" },
    { id: 14, src: "/portfolio-images/q-and-a-front.png", category: "wordpress", title: "Questions & Answers Frontend" },
    { id: 15, src: "/portfolio-images/registration-login-1.png", category: "dashboard", title: "Login Form Admin Panel" },
    { id: 16, src: "/portfolio-images/registration-login-2.png", category: "dashboard", title: "Registration Form Admin Panel" },
    { id: 17, src: "/portfolio-images/schedule-course-section.png", category: "wordpress", title: "Schedule Course Admin Panel" },
    { id: 18, src: "/portfolio-images/levelstudio-1.png", category: "website", title: "LevelStudio.am" },
    { id: 19, src: "/portfolio-images/levelstudio-2.png", category: "website", title: "LevelStudio.am Calculator" },
    { id: 20, src: "/portfolio-images/popup-2.png", category: "banners", title: "Plugin Sale Popup" },
    { id: 21, src: "/portfolio-images/banner-1.png", category: "banners", title: "Banner Admin Panel" },
  ]

  const filteredImages =
    selectedCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 3000)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-primary">AR</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {[
                  { id: "home", label: "Home" },
                  { id: "about", label: "About" },
                  { id: "skills", label: "Skills" },
                  { id: "projects", label: "Projects" },
                  { id: "gallery", label: "Gallery" },
                  { id: "experience", label: "Experience" },
                  { id: "contact", label: "Contact" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeSection === item.id
                        ? "text-primary-foreground bg-primary border border-primary"
                        : "hover:bg-slate-100/20"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-foreground hover:text-primary">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden glass-card border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "skills", label: "Skills" },
                { id: "projects", label: "Projects" },
                { id: "gallery", label: "Gallery" },
                { id: "experience", label: "Experience" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${
                    activeSection === item.id
                      ? "text-primary-foreground bg-primary border border-primary"
                      : "hover:bg-slate-100/20"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
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
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Get In Touch
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("projects")}
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

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-balance">About Me</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column: Education & Professional Journey */}
            <div className="space-y-8">
              <div>
                <p className="text-xl text-muted-foreground mb-6 text-pretty leading-relaxed">
                I am a fullstack web developer, creating modern, responsive landing pages and web applications that are both visually appealing and user-friendly. I handle the full development process, from interface design and frontend layout to server-side logic, databases, and cloud integration.                </p>
                <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
                I also have experience with machine learning for data processing, allowing me to add intelligent features to web projects.
                </p>
              </div>

              {/* Education Card */}
              <Card className="glass-card">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-primary/10 rounded-xl mr-4">
                      <GraduationCap className="text-primary" size={32} />
                    </div>
                    <h3 className="font-bold text-xl">Education</h3>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="border-l-4 border-primary/40 pl-6 pb-6">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-bold text-base text-primary">Picsart Academy</h4>
                        <Badge variant="default" className="text-sm bg-primary/20">Python Engineer</Badge>
                      </div>
                      <p className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">Technologies</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-sm hover:bg-primary/10 transition-colors">Computer Architecture</Badge>
                        <Badge variant="outline" className="text-sm hover:bg-primary/10 transition-colors">Python</Badge>
                        <Badge variant="outline" className="text-sm hover:bg-primary/10 transition-colors">OOAD (OOP)</Badge>
                        <Badge variant="outline" className="text-sm hover:bg-primary/10 transition-colors">Essential Mathematics</Badge>
                        <Badge variant="outline" className="text-sm hover:bg-primary/10 transition-colors">Linux</Badge>
                        <Badge variant="outline" className="text-sm hover:bg-primary/10 transition-colors">Network Systems</Badge>
                        <Badge variant="outline" className="text-sm hover:bg-primary/10 transition-colors">C Language</Badge>
                        <Badge variant="outline" className="text-sm hover:bg-primary/10 transition-colors">AI Internship</Badge>
                        <Badge variant="outline" className="text-sm hover:bg-primary/10 transition-colors">Algorithms</Badge>
                      </div>
                    </div>
                    
                    <div className="border-l-4 border-secondary/40 pl-6">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-bold text-base text-secondary">Yerevan State University</h4>
                        <Badge variant="default" className="text-sm bg-secondary/20">Informatics & Applied Math</Badge>
                      </div>
                      <p className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">Courses</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="text-sm hover:bg-secondary/10 transition-colors">Higher Mathematics</Badge>
                        <Badge variant="outline" className="text-sm hover:bg-secondary/10 transition-colors">Algorithms</Badge>
                        <Badge variant="outline" className="text-sm hover:bg-secondary/10 transition-colors">Discrete Mathematics</Badge>
                        <Badge variant="outline" className="text-sm hover:bg-secondary/10 transition-colors">C++</Badge>
                        <Badge variant="outline" className="text-sm hover:bg-secondary/10 transition-colors">Functional Mathematics</Badge>
                        <Badge variant="outline" className="text-sm hover:bg-secondary/10 transition-colors">Analytics</Badge>
                        <Badge variant="outline" className="text-sm hover:bg-secondary/10 transition-colors">Databases</Badge>
                        <Badge variant="outline" className="text-sm hover:bg-secondary/10 transition-colors">Differential Equations</Badge>
                        <Badge variant="outline" className="text-sm hover:bg-secondary/10 transition-colors">Physics</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Professional Journey Card */}
              {/* <Card className="glass-card">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-secondary/10 rounded-xl mr-4">
                      <Award className="text-secondary" size={32} />
                    </div>
                    <h3 className="font-bold text-xl">Professional Journey</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary/30 pl-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <span className="text-sm font-semibold text-primary">2023 - Present</span>
                      </div>
                      <h4 className="font-bold text-base mb-2">Full-Stack Developer</h4>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        Developing complex web applications with modern frameworks, integrating AI/ML solutions, and building scalable systems for various clients.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-secondary/30 pl-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-3 h-3 bg-secondary rounded-full"></div>
                        <span className="text-sm font-semibold text-secondary">2022 - 2023</span>
                      </div>
                      <h4 className="font-bold text-base mb-2">Python Engineer Intern</h4>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        Gained hands-on experience in software development, machine learning algorithms, and system architecture at Picsart Academy.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card> */}
            </div>

            {/* Right Column: Skills & Languages */}
            <div className="space-y-8">
              {/* Technical Skills Card */}
              {/* <Card className="glass-card">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-primary/10 rounded-xl mr-4">
                      <Code className="text-primary" size={32} />
                    </div>
                    <h3 className="font-bold text-xl">Technical Skills</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-base mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Programming Languages
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-1">
                        <Badge className="text-sm bg-primary/30 text-white border border-primary/50">PHP</Badge>
                        <Badge className="text-sm bg-primary/30 text-white border border-primary/50">Java Script</Badge>
                        <Badge className="text-sm bg-primary/30 text-white border border-primary/50">Python</Badge>
                        <Badge className="text-sm bg-primary/30 text-white border border-primary/50">C++</Badge>
                        <Badge className="text-sm bg-primary/30 text-white border border-primary/50">C Language</Badge>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-base mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        Web Development Frontend
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-1">
                        <Badge className="text-sm bg-secondary/30 text-white border border-secondary/50">React</Badge>
                        <Badge className="text-sm bg-secondary/30 text-white border border-secondary/50">Next.js</Badge>
                        <Badge className="text-sm bg-secondary/30 text-white border border-secondary/50">Tailwind CSS</Badge>
                        <Badge className="text-sm bg-secondary/30 text-white border border-secondary/50">Bootstrap</Badge>
                        <Badge className="text-sm bg-secondary/30 text-white border border-secondary/50">HTML</Badge>
                        <Badge className="text-sm bg-secondary/30 text-white border border-secondary/50">CSS</Badge>
                        <Badge className="text-sm bg-secondary/30 text-white border border-secondary/50">jQuery</Badge>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-base mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Web Development Backend
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-1">
                        <Badge className="text-sm bg-primary/30 text-white border border-primary/50">Node.js</Badge>
                        <Badge className="text-sm bg-primary/30 text-white border border-primary/50">AJAX</Badge>
                        <Badge className="text-sm bg-primary/30 text-white border border-primary/50">jQuery</Badge>
                        <Badge className="text-sm bg-primary/30 text-white border border-primary/50">REST</Badge>
                        <Badge className="text-sm bg-primary/30 text-white border border-primary/50">MongoDB (Atlas)</Badge>
                        <Badge className="text-sm bg-primary/30 text-white border border-primary/50">MySQL</Badge>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-base mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full"></div>
                        AI/ML & Data
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-1">
                        <Badge className="text-sm bg-secondary/30 text-white border border-secondary/50">Machine Learning</Badge>
                        <Badge className="text-sm bg-secondary/30 text-white border border-secondary/50">Algorithms</Badge>
                        <Badge className="text-sm bg-secondary/30 text-white border border-secondary/50">LLM</Badge>
                        <Badge className="text-sm bg-secondary/30 text-white border border-secondary/50">RAG</Badge>
                        <Badge className="text-sm bg-secondary/30 text-white border border-secondary/50">PyTorch</Badge>
                        <Badge className="text-sm bg-secondary/30 text-white border border-secondary/50">Data Analytics</Badge>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-base mb-3 flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        Infrastructure & Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge className="text-sm bg-primary/30 text-white border border-primary/50">Wordpress</Badge>
                        <Badge className="text-sm bg-primary/30 text-white border border-primary/50">WooCommerce</Badge>
                        <Badge className="text-sm bg-primary/30 text-white border border-primary/50">Linux</Badge>
                        <Badge className="text-sm bg-primary/30 text-white border border-primary/50">Git</Badge>
                        <Badge className="text-sm bg-primary/30 text-white border border-primary/50">Docker</Badge>
                        <Badge className="text-sm bg-primary/30 text-white border border-primary/50">Cloudinary</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card> */}

              {/* Soft Skills Card */}
              <Card className="glass-card">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-secondary/10 rounded-xl mr-4">
                      <Users className="text-secondary" size={32} />
                    </div>
                    <h3 className="font-bold text-xl">Soft Skills</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-base font-medium">Problem Solving</span>
                      <div className="flex gap-1">
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-base font-medium">Team Collaboration</span>
                      <div className="flex gap-1">
                        <div className="w-3 h-3 bg-secondary rounded-full"></div>
                        <div className="w-3 h-3 bg-secondary rounded-full"></div>
                        <div className="w-3 h-3 bg-secondary rounded-full"></div>
                        <div className="w-3 h-3 bg-secondary rounded-full"></div>
                        <div className="w-3 h-3 bg-muted rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-base font-medium">Communication</span>
                      <div className="flex gap-1">
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <div className="w-3 h-3 bg-muted rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-base font-medium">Leadership</span>
                      <div className="flex gap-1">
                        <div className="w-3 h-3 bg-secondary rounded-full"></div>
                        <div className="w-3 h-3 bg-secondary rounded-full"></div>
                        <div className="w-3 h-3 bg-secondary rounded-full"></div>
                        <div className="w-3 h-3 bg-secondary rounded-full"></div>
                        <div className="w-3 h-3 bg-muted rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-base font-medium">Adaptability</span>
                      <div className="flex gap-1">
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Languages Card */}
              <Card className="glass-card">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-primary/10 rounded-xl mr-4">
                      <Languages className="text-primary" size={32} />
                    </div>
                    <h3 className="font-bold text-xl">Languages</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-base font-semibold">Armenian</span>
                        <p className="text-sm text-muted-foreground">Native</p>
                      </div>
                      <div className="flex gap-1">
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                        <div className="w-3 h-3 bg-primary rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-base font-semibold">English</span>
                        <p className="text-sm text-muted-foreground">Fluent</p>
                      </div>
                      <div className="flex gap-1">
                        <div className="w-3 h-3 bg-secondary rounded-full"></div>
                        <div className="w-3 h-3 bg-secondary rounded-full"></div>
                        <div className="w-3 h-3 bg-secondary rounded-full"></div>
                        <div className="w-3 h-3 bg-secondary rounded-full"></div>
                        <div className="w-3 h-3 bg-muted rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-base font-semibold">Russian</span>
                        <p className="text-sm text-muted-foreground">Fluent</p>
                      </div>
                      <div className="flex gap-1">
                        <div className="w-3 h-3 bg-secondary rounded-full"></div>
                        <div className="w-3 h-3 bg-secondary rounded-full"></div>
                        <div className="w-3 h-3 bg-secondary rounded-full"></div>
                        <div className="w-3 h-3 bg-secondary rounded-full"></div>
                        <div className="w-3 h-3 bg-muted rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-balance">Skills & Technologies</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            <Card className="glass-card hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <Code className="text-primary mb-4" size={40} />
                <h3 className="font-semibold mb-4">Programming Languages</h3>
                <div className="space-y-2">
                  <Badge className="mr-2 mb-2">PHP</Badge>
                  <Badge className="mr-2 mb-2">JavaScript</Badge>
                  <Badge className="mr-2 mb-2">Python</Badge>
                  <Badge className="mr-2 mb-2">C++</Badge>
                  <Badge className="mr-2 mb-2">C Language</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <Database className="text-secondary mb-4" size={40} />
                <h3 className="font-semibold mb-4">Frontend</h3>
                <div className="space-y-2">
                  <Badge className="mr-2 mb-2">React</Badge>
                  <Badge className="mr-2 mb-2">Next.js</Badge>
                  <Badge className="mr-2 mb-2">Tailwind CSS</Badge>
                  <Badge className="mr-2 mb-2">Bootstrap</Badge>
                  <Badge className="mr-2 mb-2">HTML</Badge>
                  <Badge className="mr-2 mb-2">CSS</Badge>
                  <Badge className="mr-2 mb-2">jQuery</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <Database className="text-primary mb-4" size={40} />
                <h3 className="font-semibold mb-4">Backend</h3>
                <div className="space-y-2">
                  <Badge className="mr-2 mb-2">Node.js</Badge>
                  <Badge className="mr-2 mb-2">AJAX</Badge>
                  <Badge className="mr-2 mb-2">REST API</Badge>
                  <Badge className="mr-2 mb-2">MongoDB (Atlas)</Badge>
                  <Badge className="mr-2 mb-2">MySQL</Badge>
                  <Badge className="mr-2 mb-2">Payment APIs</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <Brain className="text-secondary mb-4" size={40} />
                <h3 className="font-semibold mb-4">AI/ML & Data</h3>
                <div className="space-y-2">
                  <Badge className="mr-2 mb-2">Machine Learning</Badge>
                  <Badge className="mr-2 mb-2">Algorithms</Badge>
                  <Badge className="mr-2 mb-2">LLM</Badge>
                  <Badge className="mr-2 mb-2">RAG</Badge>
                  <Badge className="mr-2 mb-2">PyTorch</Badge>
                  <Badge className="mr-2 mb-2">Data Analytics</Badge>
                  <Badge className="mr-2 mb-2">Pandas</Badge>
                  <Badge className="mr-2 mb-2">NumPy</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <Wrench className="text-primary mb-4" size={40} />
                <h3 className="font-semibold mb-4">Infrastructure & Tools</h3>
                <div className="space-y-2">
                  <Badge className="mr-2 mb-2">WordPress</Badge>
                  <Badge className="mr-2 mb-2">WooCommerce</Badge>
                  <Badge className="mr-2 mb-2">Linux</Badge>
                  <Badge className="mr-2 mb-2">Git</Badge>
                  <Badge className="mr-2 mb-2">Docker</Badge>
                  <Badge className="mr-2 mb-2">Cloudinary</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-balance">Specialized Skills</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glass-card hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg mr-3">
                      <Code className="text-primary" size={24} />
                    </div>
                    <h4 className="font-semibold">Security & APIs</h4>
                  </div>
                  <div className="space-y-2">
                    <Badge className="mr-2 mb-2">CSRF Protection</Badge>
                    <Badge className="mr-2 mb-2">Stripe API</Badge>
                    <Badge className="mr-2 mb-2">PayPal Integration</Badge>
                    <Badge className="mr-2 mb-2">Third-party APIs</Badge>
                    <Badge className="mr-2 mb-2">MailChimp API</Badge>
                    <Badge className="mr-2 mb-2">Authentication Systems</Badge>
                    <Badge className="mr-2 mb-2">Zapier Webhooks</Badge>
                    <Badge className="mr-2 mb-2">ActiveCampaign</Badge>
                    <Badge className="mr-2 mb-2">Google Sheets Integration</Badge>
                    <Badge className="mr-2 mb-2">GetResponse API</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-secondary/10 rounded-lg mr-3">
                      <Database className="text-secondary" size={24} />
                    </div>
                    <h4 className="font-semibold">Data Management</h4>
                  </div>
                  <div className="space-y-2">
                    <Badge className="mr-2 mb-2">Database Design</Badge>
                    <Badge className="mr-2 mb-2">CSV Processing</Badge>
                    <Badge className="mr-2 mb-2">XLSX Export</Badge>
                    <Badge className="mr-2 mb-2">JSON APIs</Badge>
                    <Badge className="mr-2 mb-2">QR Code Generation</Badge>
                    <Badge className="mr-2 mb-2">PDF Conversion</Badge>
                    <Badge className="mr-2 mb-2">Data Migration/Backup</Badge>
                    <Badge className="mr-2 mb-2">Caching</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-12 text-balance">Web Development Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <Card className="glass-card hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <Monitor className="text-primary mb-4" size={32} />
                  <h4 className="font-semibold mb-2">Landing Page Development</h4>
                  <p className="text-sm text-muted-foreground">
                    Design and build modern, responsive, and user-friendly landing pages
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <Brain className="text-primary mb-4" size={32} />
                  <h4 className="font-semibold mb-2">AI Integration & RAG</h4>
                  <p className="text-sm text-muted-foreground">AI-powered solutions with knowledge base integration</p>
                </CardContent>
              </Card>

              <Card className="glass-card hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <Settings className="text-primary mb-4" size={32} />
                  <h4 className="font-semibold mb-2">WordPress Plugin Development</h4>
                  <p className="text-sm text-muted-foreground">
                    Building and extending WordPress plugins with custom features and enhanced functionality
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <Globe className="text-primary mb-4" size={32} />
                  <h4 className="font-semibold mb-2">Multi-language Websites</h4>
                  <p className="text-sm text-muted-foreground">
                    Complete multi-language support for small websites with localization
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <Users className="text-secondary mb-4" size={32} />
                  <h4 className="font-semibold mb-2">User Authentication</h4>
                  <p className="text-sm text-muted-foreground">Login/Registration systems with secure authentication</p>
                </CardContent>
              </Card>

              <Card className="glass-card hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <CheckCircle className="text-primary mb-4" size={32} />
                  <h4 className="font-semibold mb-2">Payment Integration</h4>
                  <p className="text-sm text-muted-foreground">Stripe, PayPal and other payment gateway integrations</p>
                </CardContent>
              </Card>

              <Card className="glass-card hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <ImageIcon className="text-secondary mb-4" size={32} />
                  <h4 className="font-semibold mb-2">Media Management</h4>
                  <p className="text-sm text-muted-foreground">Cloudinary integration for advanced media handling</p>
                </CardContent>
              </Card>

              <Card className="glass-card hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <Mail className="text-primary mb-4" size={32} />
                  <h4 className="font-semibold mb-2">Email Marketing</h4>
                  <p className="text-sm text-muted-foreground">MailChimp and other email marketing system integrations with automation</p>
                </CardContent>
              </Card>

              <Card className="glass-card hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <Code className="text-secondary mb-4" size={32} />
                  <h4 className="font-semibold mb-2">Security Fixes</h4>
                  <p className="text-sm text-muted-foreground">CSRF vulnerability fixes and security improvements</p>
                </CardContent>
              </Card>

              <Card className="glass-card hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <Database className="text-primary mb-4" size={32} />
                  <h4 className="font-semibold mb-2">Database Management</h4>
                  <p className="text-sm text-muted-foreground">MySQL, MongoDB Atlas setup and optimization</p>
                </CardContent>
              </Card>

              <Card className="glass-card hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <ExternalLink className="text-secondary mb-4" size={32} />
                  <h4 className="font-semibold mb-2">QR Code Systems</h4>
                  <p className="text-sm text-muted-foreground">QR code generation and processing solutions</p>
                </CardContent>
              </Card>

              <Card className="glass-card hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <ExternalLink className="text-primary mb-4" size={32} />
                  <h4 className="font-semibold mb-2">PDF Conversion</h4>
                  <p className="text-sm text-muted-foreground">HTML to PDF conversion and document generation</p>
                </CardContent>
              </Card>

              <Card className="glass-card hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <Database className="text-secondary mb-4" size={32} />
                  <h4 className="font-semibold mb-2">Data Export/Import</h4>
                  <p className="text-sm text-muted-foreground">CSV, XLSX, JSON data processing and conversion</p>
                </CardContent>
              </Card>

              <Card className="glass-card hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <MessageSquare className="text-primary mb-4" size={32} />
                  <h4 className="font-semibold mb-2">Advertisement Banners</h4>
                  <p className="text-sm text-muted-foreground">Custom banner creation and popup systems</p>
                </CardContent>
              </Card>

              <Card className="glass-card hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <Code className="text-secondary mb-4" size={32} />
                  <h4 className="font-semibold mb-2">Design to Code</h4>
                  <p className="text-sm text-muted-foreground">Website layouts from design mockups and wireframes</p>
                </CardContent>
              </Card>

              <Card className="glass-card hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <Bot className="text-secondary mb-4" size={32} />
                  <h4 className="font-semibold mb-2">Telegram Bot Development</h4>
                  <p className="text-sm text-muted-foreground">
                    Custom Telegram bots for automation and user interaction
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <Zap className="text-secondary mb-4" size={32} />
                  <h4 className="font-semibold mb-2">Content & Process Automation</h4>
                  <p className="text-sm text-muted-foreground">
                    AI-powered content creation, automated responses, social media posting
                  </p>
                </CardContent>
              </Card>

              <Card className="glass-card hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <Search className="text-primary mb-4" size={32} />
                  <h4 className="font-semibold mb-2">SEO Optimization</h4>
                  <p className="text-sm text-muted-foreground">
                    Complete SEO setup and optimization for better search rankings
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-balance">Featured Projects</h2>

          <div className="grid lg:grid-cols-3 gap-8">
          <Card className="glass-card hover:scale-105 transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  DROPIC – Photo Album Manager
                </h3>
                <p className="text-muted-foreground text-sm mb-4 text-pretty">
                  Web application for managing public photo albums with user authentication, 
                  cloud-based uploads, and sharing via public links or QR codes. Built with a fully responsive design 
                  and scalable serverless architecture.
                </p>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="outline">Next.js 14</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">MongoDB Atlas</Badge>
                  <Badge variant="outline">Cloudinary</Badge>
                  <Badge variant="outline">JWT</Badge>
                  <Badge variant="outline">Vercel</Badge>
                </div>
              </div>

              <ul className="text-sm text-muted-foreground mb-6 space-y-1">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-primary" />
                  User authentication
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-primary" />
                  Cloud-based image uploads
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-primary" />
                  Album sharing via public links & QR codes
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-primary" />
                  Fully responsive UI
                </li>
              </ul>

              <div className="flex gap-2">
                <Button size="sm" asChild className="flex-1">
                  <a href="https://dropic-sable.vercel.app" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={14} className="mr-2" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>


          <Card className="glass-card hover:scale-105 transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  Demo Website – PopupBox Plugin Pro
                </h3>
                <p className="text-muted-foreground text-sm mb-4 text-pretty">
                  A showcase website built to demonstrate PopupBox Plugin Pro for WordPress. 
                  Features clean modern design, responsive layout, interactive pricing tables, 
                  testimonials, FAQ section, and live popup demos for subscriptions and downloads.
                </p>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="outline">Wordpress</Badge>
                  <Badge variant="outline">JavaScript</Badge>
                  <Badge variant="outline">PHP</Badge>
                  <Badge variant="outline">HTML</Badge>
                  <Badge variant="outline">CSS</Badge>
                </div>
              </div>

              <ul className="text-sm text-muted-foreground mb-6 space-y-1">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-primary" />
                  Responsive multi-section landing page
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-primary" />
                  Interactive pricing tables & plan switcher
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-primary" />
                  Testimonials and FAQ sections
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-primary" />
                  Live popup demo integration
                </li>
              </ul>

              <div className="flex gap-2">
                <Button size="sm" asChild className="flex-1">
                  <a href="https://demo.popup-plugin.com/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={14} className="mr-2" />
                    Live Site
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>


          <Card className="glass-card hover:scale-105 transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  Demo Website – PopupBox Plugin Free
                </h3>
                <p className="text-muted-foreground text-sm mb-4 text-pretty">
                  A demo page showcasing the free version of the PopupBox WordPress plugin. 
                  Designed to demonstrate popup features like subscription forms, countdown timers, and coupon offers 
                  to increase user engagement and conversions.
                </p>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="outline">WordPress</Badge>
                  <Badge variant="outline">JavaScript</Badge>
                  <Badge variant="outline">PHP</Badge>
                  <Badge variant="outline">HTML</Badge>
                  <Badge variant="outline">CSS</Badge>
                </div>
              </div>

              <ul className="text-sm text-muted-foreground mb-6 space-y-1">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-primary" />
                  Subscription popups with forms
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-primary" />
                  Countdown timers & coupon popups
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-primary" />
                  Interactive popup demos
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-primary" />
                  Fully responsive demo page
                </li>
              </ul>

              <div className="flex gap-2">
                <Button size="sm" asChild className="flex-1">
                  <a 
                    href="https://demo.popup-plugin.com/wordpress-popup-plugin-free-demo/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={14} className="mr-2" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card hover:scale-105 transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                 Level Studio - Marketing Studio Website
                </h3>
                <p className="text-muted-foreground text-sm mb-4 text-pretty">
                  Minimalist and functional design for a marketing and photo-video studio in Yerevan. 
                  Focused on intuitive navigation, visual portfolio presentation, and responsive layout 
                  to engage business clients effectively.
                </p>
              </div>

              <div className="mb-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="outline">UI/UX Design</Badge>
                  <Badge variant="outline">Responsive Layout</Badge>
                  <Badge variant="outline">Portfolio Showcase</Badge>
                  <Badge variant="outline">JS HTML/CSS</Badge>
                  <Badge variant="outline">EmailJS</Badge>
                </div>
              </div>

              <ul className="text-sm text-muted-foreground mb-6 space-y-1">
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-primary" />
                  Intuitive navigation and smooth scrolling
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-primary" />
                  Emphasis on portfolio visuals and multimedia
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-primary" />
                  Mobile-first, fully responsive design
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-primary" />
                  Minimalist aesthetic with professional accents
                </li>
              </ul>

              <div className="flex gap-2">
                <Button size="sm" asChild className="flex-1">
                  <a href="https://levelstudio.am/" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={14} className="mr-2" />
                    Live Site
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>


          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-balance">Portfolio Gallery</h2>

          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-2 p-2 glass-card rounded-lg">
              {[
                { id: "all", label: "All Projects" },
                { id: "wordpress", label: "WordPress" },
                { id: "plugin", label: "Plugin Development" },
                { id: "website", label: "Website Development" },
                { id: "payment", label: "Payment Integration" },
                { id: "dashboard", label: "Admin Panels" },
                { id: "banners", label: "Advertisement" },
              ].map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/10"
                  }`}
                >
                  <Filter size={14} className="mr-2 inline" />
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Gallery Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredImages.map((image) => (
              <div 
                key={image.id} 
                className="relative group cursor-pointer overflow-hidden rounded-lg bg-card shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img 
                    src={image.src || "/placeholder.svg"} 
                    alt={image.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
                
                {/* Magnifying Glass Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <Search size={32} className="text-white" />
                  </div>
                </div>
                
                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h3 className="text-white font-medium text-sm">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Modal */}
          {selectedImage && (
            <div 
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-2 sm:p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative w-full h-full max-w-7xl overflow-auto flex items-center justify-center">
                <div className="w-full max-h-full flex items-center justify-center p-4">
                  <img 
                    src={selectedImage} 
                    alt="Portfolio Image" 
                    className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black/70 hover:bg-black/90 text-white rounded-full p-2 sm:p-3 transition-colors z-10 backdrop-blur-sm"
                >
                  <X size={20} className="sm:w-6 sm:h-6" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Professional Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-balance">Professional Experience</h2>

          <div className="space-y-8">
            <Card className="glass-card">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary">Senior Full-Stack Developer</h3>
                    <p className="text-lg text-muted-foreground">Tech Solutions Armenia</p>
                  </div>
                  <Badge variant="outline" className="mt-2 md:mt-0">
                    2022 - Present
                  </Badge>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Led development of 15+ web applications with 99.9% uptime</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Implemented payment systems processing $2M+ in transactions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Reduced page load times by 60% through optimization techniques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Mentored 5 junior developers and established coding standards</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary">Web Developer & ML Engineer</h3>
                    <p className="text-lg text-muted-foreground">Digital Innovation Lab</p>
                  </div>
                  <Badge variant="outline" className="mt-2 md:mt-0">
                    2020 - 2022
                  </Badge>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Developed ML models achieving 95% accuracy in data classification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Built responsive web applications serving 50K+ daily users</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Integrated AI solutions reducing manual processing by 80%</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Collaborated with cross-functional teams on 10+ projects</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-primary">Junior Web Developer</h3>
                    <p className="text-lg text-muted-foreground">StartUp Hub Yerevan</p>
                  </div>
                  <Badge variant="outline" className="mt-2 md:mt-0">
                    2019 - 2020
                  </Badge>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Contributed to 8 successful product launches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Improved code quality through testing and code reviews</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Learned modern frameworks and development best practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Participated in agile development processes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Let's Work Together Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Ready to bring your ideas to life? I specialize in creating modern, scalable web solutions that drive
            results.
          </p>
          <p className="text-lg text-muted-foreground mb-12 text-pretty">
            From full-stack development to AI integration, I offer comprehensive services to help your business grow.
            Let's discuss how we can collaborate to build something amazing together.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="glass-card">
              <CardContent className="p-6 text-center">
                <Code className="text-primary mb-4 mx-auto" size={40} />
                <h3 className="font-semibold mb-2">Full-Stack Development</h3>
                <p className="text-sm text-muted-foreground">Complete web solutions from frontend to backend</p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-6 text-center">
                <Brain className="text-secondary mb-4 mx-auto" size={40} />
                <h3 className="font-semibold mb-2">AI Integration</h3>
                <p className="text-sm text-muted-foreground">Smart automation and machine learning solutions</p>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-6 text-center">
                <Zap className="text-primary mb-4 mx-auto" size={40} />
                <h3 className="font-semibold mb-2">Performance Optimization</h3>
                <p className="text-sm text-muted-foreground">Fast, scalable, and user-friendly applications</p>
              </CardContent>
            </Card>
          </div>

          <Button
            onClick={() => scrollToSection("contact")}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Start Your Project
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-balance">Get In Touch</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Start a Conversation</h3>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                I'm always interested in new opportunities and exciting projects. Whether you have a specific idea in
                mind or just want to explore possibilities, I'd love to hear from you.
              </p>

              <div className="space-y-6">
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Mail className="text-primary" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold">Email</h4>
                        <p className="text-muted-foreground">arman.raf2001@gmail.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-secondary/10 rounded-lg">
                        <Phone className="text-secondary" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold">Phone</h4>
                        <p className="text-muted-foreground">+374 98 983797</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <MapPin className="text-primary" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold">Location</h4>
                        <p className="text-muted-foreground">Yerevan, Armenia</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Card className="glass-card">
              <CardContent className="p-8">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  {submitStatus === "success" && <p className="text-center text-primary">Message sent successfully!</p>}
                  {submitStatus === "error" && <p className="text-center text-destructive">Failed to send message. Please try again.</p>}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-card/30 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-muted-foreground">© 2024 Arman Rafayelyan. All rights reserved.</p>
              <p className="text-sm text-muted-foreground">Built with React, Next.js & Tailwind CSS</p>
            </div>

            <div className="flex items-center gap-6">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                <Github size={20} />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                <Mail size={20} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection("home")}
                className="text-muted-foreground hover:text-primary"
              >
                Back to Top
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
