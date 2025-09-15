import React, { useState, useEffect } from 'react';
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Code, Brain, Zap, ArrowRight, Sparkles } from "lucide-react";

export default function WorkTogether(props: { scrollToSection: (arg0: string) => void; }) {
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const [animatedIcons, setAnimatedIcons] = useState([false, false, false]);

    useEffect(() => {
        setIsVisible(true);
        // Stagger icon animations
        const timeouts = [
            setTimeout(() => setAnimatedIcons(prev => [true, prev[1], prev[2]]), 200),
            setTimeout(() => setAnimatedIcons(prev => [prev[0], true, prev[2]]), 400),
            setTimeout(() => setAnimatedIcons(prev => [prev[0], prev[1], true]), 600),
        ];
        return () => timeouts.forEach(clearTimeout);
    }, []);

    const services = [
        {
            icon: Code,
            title: "Full-Stack Development",
            description: "Complete web solutions from frontend to backend",
            color: "text-blue-500",
            gradient: "from-blue-500/20 to-purple-500/20"
        },
        {
            icon: Brain,
            title: "AI Integration",
            description: "Smart automation and machine learning solutions",
            color: "text-purple-500",
            gradient: "from-purple-500/20 to-pink-500/20"
        },
        {
            icon: Zap,
            title: "Performance Optimization",
            description: "Fast, scalable, and user-friendly applications",
            color: "text-yellow-500",
            gradient: "from-yellow-500/20 to-orange-500/20"
        }
    ];

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card/50 via-card/50 to-background relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/2 -left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute bottom-10 right-1/3 w-24 h-24 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>
            {/* Top fade to blend with previous section */}
            <div className="pointer-events-none absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-card/50 via-card/50 to-transparent z-10"></div>

            <div className="max-w-4xl mx-auto text-center relative z-20">
                {/* Header with staggered animation */}
                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="relative inline-block">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                            Let's Work Together
                        </h2>
                        <Sparkles className="absolute -top-2 -right-8 text-yellow-500 animate-pulse" size={20} />
                    </div>
                </div>
                
                <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <p className="text-xl text-muted-foreground mb-8 text-pretty">
                        Ready to bring your ideas to life? I specialize in creating modern, scalable web solutions that drive
                        results.
                    </p>
                </div>
                {/* Animated service cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                className={`transition-all duration-700 delay-${(index + 6) * 100} ${
                                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                                }`}
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <Card className="glass-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105">
                                    <CardContent className="p-6 text-center relative z-10">
                                        {/* Animated icon */}
                                        <div className={`relative mx-auto mb-4 w-16 h-16 rounded-full flex items-center justify-center`}>
                                            <Icon 
                                                className={`
                                                    ${service.color} transition-all duration-300
                                                    ${hoveredCard === index ? 'scale-110 drop-shadow-lg' : ''}
                                                `} 
                                                size={32} 
                                            />
                                            
                                            {/* Pulse effect */}
                                            {hoveredCard === index && (
                                                <div className="absolute inset-0 rounded-full border-2 border-current animate-ping opacity-30"></div>
                                            )}
                                        </div>

                                        <h3 className={`
                                            font-semibold mb-2 transition-colors duration-300
                                            ${hoveredCard === index ? 'text-slate-800 dark:text-white' : ''}
                                        `}>
                                            {service.title}
                                        </h3>
                                        
                                        <p className={`
                                            text-sm text-muted-foreground transition-all duration-300
                                            ${hoveredCard === index ? 'text-slate-700 dark:text-slate-300 scale-105' : ''}
                                        `}>
                                            {service.description}
                                        </p>

                                    </CardContent>
                                </Card>
                            </div>
                        );
                    })}
                </div>

                {/* Animated CTA button */}
                <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <Button
                        onClick={() => props.scrollToSection("contact")}
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                        Start Your Project
                    </Button>
                </div>
            </div>
        </section>
    );
}