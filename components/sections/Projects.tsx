'use client';

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, ExternalLink, X } from "lucide-react";

type PopupId = "dropic" | "popupbox" | "levelstudio" | null;

export default function Projects() {
    const [activePopup, setActivePopup] = useState<PopupId>(null);

    useEffect(() => {
        if (!activePopup) {
            document.body.style.overflow = "";
            return;
        }

        document.body.style.overflow = "hidden";

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setActivePopup(null);
            }
        };

        document.addEventListener("keydown", handleEscape);

        return () => {
            document.body.style.overflow = "";
            document.removeEventListener("keydown", handleEscape);
        };
    }, [activePopup]);

    const openPopup = (id: Exclude<PopupId, null>) => setActivePopup(id);
    const closePopup = () => setActivePopup(null);

    return (
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
                    <Button
                        size="sm"
                        variant="outline"
                        className="flex-1"
                        onClick={() => openPopup("dropic")}
                    >
                        More
                    </Button>
                    <Button size="sm" asChild className="flex-1">
                    <a href="https://dropic-sable.vercel.app" target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} className="mr-2" />
                        Live Site
                    </a>
                    </Button>
                </div>
                </CardContent>
            </Card>

            {activePopup === "dropic" && (
                <>
                <div
                    role="presentation"
                    aria-hidden="true"
                    onClick={closePopup}
                    className="fixed inset-0 z-[60] cursor-pointer overflow-hidden"
                >
                    <div className="pointer-events-none absolute inset-0 bg-slate-950/75 backdrop-blur-sm" />
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,theme(colors.primary/25)_0%,transparent_55%)]" />
                </div>
                <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="dropic-popup-title"
                        className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-border bg-background shadow-2xl"
                    >
                        <div className="absolute right-4 top-4">
                            <Button
                                size="icon"
                                variant="ghost"
                                className="rounded-full"
                                onClick={closePopup}
                                aria-label="Close popup"
                            >
                                <X size={18} />
                            </Button>
                        </div>

                        <div className="max-h-[min(90vh,800px)] overflow-y-auto">
                            <div className="space-y-8 p-8">
                                <header className="space-y-2">
                                    <p className="text-sm font-semibold uppercase tracking-wider text-primary/80">Case Study</p>
                                    <h3 id="dropic-popup-title" className="text-3xl font-bold text-foreground">
                                        DROPIC – Photo Album Manager
                                    </h3>
                                    <p className="text-base text-muted-foreground">
                                        Project overview, technology choices, and future enhancements for a cloud-native photo album platform.
                                    </p>
                                </header>

                                <section className="space-y-4">
                                    <h4 className="text-lg font-semibold text-foreground">Project Overview</h4>
                                    <p className="leading-relaxed text-muted-foreground">
                                        DROPIC is a web application designed to bring back the simplicity of traditional photo albums in the digital age. Users can create photo albums effortlessly and share them with others through simple links or QR codes – no account required for viewing.
                                    </p>
                                    <div className="rounded-xl bg-muted/50 p-5">
                                        <h5 className="text-sm font-semibold uppercase tracking-wide text-primary">Core Philosophy</h5>
                                        <p className="mt-2 leading-relaxed text-muted-foreground">
                                            The entire concept revolves around simplicity, just like the old days with physical photo albums. Anyone can view shared albums without creating an account, making photo sharing as straightforward as possible.
                                        </p>
                                    </div>
                                </section>

                                <section className="space-y-4">
                                    <h4 className="text-lg font-semibold text-foreground">Technical Architecture</h4>
                                    <p className="leading-relaxed text-muted-foreground">
                                        The application is architected for scalability with independent services for different data types:
                                    </p>
                                    <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                                        <li><span className="font-medium text-foreground">User data and albums:</span> Stored in MongoDB Atlas, which can scale independently as the user base grows.</li>
                                        <li><span className="font-medium text-foreground">Photo storage:</span> Managed by Cloudinary, providing dedicated scalability for media assets.</li>
                                    </ul>
                                </section>

                                <section className="grid gap-8 md:grid-cols-2">
                                    <div className="space-y-4">
                                        <h4 className="text-lg font-semibold text-foreground">Key Features</h4>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle size={16} className="mt-1 text-primary" />
                                                <span>Simple album creation with an intuitive interface.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle size={16} className="mt-1 text-primary" />
                                                <span>Universal sharing via public links or QR codes.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle size={16} className="mt-1 text-primary" />
                                                <span>No-account viewing for frictionless access.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle size={16} className="mt-1 text-primary" />
                                                <span>Media library system that reuses photos without duplication.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle size={16} className="mt-1 text-primary" />
                                                <span>Responsive design across all devices.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle size={16} className="mt-1 text-primary" />
                                                <span>Cloud-based architecture for reliability and scalability.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="space-y-4">
                                        <h4 className="text-lg font-semibold text-foreground">Business Model</h4>
                                        <p className="leading-relaxed text-muted-foreground">
                                            Revenue is generated through one-time purchases of storage space based on the number of photos, providing a transparent and predictable pricing structure.
                                        </p>

                                        <div>
                                            <h4 className="text-lg font-semibold text-foreground">Future Enhancements</h4>
                                            <ul className="mt-2 list-disc space-y-2 pl-6 text-muted-foreground">
                                                <li>Custom album themes and layouts.</li>
                                                <li>Audio accompaniment for immersive albums.</li>
                                                <li>Animated photo transitions.</li>
                                                <li>Built-in photo editing tools.</li>
                                                <li>Advanced sharing options.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>

                                <section className="space-y-4">
                                    <h4 className="text-lg font-semibold text-foreground">Technologies Used</h4>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="outline">Next.js 14</Badge>
                                        <Badge variant="outline">TypeScript</Badge>
                                        <Badge variant="outline">MongoDB Atlas</Badge>
                                        <Badge variant="outline">Cloudinary</Badge>
                                        <Badge variant="outline">JWT Authentication</Badge>
                                        <Badge variant="outline">Vercel</Badge>
                                    </div>
                                </section>

                                <footer className="flex flex-wrap justify-end gap-2">
                                    <Button variant="outline" onClick={closePopup}>
                                        Close
                                    </Button>
                                    <Button asChild>
                                        <a href="https://dropic-sable.vercel.app" target="_blank" rel="noopener noreferrer">
                                            <ExternalLink size={16} className="mr-2" />
                                            Visit Live Project
                                        </a>
                                    </Button>
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
                </>
            )}


            <Card className="glass-card hover:scale-105 transition-all duration-300 group">
                <CardContent className="p-6">
                <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    Demo Website – PopupBox Plugin (Free & Pro)
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 text-pretty">
                    Comprehensive WordPress showcase highlighting both Free and Pro versions of the PopupBox plugin with interactive demos, pricing comparisons, and detailed use cases.
                    </p>
                </div>

                <div className="mb-4">
                    <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="outline">WordPress</Badge>
                    <Badge variant="outline">Custom Theme</Badge>
                    <Badge variant="outline">JavaScript</Badge>
                    <Badge variant="outline">PHP</Badge>
                    <Badge variant="outline">Gutenberg</Badge>
                    <Badge variant="outline">Responsive Design</Badge>
                    </div>
                </div>

                <ul className="text-sm text-muted-foreground mb-6 space-y-1">
                    <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-primary" />
                    Dual landing pages comparing Free and Pro capabilities
                    </li>
                    <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-primary" />
                    Live popup demonstrations for multiple use cases
                    </li>
                    <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-primary" />
                    Modular content architecture using Gutenberg blocks
                    </li>
                    <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-primary" />
                    Interactive pricing tables with plan switching
                    </li>
                </ul>

                <div className="flex flex-wrap gap-2">
                    <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 sm:flex-none"
                        onClick={() => openPopup("popupbox")}
                    >
                        More
                    </Button>
                    <Button size="sm" asChild className="flex-1 sm:flex-none">
                    <a href="https://demo.popup-plugin.com/" target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} className="mr-2" />
                        Pro Demo
                    </a>
                    </Button>
                    <Button size="sm" asChild className="flex-1 sm:flex-none">
                    <a 
                        href="https://demo.popup-plugin.com/wordpress-popup-plugin-free-demo/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <ExternalLink size={14} className="mr-2" />
                        Free Demo
                    </a>
                    </Button>
                </div>
                </CardContent>
            </Card>

            {activePopup === "popupbox" && (
                <>
                <div
                    role="presentation"
                    aria-hidden="true"
                    onClick={closePopup}
                    className="fixed inset-0 z-[60] cursor-pointer overflow-hidden"
                >
                    <div className="pointer-events-none absolute inset-0 bg-slate-950/75 backdrop-blur-sm" />
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,theme(colors.primary/25)_0%,transparent_55%)]" />
                </div>
                <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="popupbox-popup-title"
                        className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-border bg-background shadow-2xl"
                    >
                        <div className="absolute right-4 top-4">
                            <Button
                                size="icon"
                                variant="ghost"
                                className="rounded-full"
                                onClick={closePopup}
                                aria-label="Close popup"
                            >
                                <X size={18} />
                            </Button>
                        </div>

                        <div className="max-h-[min(90vh,800px)] overflow-y-auto">
                            <div className="space-y-8 p-8">
                                <header className="space-y-2">
                                    <p className="text-sm font-semibold uppercase tracking-wider text-primary/80">Case Study</p>
                                    <h3 id="popupbox-popup-title" className="text-3xl font-bold text-foreground">
                                        Demo Website – PopupBox Plugin (Free & Pro)
                                    </h3>
                                    <p className="text-base text-muted-foreground">
                                        A comprehensive WordPress showcase demonstrating the full capabilities of the PopupBox plugin across both Free and Pro plans.
                                    </p>
                                </header>

                                <section className="space-y-4">
                                    <h4 className="text-lg font-semibold text-foreground">Project Overview</h4>
                                    <p className="leading-relaxed text-muted-foreground">
                                        A comprehensive showcase website developed to highlight the full capabilities of PopupBox, a WordPress plugin for creating engaging popups. The experience spans two dedicated landing pages that explain the differences between the Free and Pro versions while letting visitors interact with live demos.
                                    </p>
                                </section>

                                <section className="space-y-4">
                                    <h4 className="text-lg font-semibold text-foreground">Website Structure</h4>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Built entirely on WordPress with a custom theme, the project organizes content into focused demonstration pages across two core categories.
                                    </p>
                                    <div className="grid gap-4 md:grid-cols-2">
                                        <div className="rounded-xl border border-border/60 bg-muted/40 p-5">
                                            <h5 className="text-sm font-semibold uppercase tracking-wide text-primary">Popup Type Demonstrations</h5>
                                            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle size={16} className="mt-0.5 text-primary" />
                                                    Interactive showcases for subscription forms, countdown timers, and WooCommerce product popups.
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle size={16} className="mt-0.5 text-primary" />
                                                    Demonstrations of advanced layouts, animations, and engagement flows.
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="rounded-xl border border-border/60 bg-muted/40 p-5">
                                            <h5 className="text-sm font-semibold uppercase tracking-wide text-primary">Trigger Type Demonstrations</h5>
                                            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle size={16} className="mt-0.5 text-primary" />
                                                    On-click, on-load, and scroll-based activation scenarios.
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle size={16} className="mt-0.5 text-primary" />
                                                    Use case driven examples tailored to marketing and eCommerce funnels.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>

                                <section className="grid gap-8 lg:grid-cols-2">
                                    <div className="space-y-4">
                                        <h4 className="text-lg font-semibold text-foreground">Core Functionality</h4>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle size={16} className="mt-1 text-primary" />
                                                <span>Full plugin feature breakdown with side-by-side comparison between Free and Pro tiers.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle size={16} className="mt-1 text-primary" />
                                                <span>Interactive pricing information highlighting upgrade benefits.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle size={16} className="mt-1 text-primary" />
                                                <span>Real-world implementation scenarios and FAQs for rapid onboarding.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle size={16} className="mt-1 text-primary" />
                                                <span>Live popup demos showcasing engagement flows in action.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="space-y-4">
                                        <h4 className="text-lg font-semibold text-foreground">Technical Implementation</h4>
                                        <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                                            <li>Custom WordPress theme engineered to align with PopupBox visual identity.</li>
                                            <li>Deep Gutenberg integration with tailored styling and reusable blocks.</li>
                                            <li>Modular architecture enabling content updates without developer support.</li>
                                            <li>Performance-optimized responsive layouts for all devices.</li>
                                        </ul>
                                    </div>
                                </section>

                                <section className="grid gap-8 lg:grid-cols-2">
                                    <div className="space-y-4">
                                        <h4 className="text-lg font-semibold text-foreground">Key Features</h4>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle size={16} className="mt-1 text-primary" />
                                                <span>Dual landing pages differentiating Free and Pro offerings.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle size={16} className="mt-1 text-primary" />
                                                <span>Interactive pricing tables with plan switching controls.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle size={16} className="mt-1 text-primary" />
                                                <span>Testimonials and social proof to build trust.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle size={16} className="mt-1 text-primary" />
                                                <span>Comprehensive FAQ addressing user concerns.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="space-y-4">
                                        <h4 className="text-lg font-semibold text-foreground">Plugin Demonstrations</h4>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle size={16} className="mt-1 text-primary" />
                                                <span>Subscription forms for lead capture and newsletters.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle size={16} className="mt-1 text-primary" />
                                                <span>Countdown timers to create urgency for offers.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle size={16} className="mt-1 text-primary" />
                                                <span>WooCommerce product promotion and cart recovery flows.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle size={16} className="mt-1 text-primary" />
                                                <span>Multiple trigger types including click, delay, and scroll interactions.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </section>

                                <section className="space-y-4">
                                    <h4 className="text-lg font-semibold text-foreground">Design Philosophy</h4>
                                    <p className="leading-relaxed text-muted-foreground">
                                        The experience stays fully focused on demonstrating plugin value through practical, high-impact examples. Visitors can experiment with popups in real time, lowering adoption friction and increasing confidence in the product.
                                    </p>
                                </section>

                                <section className="space-y-4">
                                    <h4 className="text-lg font-semibold text-foreground">Technologies Used</h4>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="outline">WordPress</Badge>
                                        <Badge variant="outline">Custom PHP Theme</Badge>
                                        <Badge variant="outline">JavaScript</Badge>
                                        <Badge variant="outline">HTML5</Badge>
                                        <Badge variant="outline">CSS3</Badge>
                                        <Badge variant="outline">WordPress Gutenberg</Badge>
                                        <Badge variant="outline">Responsive Design</Badge>
                                    </div>
                                </section>

                                <footer className="flex flex-wrap justify-end gap-2">
                                    <Button variant="outline" onClick={closePopup}>
                                        Close
                                    </Button>
                                    <Button asChild>
                                        <a href="https://demo.popup-plugin.com/" target="_blank" rel="noopener noreferrer">
                                            <ExternalLink size={16} className="mr-2" />
                                            View Pro Demo
                                        </a>
                                    </Button>
                                    <Button asChild variant="secondary">
                                        <a href="https://demo.popup-plugin.com/wordpress-popup-plugin-free-demo/" target="_blank" rel="noopener noreferrer">
                                            <ExternalLink size={16} className="mr-2" />
                                            View Free Demo
                                        </a>
                                    </Button>
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
                </>
            )}

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
                    Minimalist aesthetic with professional accents
                    </li>
                </ul>

                <div className="flex gap-2">
                    <Button
                        size="sm"
                        variant="outline"
                        className="flex-1"
                        onClick={() => openPopup("levelstudio")}
                    >
                        More
                    </Button>
                    <Button size="sm" asChild className="flex-1">
                    <a href="https://levelstudio.am/" target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} className="mr-2" />
                        Live Site
                    </a>
                    </Button>
                </div>
                </CardContent>
            </Card>

            {activePopup === "levelstudio" && (
                <>
                <div
                    role="presentation"
                    aria-hidden="true"
                    onClick={closePopup}
                    className="fixed inset-0 z-[60] cursor-pointer overflow-hidden"
                >
                    <div className="pointer-events-none absolute inset-0 bg-slate-950/75 backdrop-blur-sm" />
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,theme(colors.primary/25)_0%,transparent_55%)]" />
                </div>
                <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="levelstudio-popup-title"
                        className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-border bg-background shadow-2xl"
                    >
                        <div className="absolute right-4 top-4">
                            <Button
                                size="icon"
                                variant="ghost"
                                className="rounded-full"
                                onClick={closePopup}
                                aria-label="Close popup"
                            >
                                <X size={18} />
                            </Button>
                        </div>

                        <div className="max-h-[min(90vh,800px)] overflow-y-auto">
                            <div className="space-y-8 p-8">
                                <header className="space-y-2">
                                    <p className="text-sm font-semibold uppercase tracking-wider text-primary/80">Case Study</p>
                                    <h3 id="levelstudio-popup-title" className="text-3xl font-bold text-foreground">
                                        Level Studio - Marketing Studio Website
                                    </h3>
                                    <p className="text-base text-muted-foreground">
                                        A comprehensive business website for a marketing and photo-video studio in Yerevan, serving as both portfolio showcase and client acquisition platform.
                                    </p>
                                </header>

                                <section className="space-y-4">
                                    <h4 className="text-lg font-semibold text-foreground">Project Overview</h4>
                                    <p className="leading-relaxed text-muted-foreground">
                                        A comprehensive business website developed for a marketing and photo-video studio based in Yerevan. The site serves as both a portfolio showcase and client acquisition platform, designed to attract and engage potential business clients through intuitive design and interactive features.
                                    </p>
                                </section>

                                <section className="space-y-4">
                                    <h4 className="text-lg font-semibold text-foreground">Design Philosophy</h4>
                                    <p className="leading-relaxed text-muted-foreground">
                                        The website features a minimalist and functional design approach, utilizing the studio's brand color palette with eye-catching animations. The modern aesthetic maintains professionalism while showcasing creative capabilities, perfectly balancing visual appeal with usability.
                                    </p>
                                </section>

                                <section className="grid gap-8 lg:grid-cols-2">
                                    <div className="space-y-4">
                                        <h4 className="text-lg font-semibold text-foreground">Core Functionality</h4>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle size={16} className="mt-1 text-primary" />
                                                <span>Portfolio presentation with visual showcase of work examples and case studies.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle size={16} className="mt-1 text-primary" />
                                                <span>Service overview with detailed breakdown of offerings and specializations.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle size={16} className="mt-1 text-primary" />
                                                <span>Current projects transparency showcasing ongoing work and capabilities.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle size={16} className="mt-1 text-primary" />
                                                <span>Interactive animations enhancing user experience and engagement.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle size={16} className="mt-1 text-primary" />
                                                <span>Contact integration with direct communication channels for inquiries.</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="space-y-4">
                                        <h4 className="text-lg font-semibold text-foreground">Key Feature: Service Calculator</h4>
                                        <div className="rounded-xl border border-border/60 bg-muted/40 p-5">
                                            <p className="text-sm text-muted-foreground mb-3">Interactive pricing calculator allowing clients to:</p>
                                            <ul className="space-y-2 text-sm text-muted-foreground">
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle size={14} className="mt-0.5 text-primary" />
                                                    <span>Choose from various marketing services with flexible selection.</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle size={14} className="mt-0.5 text-primary" />
                                                    <span>See real-time pricing updates based on selections and complexity.</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle size={14} className="mt-0.5 text-primary" />
                                                    <span>Send calculated estimates directly to the studio for follow-up.</span>
                                                </li>
                                                <li className="flex items-start gap-2">
                                                    <CheckCircle size={14} className="mt-0.5 text-primary" />
                                                    <span>Transparent pricing with clear cost breakdown for service combinations.</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>

                                <section className="grid gap-8 lg:grid-cols-2">
                                    <div className="space-y-4">
                                        <h4 className="text-lg font-semibold text-foreground">Multilingual Support</h4>
                                        <p className="text-muted-foreground mb-3">Three languages to serve the diverse Yerevan market:</p>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle size={16} className="mt-1 text-primary" />
                                                <span><strong>Russian:</strong> Primary market language</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle size={16} className="mt-1 text-primary" />
                                                <span><strong>English:</strong> International business clients</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle size={16} className="mt-1 text-primary" />
                                                <span><strong>Armenian:</strong> Local market engagement</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="space-y-4">
                                        <h4 className="text-lg font-semibold text-foreground">Technical Implementation</h4>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle size={16} className="mt-1 text-primary" />
                                                <span>Mobile-first design fully responsive across all devices.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle size={16} className="mt-1 text-primary" />
                                                <span>Smooth scrolling navigation for intuitive user experience.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle size={16} className="mt-1 text-primary" />
                                                <span>Custom animations engaging users without performance compromise.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle size={16} className="mt-1 text-primary" />
                                                <span>EmailJS integration for seamless contact form functionality.</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle size={16} className="mt-1 text-primary" />
                                                <span>Interactive calculator with real-time calculation and quote generation.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </section>

                                <section className="space-y-4">
                                    <h4 className="text-lg font-semibold text-foreground">Business Impact Features</h4>
                                    <div className="grid gap-4 md:grid-cols-2">
                                        <div className="rounded-xl border border-border/60 bg-muted/40 p-5">
                                            <h5 className="text-sm font-semibold uppercase tracking-wide text-primary mb-2">Results Showcase</h5>
                                            <p className="text-sm text-muted-foreground">Quantified achievements and success metrics building credibility.</p>
                                        </div>
                                        <div className="rounded-xl border border-border/60 bg-muted/40 p-5">
                                            <h5 className="text-sm font-semibold uppercase tracking-wide text-primary mb-2">Client Testimonials</h5>
                                            <p className="text-sm text-muted-foreground">Social proof and credibility building through client feedback.</p>
                                        </div>
                                        <div className="rounded-xl border border-border/60 bg-muted/40 p-5">
                                            <h5 className="text-sm font-semibold uppercase tracking-wide text-primary mb-2">Service Transparency</h5>
                                            <p className="text-sm text-muted-foreground">Clear explanation of deliverables and processes.</p>
                                        </div>
                                        <div className="rounded-xl border border-border/60 bg-muted/40 p-5">
                                            <h5 className="text-sm font-semibold uppercase tracking-wide text-primary mb-2">Lead Generation</h5>
                                            <p className="text-sm text-muted-foreground">Multiple conversion points throughout the site.</p>
                                        </div>
                                    </div>
                                </section>

                                <section className="space-y-4">
                                    <h4 className="text-lg font-semibold text-foreground">User Experience Focus</h4>
                                    <p className="leading-relaxed text-muted-foreground">
                                        The entire site prioritizes user engagement through smooth interactions, clear information hierarchy, and multiple touchpoints for client communication. Every element is designed to guide potential clients toward making contact with the studio.
                                    </p>
                                </section>

                                <section className="space-y-4">
                                    <h4 className="text-lg font-semibold text-foreground">Technologies Used</h4>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="outline">Custom HTML/CSS</Badge>
                                        <Badge variant="outline">JavaScript</Badge>
                                        <Badge variant="outline">EmailJS</Badge>
                                        <Badge variant="outline">Responsive Design</Badge>
                                        <Badge variant="outline">Multi-language Support</Badge>
                                        <Badge variant="outline">Interactive Calculator</Badge>
                                    </div>
                                </section>

                                <footer className="flex flex-wrap justify-end gap-2">
                                    <Button variant="outline" onClick={closePopup}>
                                        Close
                                    </Button>
                                    <Button asChild>
                                        <a href="https://levelstudio.am/" target="_blank" rel="noopener noreferrer">
                                            <ExternalLink size={16} className="mr-2" />
                                            Visit Live Site
                                        </a>
                                    </Button>
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
                </>
            )}

            </div>
            </div>
        </section>

    );
}