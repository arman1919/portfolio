import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

export default function Experience() {
    return (
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
    )
}