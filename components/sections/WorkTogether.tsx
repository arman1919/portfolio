import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Code, Brain, Zap } from "lucide-react";

export default function WorkTogether(props: { scrollToSection: (arg0: string) => void; }) {
    return (
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
                onClick={() => props.scrollToSection("contact")}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
                Start Your Project
            </Button>
            </div>
        </section>
    )
}
