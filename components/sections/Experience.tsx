import { CheckCircle, Calendar, MapPin, Building2, Code, Briefcase } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

export default function Experience() {
    return (
        <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                        <Briefcase size={20} className="text-primary" />
                        <span className="text-sm font-medium text-primary">Career Journey</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">Professional Experience</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">My journey through different roles and technologies, building expertise in web development and AI</p>
                </div>

                {/* Timeline line */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-primary/20 h-full"></div>
                
                <div className="space-y-12">
                    <div className="relative md:flex md:items-center">
                        {/* Timeline dot */}
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
                        
                        <Card className="glass-card hover:shadow-xl transition-all duration-300 md:w-[calc(50%-2rem)] md:ml-auto group">
                            <CardContent className="p-8">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                                    <div className="flex items-center gap-3 flex-1">
                                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                                            <Code size={20} className="text-primary" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-primary group-hover:text-primary/80 transition-colors">WordPress Plugin Developer</h3>
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <Building2 size={14} />
                                                <span>TT-Soft</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Badge variant="outline" className="bg-primary/5 border-primary/20 self-start sm:self-center">
                                        <Calendar size={12} className="mr-1" />
                                        Nov 2024 - Present
                                    </Badge>
                                </div>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                                        <span>Developed and maintained WordPress plugins including Fox LMS, Quiz Maker, Poll Maker, Popup Box, and Easy Form</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                                        <span>Fixed plugin conflicts, optimized performance, and improved security</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                                        <span>Added features such as leaderboards, payment integrations, analytics, and user registration</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                                        <span>Improved UI/UX with redesigned admin panels, responsive layouts, and streamlined settings</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                                        <span>Integrated external services including Mailchimp, MailerLite, PDF export, and multilingual support</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                                        <span>Built demo sites and landing pages for product presentations</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                                        <span>Enhanced Fox LMS with certificates, analytics, Q&A, and reporting dashboards</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="relative md:flex md:items-center">
                        {/* Timeline dot */}
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-background shadow-lg z-10"></div>
                        
                        <Card className="glass-card hover:shadow-xl transition-all duration-300 md:w-[calc(50%-2rem)] md:mr-auto group">
                            <CardContent className="p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                                        <Building2 size={20} className="text-secondary" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-secondary group-hover:text-secondary/80 transition-colors">Prompt Engineer</h3>
                                        <div className="flex items-center gap-2 text-muted-foreground">
                                            <Building2 size={14} />
                                            <span>Kaytser</span>
                                        </div>
                                    </div>
                                    <Badge variant="outline" className="bg-secondary/5 border-secondary/20">
                                        <Calendar size={12} className="mr-1" />
                                        Jun 2024 - Jul 2024
                                    </Badge>
                                </div>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                                        <span>Developed websites using AI tools and prompt engineering</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                                        <span>Contributed to market research and branding strategies</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                                        <span>Learned and applied AI-assisted video and photo generation</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                                        <span>Debugged code with AI assistance and optimized workflows</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="relative md:flex md:items-center">
                        {/* Timeline dot */}
                        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
                        
                        <Card className="glass-card hover:shadow-xl transition-all duration-300 md:w-[calc(50%-2rem)] md:ml-auto group">
                            <CardContent className="p-8">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                                    <div className="flex items-center gap-3 flex-1">
                                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                                            <Code size={20} className="text-primary" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-primary group-hover:text-primary/80 transition-colors">ML Engineer & Python Developer</h3>
                                            <div className="flex items-center gap-2 text-muted-foreground">
                                                <Building2 size={14} />
                                                <span>CareAware</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Badge variant="outline" className="bg-primary/5 border-primary/20 self-start sm:self-center">
                                        <Calendar size={12} className="mr-1" />
                                        Feb 2024 – May 2024
                                    </Badge>
                                </div>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                                        <span>Implemented Large Language Models (BERT, LLaMA, Falcon, Mistral, GPT)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                                        <span>Developed an LLM-powered search system with RAG for improved retrieval</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                                        <span>Built tools for hallucination detection in LLM responses</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                                        <span>Applied advanced NLP techniques to healthcare data</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
