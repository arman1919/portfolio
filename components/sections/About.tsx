
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users, Languages } from "lucide-react"

export default function About() {
    return (
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
                </div>

                {/* Right Column: Skills & Languages */}
                <div className="space-y-8">
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
    );
}