
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Projects() {
    return(
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

    );
}