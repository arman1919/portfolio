
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Brain, Wrench, GraduationCap, Languages, Users, CheckCircle, Award, ImageIcon, Bot, Zap, Globe, Search, MessageSquare, Monitor, Settings, Mail,ExternalLink } from "lucide-react";

export default function Skills() {
    return (
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
    )
}