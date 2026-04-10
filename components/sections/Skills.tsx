'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layout, Database, Server, Activity, Zap, Shield, Brain } from "lucide-react";
import { useScrollAnimation } from "../useScrollAnimation";

export default function Skills() {
    const titleAnim = useScrollAnimation('blur-in', { threshold: 0.2 });
    const card1 = useScrollAnimation('flip-up', { delay: 0 });
    const card2 = useScrollAnimation('flip-up', { delay: 100 });
    const card3 = useScrollAnimation('flip-up', { delay: 200 });
    const card4 = useScrollAnimation('flip-up', { delay: 300 });
    const subTitleAnim = useScrollAnimation('fade-up', { delay: 100 });
    const spec1 = useScrollAnimation('stagger', { delay: 0 });
    const spec2 = useScrollAnimation('stagger', { delay: 120 });
    const spec3 = useScrollAnimation('stagger', { delay: 240 });

    return (
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div ref={titleAnim.ref} className={titleAnim.className}>
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-balance">Technical Expertise</h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div ref={card1.ref} className={card1.className}>
              <Card className="glass-card hover:scale-105 transition-transform duration-300 h-full">
                <CardContent className="p-6">
                  <Layout className="text-primary mb-4" size={40} />
                  <h3 className="font-semibold mb-4 text-lg">Frontend Development</h3>
                  <div className="space-y-2">
                    <Badge variant="secondary" className="mr-2 mb-2 py-1.5 px-3 text-sm font-medium">React</Badge>
                    <Badge variant="secondary" className="mr-2 mb-2 py-1.5 px-3 text-sm font-medium">Next.js</Badge>
                    <Badge variant="secondary" className="mr-2 mb-2 py-1.5 px-3 text-sm font-medium">Vue.js</Badge>
                    <Badge variant="secondary" className="mr-2 mb-2 py-1.5 px-3 text-sm font-medium">JavaScript / TS</Badge>
                    <Badge variant="secondary" className="mr-2 mb-2 py-1.5 px-3 text-sm font-medium">Tailwind CSS</Badge>
                    <Badge variant="secondary" className="mr-2 mb-2 py-1.5 px-3 text-sm font-medium">Vite</Badge>
                    <Badge variant="secondary" className="mr-2 mb-2 py-1.5 px-3 text-sm font-medium">HTML5 / CSS3</Badge>
                  </div>
                </CardContent>
              </Card>
              </div>

              <div ref={card2.ref} className={card2.className}>
              <Card className="glass-card hover:scale-105 transition-transform duration-300 h-full">
                <CardContent className="p-6">
                  <Database className="text-secondary mb-4" size={40} />
                  <h3 className="font-semibold mb-4 text-lg">Backend & Databases</h3>
                  <div className="space-y-2">
                    <Badge variant="secondary" className="mr-2 mb-2 py-1.5 px-3 text-sm font-medium">Node.js</Badge>
                    <Badge variant="secondary" className="mr-2 mb-2 py-1.5 px-3 text-sm font-medium">Laravel / PHP</Badge>
                    <Badge variant="secondary" className="mr-2 mb-2 py-1.5 px-3 text-sm font-medium">MySQL</Badge>
                    <Badge variant="secondary" className="mr-2 mb-2 py-1.5 px-3 text-sm font-medium">MongoDB</Badge>
                    <Badge variant="secondary" className="mr-2 mb-2 py-1.5 px-3 text-sm font-medium">RESTful APIs</Badge>
                    <Badge variant="secondary" className="mr-2 mb-2 py-1.5 px-3 text-sm font-medium">Auth (JWT / Session)</Badge>
                  </div>
                </CardContent>
              </Card>
              </div>

              <div ref={card3.ref} className={card3.className}>
              <Card className="glass-card hover:scale-105 transition-transform duration-300 h-full">
                <CardContent className="p-6">
                  <Server className="text-emerald-500 mb-4" size={40} />
                  <h3 className="font-semibold mb-4 text-lg">DevOps & Cloud</h3>
                  <div className="space-y-2">
                    <Badge variant="secondary" className="mr-2 mb-2 py-1.5 px-3 text-sm font-medium">cPanel Hosting</Badge>
                    <Badge variant="secondary" className="mr-2 mb-2 py-1.5 px-3 text-sm font-medium">Vercel & Netlify</Badge>
                    <Badge variant="secondary" className="mr-2 mb-2 py-1.5 px-3 text-sm font-medium">CI/CD & Git Auto-Deploy</Badge>
                    <Badge variant="secondary" className="mr-2 mb-2 py-1.5 px-3 text-sm font-medium">DNS & Domains</Badge>
                    <Badge variant="secondary" className="mr-2 mb-2 py-1.5 px-3 text-sm font-medium">Linux / Web Server</Badge>
                    <Badge variant="secondary" className="mr-2 mb-2 py-1.5 px-3 text-sm font-medium">Subdomain Routing</Badge>
                    <Badge variant="secondary" className="mr-2 mb-2 py-1.5 px-3 text-sm font-medium">Git / GitHub</Badge>
                  </div>
                </CardContent>
              </Card>
              </div>

              <div ref={card4.ref} className={card4.className}>
              <Card className="glass-card hover:scale-105 transition-transform duration-300 h-full">
                <CardContent className="p-6">
                  <Activity className="text-blue-500 mb-4" size={40} />
                  <h3 className="font-semibold mb-4 text-lg">Integrations & Tools</h3>
                  <div className="space-y-2">
                    <Badge variant="secondary" className="mr-2 mb-2 py-1.5 px-3 text-sm font-medium">Ameriabank API</Badge>
                    <Badge variant="secondary" className="mr-2 mb-2 py-1.5 px-3 text-sm font-medium">Stripe API</Badge>
                    <Badge variant="secondary" className="mr-2 mb-2 py-1.5 px-3 text-sm font-medium">EmailJS / SMTP</Badge>
                    <Badge variant="secondary" className="mr-2 mb-2 py-1.5 px-3 text-sm font-medium">Filament CMS</Badge>
                    <Badge variant="secondary" className="mr-2 mb-2 py-1.5 px-3 text-sm font-medium">WordPress / Woo</Badge>
                    <Badge variant="secondary" className="mr-2 mb-2 py-1.5 px-3 text-sm font-medium">Docker</Badge>
                  </div>
                </CardContent>
              </Card>
              </div>
            </div>

            <div className="mt-12">
              <div ref={subTitleAnim.ref} className={subTitleAnim.className}>
                <h3 className="text-2xl font-bold text-center mb-8 text-balance">Specialized Knowledge</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div ref={spec1.ref} className={spec1.className}>
                <Card className="glass-card hover:scale-105 transition-transform duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg mr-3">
                        <Zap className="text-primary" size={24} />
                      </div>
                      <h4 className="font-semibold text-lg">System Architecture</h4>
                    </div>
                    <div className="space-y-2">
                      <Badge variant="secondary" className="mr-2 mb-2 py-1.5 px-3 text-sm font-medium">Component-Driven UI</Badge>
                      <Badge variant="secondary" className="mr-2 mb-2 py-1.5 px-3 text-sm font-medium">DB Migration (NoSQL to SQL)</Badge>
                      <Badge variant="secondary" className="mr-2 mb-2 py-1.5 px-3 text-sm font-medium">eCommerce Financial Logic</Badge>
                      <Badge variant="secondary" className="mr-2 mb-2 py-1.5 px-3 text-sm font-medium">Secure Video Streaming</Badge>
                      <Badge variant="secondary" className="mr-2 mb-2 py-1.5 px-3 text-sm font-medium">Multi-tenant Architecture</Badge>
                      <Badge variant="secondary" className="mr-2 mb-2 py-1.5 px-3 text-sm font-medium">Real-time Synchronization</Badge>
                    </div>
                  </CardContent>
                </Card>
                </div>

                <div ref={spec2.ref} className={spec2.className}>
                <Card className="glass-card hover:scale-105 transition-transform duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-secondary/10 rounded-lg mr-3">
                        <Shield className="text-secondary" size={24} />
                      </div>
                      <h4 className="font-semibold text-lg">Performance & Security</h4>
                    </div>
                    <div className="space-y-2">
                      <Badge variant="secondary" className="mr-2 mb-2 py-1.5 px-3 text-sm font-medium">Technical SEO Optimization</Badge>
                      <Badge variant="secondary" className="mr-2 mb-2 py-1.5 px-3 text-sm font-medium">LCP / Core Web Vitals</Badge>
                      <Badge variant="secondary" className="mr-2 mb-2 py-1.5 px-3 text-sm font-medium">Next.js SSR / SSG</Badge>
                      <Badge variant="secondary" className="mr-2 mb-2 py-1.5 px-3 text-sm font-medium">Lazy Loading & Media Optimization</Badge>
                      <Badge variant="secondary" className="mr-2 mb-2 py-1.5 px-3 text-sm font-medium">CSRF / XSS Protection</Badge>
                      <Badge variant="secondary" className="mr-2 mb-2 py-1.5 px-3 text-sm font-medium">Direct Link Protection</Badge>
                    </div>
                  </CardContent>
                </Card>
                </div>

                <div ref={spec3.ref} className={spec3.className}>
                <Card className="glass-card hover:scale-105 transition-transform duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-purple-500/10 rounded-lg mr-3">
                        <Brain className="text-purple-500" size={24} />
                      </div>
                      <h4 className="font-semibold text-lg">AI Engineering</h4>
                    </div>
                    <div className="space-y-2">
                      <Badge variant="secondary" className="mr-2 mb-2 py-1.5 px-3 text-sm font-medium">AI-Assisted Coding</Badge>
                      <Badge variant="secondary" className="mr-2 mb-2 py-1.5 px-3 text-sm font-medium">LLM & RAG Integration</Badge>
                      <Badge variant="secondary" className="mr-2 mb-2 py-1.5 px-3 text-sm font-medium">Machine Learning</Badge>
                      <Badge variant="secondary" className="mr-2 mb-2 py-1.5 px-3 text-sm font-medium">Data Analytics</Badge>
                      <Badge variant="secondary" className="mr-2 mb-2 py-1.5 px-3 text-sm font-medium">PyTorch</Badge>
                      <Badge variant="secondary" className="mr-2 mb-2 py-1.5 px-3 text-sm font-medium">Pandas & NumPy</Badge>
                    </div>
                  </CardContent>
                </Card>
                </div>
              </div>
            </div>

          </div>
        </section>
    )
}
