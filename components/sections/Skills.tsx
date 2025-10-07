'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Brain, Wrench, Users, CheckCircle, ImageIcon, Bot, Zap, Globe, Search, MessageSquare, Monitor, Settings, Mail, ExternalLink, MapPin } from "lucide-react";
import { useState } from "react";

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState('web');

    const categories = [
      { id: 'web', label: 'Web Development', icon: Monitor },
      { id: 'ai', label: 'AI & Automation', icon: Brain },
      { id: 'integration', label: 'Integrations', icon: Zap },
      { id: 'data', label: 'Data & Media', icon: Database },
    ];

    const services = {
      web: [
        { icon: Monitor, title: 'Landing Page Development', description: 'Design and build modern, responsive, and user-friendly landing pages', color: 'text-primary' },
        { icon: Settings, title: 'WordPress Plugin Development', description: 'Building and extending WordPress plugins with custom features and enhanced functionality', color: 'text-primary' },
        { icon: Globe, title: 'Multi-language Websites', description: 'Complete multi-language support for small websites with localization', color: 'text-primary' },
        { icon: Users, title: 'User Authentication', description: 'Login/Registration systems with secure authentication', color: 'text-secondary' },
        { icon: Code, title: 'Security Fixes', description: 'CSRF vulnerability fixes and security improvements', color: 'text-secondary' },
        { icon: Code, title: 'Design to Code', description: 'Website layouts from design mockups and wireframes', color: 'text-secondary' },
        { icon: Search, title: 'SEO Optimization', description: 'Complete SEO setup and optimization for better search rankings', color: 'text-primary' },
      ],
      ai: [
        { icon: Brain, title: 'AI Integration & RAG', description: 'AI-powered solutions with knowledge base integration', color: 'text-primary' },
        { icon: Bot, title: 'Telegram Bot Development', description: 'Custom Telegram bots for automation and user interaction', color: 'text-secondary' },
        { icon: Zap, title: 'Content & Process Automation', description: 'AI-powered content creation, automated responses, social media posting', color: 'text-secondary' },
        { icon: MessageSquare, title: 'Advertisement Banners', description: 'Custom banner creation and popup systems', color: 'text-primary' },
      ],
      integration: [
        { icon: CheckCircle, title: 'Payment Integration', description: 'Stripe, PayPal and other payment gateway integrations', color: 'text-primary' },
        { icon: Mail, title: 'Email Marketing', description: 'MailChimp and other email marketing system integrations with automation', color: 'text-primary' },
        { icon: MapPin, title: 'OpenStreetMap Integration', description: 'Integrate interactive maps with custom markers, routes, and geolocation features', color: 'text-primary' },
        { icon: ExternalLink, title: 'QR Code Systems', description: 'QR code generation and processing solutions', color: 'text-secondary' },
      ],
      data: [
        { icon: Database, title: 'Database Management', description: 'MySQL, MongoDB Atlas setup and optimization', color: 'text-primary' },
        { icon: Database, title: 'Data Export/Import', description: 'CSV, XLSX, JSON data processing and conversion', color: 'text-secondary' },
        { icon: ImageIcon, title: 'Media Management', description: 'Cloudinary integration for advanced media handling', color: 'text-secondary' },
        { icon: ExternalLink, title: 'PDF Conversion', description: 'HTML to PDF conversion and document generation', color: 'text-primary' },
      ],
    };

    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
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
                    <Badge className="mr-2 mb-2">Supabase</Badge>
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
              <h3 className="text-2xl font-bold text-center mb-8 text-balance">Web Development Services</h3>
              
              {/* Category Tabs */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`
                        flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer
                        ${activeCategory === category.id 
                          ? 'bg-primary text-primary-foreground shadow-lg scale-105' 
                          : 'glass-card hover:scale-105 hover:bg-primary/10'
                        }
                      `}
                    >
                      <Icon size={20} />
                      <span className="hidden sm:inline">{category.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Services Grid with Animation */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services[activeCategory as keyof typeof services].map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <Card 
                      key={index}
                      className="glass-card hover:scale-105 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <CardContent className="p-6">
                        <Icon className={`${service.color} mb-4`} size={32} />
                        <h4 className="font-semibold mb-2">{service.title}</h4>
                        <p className="text-sm text-muted-foreground">
                          {service.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
    )
}
