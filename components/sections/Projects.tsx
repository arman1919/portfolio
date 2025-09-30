'use client';

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, ExternalLink, X, ChevronLeft, ChevronRight, Search, ZoomIn } from "lucide-react";

type PopupId = "dropic" | "popupbox" | "levelstudio" | "teahouse" | null;

export default function Projects() {
    const [activePopup, setActivePopup] = useState<PopupId>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const [animationDirection, setAnimationDirection] = useState<'left' | 'right' | null>(null);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    // Dropic project images
    const dropicImages = [
        { id: 22, thumb: "/portfolio-images/thumbs/dropic-1.webp", full: "/portfolio-images/full/dropic-1.webp", title: "Dropic - Online Photo Album Landing Page" },
        { id: 23, thumb: "/portfolio-images/thumbs/dropic-2.webp", full: "/portfolio-images/full/dropic-2.webp", title: "Dropic - Edit Album Page" },
        { id: 24, thumb: "/portfolio-images/thumbs/dropic-3.webp", full: "/portfolio-images/full/dropic-3.webp", title: "Dropic - Frontend page" },
    ];

    // PopupBox project images
    const popupboxImages = [
        { id: 12, thumb: "/portfolio-images/thumbs/popup-demo-1.webp", full: "/portfolio-images/full/popup-demo-1.webp", title: "Popup Plugin Demo Landing Page" },
        { id: 13, thumb: "/portfolio-images/thumbs/popup-demo-2.webp", full: "/portfolio-images/full/popup-demo-2.webp", title: "Popup Plugin Free Demo Landing Page" },
    ];

    // LevelStudio project images
    const levelstudioImages = [
        { id: 18, thumb: "/portfolio-images/thumbs/levelstudio-1.webp", full: "/portfolio-images/full/levelstudio-1.webp", title: "LevelStudio.am" },
        { id: 19, thumb: "/portfolio-images/thumbs/levelstudio-2.webp", full: "/portfolio-images/full/levelstudio-2.webp", title: "LevelStudio.am Calculator" },
    ];

    // Met Tea project images
    const teahouseImages = [
        { id: 28, thumb: "/portfolio-images/thumbs/met-tea-landing-page.webp", full: "/portfolio-images/full/met-tea-landing-page.webp", title: "Met Tea Landing Page" },
        { id: 29, thumb: "/portfolio-images/thumbs/met-tea-admin-page.webp", full: "/portfolio-images/full/met-tea-admin-page.webp", title: "Met Tea Admin Page" },
        { id: 30, thumb: "/portfolio-images/thumbs/met-tea-user-page.webp", full: "/portfolio-images/full/met-tea-user-page.webp", title: "Met Tea User Page" },
    ];

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
    const closePopup = () => {
        setActivePopup(null);
        setSelectedImage(null);
    };

    // Lightbox navigation functions
    const getCurrentImages = () => {
        if (activePopup === 'dropic') return dropicImages;
        if (activePopup === 'popupbox') return popupboxImages;
        if (activePopup === 'levelstudio') return levelstudioImages;
        if (activePopup === 'teahouse') return teahouseImages;
        return [];
    };

    const getCurrentImageIndex = () => {
        const images = getCurrentImages();
        return images.findIndex(img => img.full === selectedImage);
    };

    const navigateImage = (direction: 'prev' | 'next') => {
        if (isAnimating) return;
        
        const images = getCurrentImages();
        const currentIndex = getCurrentImageIndex();
        if (currentIndex === -1) return;

        let newIndex;
        if (direction === 'prev') {
            newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        } else {
            newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
        }
        
        setAnimationDirection(direction === 'prev' ? 'right' : 'left');
        setIsAnimating(true);
        
        setTimeout(() => {
            setSelectedImage(images[newIndex].full);
            
            setTimeout(() => {
                setIsAnimating(false);
                setAnimationDirection(null);
            }, 300);
        }, 150);
    };

    const handleKeyNavigation = (e: KeyboardEvent) => {
        if (!selectedImage) return;
        
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            navigateImage('prev');
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            navigateImage('next');
        } else if (e.key === 'Escape') {
            e.preventDefault();
            setSelectedImage(null);
        }
    };

    // Touch swipe handlers
    const minSwipeDistance = 50;

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const images = getCurrentImages();
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe && images.length > 1) {
            navigateImage('next');
        }
        if (isRightSwipe && images.length > 1) {
            navigateImage('prev');
        }
    };

    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
            document.addEventListener('keydown', handleKeyNavigation);
            
            return () => {
                document.body.style.overflow = 'unset';
                document.removeEventListener('keydown', handleKeyNavigation);
            };
        }
    }, [selectedImage, activePopup]);

    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-balance">Featured Projects</h2>

            <div className="grid md:grid-cols-2 gap-8">
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

                                <section className="space-y-4">
                                    <h4 className="text-lg font-semibold text-foreground">Project Screenshots</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        {dropicImages.map((image) => (
                                            <div 
                                                key={image.id} 
                                                className="relative group cursor-pointer overflow-hidden rounded-lg bg-card shadow-lg hover:shadow-xl transition-all duration-300"
                                                onClick={() => setSelectedImage(image.full)}
                                            >
                                                <div className="aspect-[4/3] w-full overflow-hidden">
                                                    <img 
                                                        src={image.thumb} 
                                                        alt={image.title} 
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                        loading="lazy"
                                                    />
                                                </div>
                                                
                                                {/* Mobile Zoom Icon */}
                                                <div className="absolute top-2 right-2 sm:hidden bg-black/60 backdrop-blur-sm rounded-full p-2 opacity-80">
                                                    <ZoomIn size={16} className="text-white" />
                                                </div>
                                                
                                                {/* Desktop Magnifying Glass Overlay */}
                                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center hidden sm:flex">
                                                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                                                        <Search size={32} className="text-white" />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
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

                                <section className="space-y-4">
                                    <h4 className="text-lg font-semibold text-foreground">Project Screenshots</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {popupboxImages.map((image) => (
                                            <div 
                                                key={image.id} 
                                                className="relative group cursor-pointer overflow-hidden rounded-lg bg-card shadow-lg hover:shadow-xl transition-all duration-300"
                                                onClick={() => setSelectedImage(image.full)}
                                            >
                                                <div className="aspect-[4/3] w-full overflow-hidden">
                                                    <img 
                                                        src={image.thumb} 
                                                        alt={image.title} 
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                        loading="lazy"
                                                    />
                                                </div>
                                                
                                                {/* Mobile Zoom Icon */}
                                                <div className="absolute top-2 right-2 sm:hidden bg-black/60 backdrop-blur-sm rounded-full p-2 opacity-80">
                                                    <ZoomIn size={16} className="text-white" />
                                                </div>
                                                
                                                {/* Desktop Magnifying Glass Overlay */}
                                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center hidden sm:flex">
                                                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                                                        <Search size={32} className="text-white" />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
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
                    <Badge variant="outline">Netlify</Badge>
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

                                <section className="space-y-4">
                                    <h4 className="text-lg font-semibold text-foreground">Project Screenshots</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {levelstudioImages.map((image) => (
                                            <div 
                                                key={image.id} 
                                                className="relative group cursor-pointer overflow-hidden rounded-lg bg-card shadow-lg hover:shadow-xl transition-all duration-300"
                                                onClick={() => setSelectedImage(image.full)}
                                            >
                                                <div className="aspect-[4/3] w-full overflow-hidden">
                                                    <img 
                                                        src={image.thumb} 
                                                        alt={image.title} 
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                        loading="lazy"
                                                    />
                                                </div>
                                                
                                                {/* Mobile Zoom Icon */}
                                                <div className="absolute top-2 right-2 sm:hidden bg-black/60 backdrop-blur-sm rounded-full p-2 opacity-80">
                                                    <ZoomIn size={16} className="text-white" />
                                                </div>
                                                
                                                {/* Desktop Magnifying Glass Overlay */}
                                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center hidden sm:flex">
                                                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                                                        <Search size={32} className="text-white" />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
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

            <Card className="glass-card hover:scale-105 transition-all duration-300 group">
                <CardContent className="p-6">
                <div className="mb-4">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    Met Tea – Restaurant Loyalty Website
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 text-pretty">
                    A modern web application for a tea restaurant, designed to enhance customer loyalty through a cashback-based reward system with unique QR code identification.
                    </p>
                </div>

                <div className="mb-4">
                    <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">Supabase</Badge>
                    <Badge variant="outline">Tailwind CSS</Badge>
                    <Badge variant="outline">QR Codes</Badge>
                    <Badge variant="outline">Authentication</Badge>
                    </div>
                </div>

                <ul className="text-sm text-muted-foreground mb-6 space-y-1">
                    <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-primary" />
                    Client & manager dashboards
                    </li>
                    <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-primary" />
                    QR code-based identification
                    </li>
                    <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-primary" />
                    Automated cashback calculation (1%)
                    </li>
                    <li className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-primary" />
                    Real-time balance tracking
                    </li>
                </ul>

                <div className="flex gap-2">
                    <Button
                        size="sm"
                        variant="outline"
                        className="flex-1"
                        onClick={() => openPopup("teahouse")}
                    >
                        More
                    </Button>
                    <Button size="sm" asChild className="flex-1">
                    <a href="https://met-tea.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} className="mr-2" />
                        Live Site
                    </a>
                    </Button>
                </div>
                </CardContent>
            </Card>

            {activePopup === "teahouse" && (
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
                        aria-labelledby="teahouse-popup-title"
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
                                    <h3 id="teahouse-popup-title" className="text-3xl font-bold text-foreground">
                                        Met Tea - Restaurant Loyalty Website
                                    </h3>
                                    <p className="text-base text-muted-foreground">
                                        A customer loyalty platform developed for a tea-focused restaurant with QR code-based rewards system.
                                    </p>
                                </header>

                                <section className="space-y-4">
                                    <h4 className="text-lg font-semibold text-foreground">Project Overview</h4>
                                    <p className="leading-relaxed text-muted-foreground">
                                        A customer loyalty platform developed for a tea-focused restaurant. The site provides two distinct user roles: clients and managers. Clients register to create personal accounts with dashboards, while managers use an admin panel to validate visits and assign cashback rewards.
                                    </p>
                                </section>

                                <section className="space-y-4">
                                    <h4 className="text-lg font-semibold text-foreground">Design Philosophy</h4>
                                    <p className="leading-relaxed text-muted-foreground">
                                        The website follows a clean and functional design approach, emphasizing clarity and ease of use for both customers and staff. The interface uses a modern aesthetic with Tailwind CSS styling, ensuring intuitive navigation and a professional restaurant-oriented brand identity.
                                    </p>
                                </section>

                                <section className="grid gap-8 lg:grid-cols-2">
                                    <div className="space-y-4">
                                        <h4 className="text-lg font-semibold text-foreground">Core Functionality</h4>
                                        <div className="space-y-4">
                                            <div>
                                                <h5 className="text-sm font-semibold text-foreground mb-2">Client Dashboard</h5>
                                                <ul className="space-y-2 text-sm text-muted-foreground">
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle size={16} className="mt-0.5 text-primary" />
                                                        <span>Account registration and login</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle size={16} className="mt-0.5 text-primary" />
                                                        <span>Unique personal QR code generation</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle size={16} className="mt-0.5 text-primary" />
                                                        <span>Cashback balance and order history tracking</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h5 className="text-sm font-semibold text-foreground mb-2">QR Code System</h5>
                                                <ul className="space-y-2 text-sm text-muted-foreground">
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle size={16} className="mt-0.5 text-primary" />
                                                        <span>Clients present their QR code at checkout</span>
                                                    </li>
                                                    <li className="flex items-start gap-2">
                                                        <CheckCircle size={16} className="mt-0.5 text-primary" />
                                                        <span>Managers scan the code to access client profile</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <h4 className="text-lg font-semibold text-foreground">Manager Dashboard</h4>
                                        <ul className="space-y-2 text-muted-foreground">
                                            <li className="flex items-start gap-2">
                                                <CheckCircle size={16} className="mt-1 text-primary" />
                                                <span>Scan QR codes and identify clients</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle size={16} className="mt-1 text-primary" />
                                                <span>Record payment amounts (e.g., 5000 AMD)</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle size={16} className="mt-1 text-primary" />
                                                <span>Automatically calculate cashback (1% of the bill)</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <CheckCircle size={16} className="mt-1 text-primary" />
                                                <span>Update client profiles with cashback transactions</span>
                                            </li>
                                        </ul>

                                        <div className="rounded-xl bg-muted/50 p-5 mt-4">
                                            <h5 className="text-sm font-semibold uppercase tracking-wide text-primary">Cashback Rewards</h5>
                                            <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                                                <li>• Clients accumulate cashback over time</li>
                                                <li>• Cashback can be redeemed as payment for future orders</li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>

                                <section className="space-y-4">
                                    <h4 className="text-lg font-semibold text-foreground">Business Impact Features</h4>
                                    <div className="grid gap-4 md:grid-cols-2">
                                        <div className="rounded-xl border border-border/60 bg-muted/40 p-5">
                                            <h5 className="text-sm font-semibold uppercase tracking-wide text-primary mb-2">Customer Retention</h5>
                                            <p className="text-sm text-muted-foreground">Cashback system motivates repeat visits</p>
                                        </div>
                                        <div className="rounded-xl border border-border/60 bg-muted/40 p-5">
                                            <h5 className="text-sm font-semibold uppercase tracking-wide text-primary mb-2">Streamlined Workflow</h5>
                                            <p className="text-sm text-muted-foreground">Managers process loyalty rewards quickly</p>
                                        </div>
                                        <div className="rounded-xl border border-border/60 bg-muted/40 p-5">
                                            <h5 className="text-sm font-semibold uppercase tracking-wide text-primary mb-2">Transparency</h5>
                                            <p className="text-sm text-muted-foreground">Clients see real-time cashback status in their accounts</p>
                                        </div>
                                        <div className="rounded-xl border border-border/60 bg-muted/40 p-5">
                                            <h5 className="text-sm font-semibold uppercase tracking-wide text-primary mb-2">Digital Transformation</h5>
                                            <p className="text-sm text-muted-foreground">Replaces manual loyalty cards with QR code automation</p>
                                        </div>
                                    </div>
                                </section>

                                <section className="space-y-4">
                                    <h4 className="text-lg font-semibold text-foreground">Technical Implementation</h4>
                                    <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                                        <li><span className="font-medium text-foreground">React:</span> Application front-end with modern component architecture</li>
                                        <li><span className="font-medium text-foreground">Supabase:</span> Database, authentication, and QR code storage</li>
                                        <li><span className="font-medium text-foreground">Tailwind CSS:</span> Responsive styling and layout</li>
                                        <li><span className="font-medium text-foreground">Role-based dashboards:</span> Separating client and manager functionality</li>
                                    </ul>
                                </section>

                                <section className="space-y-4">
                                    <h4 className="text-lg font-semibold text-foreground">User Experience Focus</h4>
                                    <p className="leading-relaxed text-muted-foreground">
                                        The platform prioritizes simplicity and efficiency for two user groups: Clients enjoy a straightforward dashboard to track rewards, while managers benefit from fast scanning and automated cashback calculations. Every interaction is optimized to strengthen the connection between restaurant and customer, enhancing loyalty and encouraging repeat business.
                                    </p>
                                </section>

                                <section className="space-y-4">
                                    <h4 className="text-lg font-semibold text-foreground">Technologies Used</h4>
                                    <div className="flex flex-wrap gap-2">
                                        <Badge variant="outline">React</Badge>
                                        <Badge variant="outline">Supabase</Badge>
                                        <Badge variant="outline">Tailwind CSS</Badge>
                                        <Badge variant="outline">QR Code Generation</Badge>
                                        <Badge variant="outline">Authentication</Badge>
                                        <Badge variant="outline">Responsive Design</Badge>
                                    </div>
                                </section>

                                <section className="space-y-4">
                                    <h4 className="text-lg font-semibold text-foreground">Project Screenshots</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        {teahouseImages.map((image) => (
                                            <div 
                                                key={image.id} 
                                                className="relative group cursor-pointer overflow-hidden rounded-lg bg-card shadow-lg hover:shadow-xl transition-all duration-300"
                                                onClick={() => setSelectedImage(image.full)}
                                            >
                                                <div className="aspect-[4/3] w-full overflow-hidden">
                                                    <img 
                                                        src={image.thumb} 
                                                        alt={image.title} 
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                        loading="lazy"
                                                    />
                                                </div>
                                                
                                                {/* Mobile Zoom Icon */}
                                                <div className="absolute top-2 right-2 sm:hidden bg-black/60 backdrop-blur-sm rounded-full p-2 opacity-80">
                                                    <ZoomIn size={16} className="text-white" />
                                                </div>
                                                
                                                {/* Desktop Magnifying Glass Overlay */}
                                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center hidden sm:flex">
                                                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                                                        <Search size={32} className="text-white" />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <footer className="flex flex-wrap justify-end gap-2">
                                    <Button variant="outline" onClick={closePopup}>
                                        Close
                                    </Button>
                                    <Button asChild>
                                        <a href="https://met-tea.netlify.app/" target="_blank" rel="noopener noreferrer">
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

            {/* Lightbox Modal for All Projects */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 z-[80] bg-black/90 flex items-center justify-center p-2 sm:p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative w-full h-full max-w-7xl flex items-center justify-center group">
                        <div 
                            className="overflow-auto max-h-full"
                            onTouchStart={onTouchStart}
                            onTouchMove={onTouchMove}
                            onTouchEnd={onTouchEnd}
                        >
                            <div className="p-4 pt-0">
                                <img 
                                    src={selectedImage} 
                                    alt="Project Screenshot" 
                                    className={`max-w-full w-auto h-auto object-contain rounded-lg shadow-2xl transition-all duration-300 ${
                                        isAnimating 
                                            ? animationDirection === 'left' 
                                                ? 'transform translate-x-full opacity-0' 
                                                : 'transform -translate-x-full opacity-0'
                                            : 'transform translate-x-0 opacity-100'
                                    }`}
                                    onClick={(e) => e.stopPropagation()}
                                />
                            </div>
                        </div>
                        
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="fixed top-2 right-2 sm:top-4 sm:right-4 bg-black/70 hover:bg-black/90 text-white rounded-full p-2 sm:p-3 transition-colors z-20 backdrop-blur-sm"
                        >
                            <X size={20} className="sm:w-6 sm:h-6" />
                        </button>

                        {/* Navigation Buttons */}
                        {getCurrentImages().length > 1 && (
                            <>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigateImage('prev');
                                    }}
                                    disabled={isAnimating}
                                    className={`fixed left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white rounded-full p-2 sm:p-3 transition-all duration-300 z-20 backdrop-blur-sm sm:opacity-0 sm:group-hover:opacity-100 opacity-80 ${
                                        isAnimating ? 'cursor-not-allowed opacity-50' : ''
                                    }`}
                                >
                                    <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigateImage('next');
                                    }}
                                    disabled={isAnimating}
                                    className={`fixed right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white rounded-full p-2 sm:p-3 transition-all duration-300 z-20 backdrop-blur-sm sm:opacity-0 sm:group-hover:opacity-100 opacity-80 ${
                                        isAnimating ? 'cursor-not-allowed opacity-50' : ''
                                    }`}
                                >
                                    <ChevronRight size={20} className="sm:w-6 sm:h-6" />
                                </button>
                            </>
                        )}

                        {/* Image Info */}
                        <div className="fixed bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 bg-black/70 backdrop-blur-sm text-white rounded-lg p-3 sm:p-4 transition-all duration-300 opacity-0 group-hover:opacity-100 z-20">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="font-medium text-sm sm:text-base">
                                        {getCurrentImages().find(img => img.full === selectedImage)?.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-gray-300 mt-1">
                                        {getCurrentImageIndex() + 1} of {getCurrentImages().length}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            </div>
        </section>

    );
}