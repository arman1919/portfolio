'use client';

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ExternalLink, X, ChevronLeft, ChevronRight, Search, ZoomIn, Code2, Layout, Smartphone, Zap, Globe, Cpu, CheckCircle, Database, Shield, CreditCard, Lock, Calculator, Sparkles } from "lucide-react";
import { useScrollAnimation } from "../useScrollAnimation";

type PopupId = "levelstudio" | "travelagency" | "trainup" | "axion" | "uinvite" | "aiswift" | null;

export default function Projects() {
    const [activePopup, setActivePopup] = useState<PopupId>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isZoomed, setIsZoomed] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [animationDirection, setAnimationDirection] = useState<'left' | 'right' | null>(null);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    // Scroll animations
    const titleAnim = useScrollAnimation('blur-in', { threshold: 0.2 });
    const proj1 = useScrollAnimation('stagger', { delay: 0 });
    const proj2 = useScrollAnimation('stagger', { delay: 100 });
    const proj3 = useScrollAnimation('stagger', { delay: 200 });
    const proj4 = useScrollAnimation('stagger', { delay: 100 });
    const proj5 = useScrollAnimation('stagger', { delay: 200 });
    const proj6 = useScrollAnimation('stagger', { delay: 300 });

    // LevelStudio project images
    const levelstudioImages = [
        { id: 18, full: "/portfolio-images/full/levelstudio-1.webp", title: "LevelStudio.am" },
        { id: 19, full: "/portfolio-images/full/levelstudio-2.webp", title: "LevelStudio.am Calculator" },
    ];

    // Travel Agency project images placeholders
    const travelagencyImages = [
        { id: 31, full: "/portfolio-images/full/travelagency-gallery-1.webp", title: "Travel Agency Website" },
        { id: 33, full: "/portfolio-images/full/travelagency-gallery-2.webp", title: "Tours Page" },
    ];

    // TrainUp Academy project images placeholders
    const trainupImages = [
        { id: 41, full: "/portfolio-images/full/trainup-gallery-1.webp", title: "TrainUp Academy Platform" },
        { id: 42, full: "/portfolio-images/full/trainup-gallery-2.webp", title: "About Page" },
        { id: 43, full: "/portfolio-images/full/trainup-gallery-3.webp", title: "Blog Page" },
        { id: 44, full: "/portfolio-images/full/trainup-gallery-4.webp", title: "Payment Page" },
    ];

    // axion landing platform placeholders
    const axionImages = [
        { id: 51, full: "/portfolio-images/full/axion-gallery-1.webp", title: "axion Landing Page Platform" },
        { id: 52, full: "/portfolio-images/full/axion-gallery-2.webp", title: "Interactive Cost Calculator" },
        { id: 53, full: "/portfolio-images/full/axion-gallery-3.webp", title: "Portfolio Page" },
        { id: 54, full: "/portfolio-images/full/axion-gallery-4.webp", title: "FAQ Page" },
    ];

    // uinvite online invitations placeholders
    const uinviteImages = [
        { id: 61, full: "/portfolio-images/full/uinvite-gallery-1.webp", title: "uInvite Template Catalog" },
        { id: 62, full: "/portfolio-images/full/uinvite-gallery-2.webp", title: "Template Preview" },
    ];

    // aiswift template platform placeholders
    const aiswiftImages = [
        { id: 71, full: "/portfolio-images/full/aiswift-gallery-1.webp", title: "AISwift Home Page" },
        { id: 72, full: "/portfolio-images/full/aiswift-gallery-2.webp", title: "Template Preview" },
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

    const getCurrentImages = () => {
        if (activePopup === 'levelstudio') return levelstudioImages;
        if (activePopup === 'travelagency') return travelagencyImages;
        if (activePopup === 'trainup') return trainupImages;
        if (activePopup === 'axion') return axionImages;
        if (activePopup === 'uinvite') return uinviteImages;
        if (activePopup === 'aiswift') return aiswiftImages;
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
            setIsZoomed(true); // Open with zoom by default
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
                <div ref={titleAnim.ref} className={titleAnim.className}>
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-balance">Featured Projects</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                    <div ref={proj1.ref} className={proj1.className}>
                    <Card className="glass-card hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group overflow-hidden flex flex-col border border-border/50 h-full">
                        {/* Main Thumbnail Area */}
                        <div
                            className="relative w-full h-56 overflow-hidden cursor-pointer bg-muted"
                            onClick={() => openPopup("levelstudio")}
                        >
                            <Image src="/portfolio-images/cards/levelstudio-cover.webp" alt="Level Studio Cover" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <Search size={32} className="text-white drop-shadow-lg" />
                            </div>
                        </div>

                        <CardContent className="p-6 flex-1 flex flex-col">
                            <div className="mb-4">
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    Level Studio
                                </h3>
                                <p className="text-muted-foreground text-sm line-clamp-2">
                                    Marketing & photo-video studio platform.
                                </p>
                            </div>

                            {/* Prominent Tech Stack Badges */}
                            <div className="mb-6 flex-1">
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20 text-primary border-none p-1.5 px-3 whitespace-nowrap">
                                        <Code2 size={14} className="mr-1.5" /> HTML/CSS/JS
                                    </Badge>
                                    <Badge variant="secondary" className="p-1.5 px-3 whitespace-nowrap">
                                        <Layout size={14} className="mr-1.5" /> UI/UX
                                    </Badge>
                                    <Badge variant="secondary" className="p-1.5 px-3 whitespace-nowrap">
                                        <Smartphone size={14} className="mr-1.5" /> Responsive
                                    </Badge>
                                </div>
                            </div>

                            <div className="flex gap-3 mt-auto">
                                <Button
                                    variant="default"
                                    className="flex-1 shadow-md hover:shadow-lg transition-all"
                                    onClick={() => openPopup("levelstudio")}
                                >
                                    Details
                                </Button>
                                <Button variant="outline" asChild className="flex-1 border-primary/20 hover:border-primary/50">
                                    <a href="https://levelstudio.am/" target="_blank" rel="noopener noreferrer">
                                        <ExternalLink size={16} className="mr-2" />
                                        Live Site
                                    </a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                    </div>

                    {activePopup === "levelstudio" && (
                        <>
                            <div
                                role="presentation"
                                aria-hidden="true"
                                onClick={closePopup}
                                className="fixed inset-0 z-[60] cursor-pointer overflow-hidden backdrop-blur-sm"
                            >
                                <div className="pointer-events-none absolute inset-0 bg-slate-950/80" />
                            </div>
                            <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6">
                                <div
                                    role="dialog"
                                    aria-modal="true"
                                    aria-labelledby="levelstudio-popup-title"
                                    className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-border/50 bg-background/95 backdrop-blur-xl shadow-2xl flex flex-col max-h-[90vh]"
                                >
                                    <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b border-border/50 bg-background/80 backdrop-blur-md">
                                        <h3 id="levelstudio-popup-title" className="text-xl sm:text-2xl font-bold text-foreground">
                                            Level Studio
                                        </h3>
                                        <Button
                                            size="icon"
                                            variant="ghost"
                                            className="rounded-full hover:bg-destructive/10 hover:text-destructive transition-colors"
                                            onClick={closePopup}
                                            aria-label="Close popup"
                                        >
                                            <X size={20} />
                                        </Button>
                                    </div>

                                    <div className="overflow-y-auto p-6 sm:p-8 custom-scrollbar">

                                        {/* Images Gallery Prominent */}
                                        <section className="mb-10">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                                {levelstudioImages.map((image) => (
                                                    <div
                                                        key={image.id}
                                                        className="relative group cursor-pointer overflow-hidden rounded-2xl bg-muted border border-border/50 shadow-md hover:shadow-xl transition-all duration-300"
                                                        onClick={() => setSelectedImage(image.full)}
                                                    >
                                                        <div className="aspect-[16/10] w-full overflow-hidden relative">
                                                            <Image
                                                                src={image.full}
                                                                alt={image.title}
                                                                fill
                                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                            />
                                                        </div>
                                                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                            <div className="bg-background/90 backdrop-blur-sm rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                                <ZoomIn size={24} className="text-foreground" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>

                                        {/* Tech Stack Prominent for HR */}
                                        <section className="mb-10 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                                            <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-5 flex items-center gap-2">
                                                <Cpu size={18} /> Technologies Used
                                            </h4>
                                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                                <Badge variant="default" className="text-sm py-2 px-4 shadow-sm hover:shadow transition-shadow">
                                                    <Code2 size={16} className="mr-2" /> HTML/CSS/JS
                                                </Badge>
                                                <Badge variant="default" className="text-sm py-2 px-4 shadow-sm hover:shadow transition-shadow">
                                                    <Globe size={16} className="mr-2" /> EmailJS
                                                </Badge>
                                                <Badge variant="default" className="text-sm py-2 px-4 shadow-sm hover:shadow transition-shadow">
                                                    <Layout size={16} className="mr-2" /> Custom Interface
                                                </Badge>
                                                <Badge variant="default" className="text-sm py-2 px-4 shadow-sm hover:shadow transition-shadow">
                                                    <Smartphone size={16} className="mr-2" /> Mobile-First
                                                </Badge>
                                            </div>
                                        </section>

                                        {/* Minimal Bullet Points */}
                                        <section className="grid md:grid-cols-2 gap-8 mb-6">
                                            <div className="space-y-4">
                                                <h4 className="text-lg font-semibold text-foreground flex items-center gap-2 border-b border-border/50 pb-2">
                                                    <Zap size={20} className="text-primary" /> Key Features
                                                </h4>
                                                <ul className="space-y-3 text-muted-foreground">
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-primary/10 p-1 rounded-full text-primary"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">Interactive service pricing calculator</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-primary/10 p-1 rounded-full text-primary"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">Multilingual support (RU, EN, AM)</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-primary/10 p-1 rounded-full text-primary"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">Optimized media presentation</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="space-y-4">
                                                <h4 className="text-lg font-semibold text-foreground flex items-center gap-2 border-b border-border/50 pb-2">
                                                    <CheckCircle size={20} className="text-emerald-500" /> Project Results
                                                </h4>
                                                <ul className="space-y-3 text-muted-foreground">
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-emerald-500/10 p-1 rounded-full text-emerald-500"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">Direct lead generation via EmailJS</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-emerald-500/10 p-1 rounded-full text-emerald-500"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">Clean, maintainable JavaScript code</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-emerald-500/10 p-1 rounded-full text-emerald-500"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">High performance on mobile devices</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-emerald-500/10 p-1 rounded-full text-emerald-500"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">Configured DNS & redirected existing domain to Netlify hosting</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </section>

                                        <div className="flex justify-end pt-6 mt-4 border-t border-border/50">
                                            <Button asChild size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-all">
                                                <a href="https://levelstudio.am/" target="_blank" rel="noopener noreferrer">
                                                    Visit Live Site <ExternalLink size={18} className="ml-2" />
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {/* Travel Agency Card */}
                    <div ref={proj2.ref} className={proj2.className}>
                    <Card className="glass-card hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group overflow-hidden flex flex-col border border-border/50 h-full">
                        <div
                            className="relative w-full h-56 overflow-hidden cursor-pointer bg-muted"
                            onClick={() => openPopup("travelagency")}
                        >
                            <Image src="/portfolio-images/cards/travelagency-cover.webp" alt="Travel Agency Website" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <Search size={32} className="text-white drop-shadow-lg" />
                            </div>
                        </div>

                        <CardContent className="p-6 flex-1 flex flex-col">
                            <div className="mb-4">
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    Travel Agency
                                </h3>
                                <p className="text-muted-foreground text-sm line-clamp-2">
                                    Full-stack travel agency website with comprehensive CMS.
                                </p>
                            </div>

                            <div className="mb-6 flex-1">
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20 text-primary border-none p-1.5 px-3 whitespace-nowrap">
                                        <Code2 size={14} className="mr-1.5" /> React / Laravel
                                    </Badge>
                                    <Badge variant="secondary" className="p-1.5 px-3 whitespace-nowrap">
                                        <Globe size={14} className="mr-1.5" /> Multilingual
                                    </Badge>
                                    <Badge variant="secondary" className="p-1.5 px-3 whitespace-nowrap">
                                        <Database size={14} className="mr-1.5" /> CMS System
                                    </Badge>
                                </div>
                            </div>

                            <div className="flex gap-3 mt-auto">
                                <Button
                                    variant="default"
                                    className="flex-1 shadow-md hover:shadow-lg transition-all"
                                    onClick={() => openPopup("travelagency")}
                                >
                                    Details
                                </Button>
                                <Button variant="outline" asChild className="flex-1 border-primary/20 hover:border-primary/50">
                                    <a href="https://armenianhorizons.com/" target="_blank" rel="noopener noreferrer">
                                        <ExternalLink size={16} className="mr-2" />
                                        Live Site
                                    </a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                    </div>

                    {/* Travel Agency Popup */}
                    {activePopup === "travelagency" && (
                        <>
                            <div
                                role="presentation"
                                aria-hidden="true"
                                onClick={closePopup}
                                className="fixed inset-0 z-[60] cursor-pointer overflow-hidden backdrop-blur-sm"
                            >
                                <div className="pointer-events-none absolute inset-0 bg-slate-950/80" />
                            </div>
                            <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6">
                                <div
                                    role="dialog"
                                    aria-modal="true"
                                    aria-labelledby="travelagency-popup-title"
                                    className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-border/50 bg-background/95 backdrop-blur-xl shadow-2xl flex flex-col max-h-[90vh]"
                                >
                                    <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b border-border/50 bg-background/80 backdrop-blur-md">
                                        <h3 id="travelagency-popup-title" className="text-xl sm:text-2xl font-bold text-foreground">
                                            Travel Agency Website (Full-stack)
                                        </h3>
                                        <Button
                                            size="icon"
                                            variant="ghost"
                                            className="rounded-full hover:bg-destructive/10 hover:text-destructive transition-colors"
                                            onClick={closePopup}
                                            aria-label="Close popup"
                                        >
                                            <X size={20} />
                                        </Button>
                                    </div>

                                    <div className="overflow-y-auto p-6 sm:p-8 custom-scrollbar">
                                        <section className="mb-10">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                                {travelagencyImages.map((image) => (
                                                    <div
                                                        key={image.id}
                                                        className="relative group cursor-pointer overflow-hidden rounded-2xl bg-muted border border-border/50 shadow-md hover:shadow-xl transition-all duration-300"
                                                        onClick={() => setSelectedImage(image.full)}
                                                    >
                                                        <div className="aspect-[16/10] w-full overflow-hidden relative">
                                                            <Image
                                                                src={image.full}
                                                                alt={image.title}
                                                                fill
                                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                            />
                                                        </div>
                                                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                            <div className="bg-background/90 backdrop-blur-sm rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                                <ZoomIn size={24} className="text-foreground" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>

                                        <section className="mb-10 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                                            <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-5 flex items-center gap-2">
                                                <Cpu size={18} /> Technologies Used
                                            </h4>
                                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                                <Badge variant="default" className="text-sm py-2 px-4 shadow-sm hover:shadow transition-shadow">
                                                    <Code2 size={16} className="mr-2" /> React (Vite)
                                                </Badge>
                                                <Badge variant="default" className="text-sm py-2 px-4 shadow-sm hover:shadow transition-shadow">
                                                    <Database size={16} className="mr-2" /> Laravel Backend
                                                </Badge>
                                                <Badge variant="default" className="text-sm py-2 px-4 shadow-sm hover:shadow transition-shadow">
                                                    <Layout size={16} className="mr-2" /> Filament CMS
                                                </Badge>
                                                <Badge variant="default" className="text-sm py-2 px-4 shadow-sm hover:shadow transition-shadow">
                                                    <Globe size={16} className="mr-2" /> i18n
                                                </Badge>
                                            </div>
                                        </section>

                                        <section className="grid md:grid-cols-2 gap-8 mb-6">
                                            <div className="space-y-4">
                                                <h4 className="text-lg font-semibold text-foreground flex items-center gap-2 border-b border-border/50 pb-2">
                                                    <Zap size={20} className="text-primary" /> Key Features
                                                </h4>
                                                <ul className="space-y-3 text-muted-foreground">
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-primary/10 p-1 rounded-full text-primary"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">Fully dynamic content management via Filament</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-primary/10 p-1 rounded-full text-primary"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">Multilingual support (3 languages) editable in CMS</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-primary/10 p-1 rounded-full text-primary"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">Management of tours, sliders, blogs, and sections</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-primary/10 p-1 rounded-full text-primary"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">Form processing and CMS inquiry management</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-primary/10 p-1 rounded-full text-primary"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">Custom loading screens and micro-animations</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="space-y-4">
                                                <h4 className="text-lg font-semibold text-foreground flex items-center gap-2 border-b border-border/50 pb-2">
                                                    <CheckCircle size={20} className="text-emerald-500" /> Project Insights
                                                </h4>
                                                <ul className="space-y-3 text-muted-foreground">
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-emerald-500/10 p-1 rounded-full text-emerald-500"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">Developed completely solo: from domain setup to architecture</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-emerald-500/10 p-1 rounded-full text-emerald-500"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">Deployed full-stack app on cPanel with backend subdomains, configuring DNS & Laravel migrations</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-emerald-500/10 p-1 rounded-full text-emerald-500"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">Optimized React (Vite) frontend for speed & responsiveness</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-emerald-500/10 p-1 rounded-full text-emerald-500"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">Generated dynamic sitemaps & meta-tags for robust SEO</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </section>

                                        <div className="flex justify-end pt-6 mt-4 border-t border-border/50">
                                            <Button asChild size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-all">
                                                <a href="https://armenianhorizons.com/" target="_blank" rel="noopener noreferrer">
                                                    Visit Live Site <ExternalLink size={18} className="ml-2" />
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {/* TrainUp Academy Card */}
                    <div ref={proj3.ref} className={proj3.className}>
                    <Card className="glass-card hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group overflow-hidden flex flex-col border border-border/50 h-full">
                        <div
                            className="relative w-full h-56 overflow-hidden cursor-pointer bg-muted"
                            onClick={() => openPopup("trainup")}
                        >
                            <Image src="/portfolio-images/cards/trainup-cover.webp" alt="TrainUp Academy Platform" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <Search size={32} className="text-white drop-shadow-lg" />
                            </div>
                        </div>

                        <CardContent className="p-6 flex-1 flex flex-col">
                            <div className="mb-4">
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    TrainUp Academy
                                </h3>
                                <p className="text-muted-foreground text-sm line-clamp-2">
                                    E-learning platform with Ameriabank payment integration, financial logic & secure video access.
                                </p>
                            </div>

                            <div className="mb-6 flex-1">
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20 text-primary border-none p-1.5 px-3 whitespace-nowrap">
                                        <Code2 size={14} className="mr-1.5" /> Vue.js / Laravel
                                    </Badge>
                                    <Badge variant="secondary" className="p-1.5 px-3 whitespace-nowrap">
                                        <CreditCard size={14} className="mr-1.5" /> Ameriabank API
                                    </Badge>
                                    <Badge variant="secondary" className="p-1.5 px-3 whitespace-nowrap">
                                        <Shield size={14} className="mr-1.5" /> Security
                                    </Badge>
                                </div>
                            </div>

                            <div className="flex gap-3 mt-auto">
                                <Button
                                    variant="default"
                                    className="flex-1 shadow-md hover:shadow-lg transition-all"
                                    onClick={() => openPopup("trainup")}
                                >
                                    Details
                                </Button>
                                <Button variant="outline" asChild className="flex-1 border-primary/20 hover:border-primary/50">
                                    <a href="https://trainup.academy/" target="_blank" rel="noopener noreferrer">
                                        <ExternalLink size={16} className="mr-2" />
                                        Live Site
                                    </a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                    </div>

                    {/* TrainUp Popup */}
                    {activePopup === "trainup" && (
                        <>
                            <div
                                role="presentation"
                                aria-hidden="true"
                                onClick={closePopup}
                                className="fixed inset-0 z-[60] cursor-pointer overflow-hidden backdrop-blur-sm"
                            >
                                <div className="pointer-events-none absolute inset-0 bg-slate-950/80" />
                            </div>
                            <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6">
                                <div
                                    role="dialog"
                                    aria-modal="true"
                                    aria-labelledby="trainup-popup-title"
                                    className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-border/50 bg-background/95 backdrop-blur-xl shadow-2xl flex flex-col max-h-[90vh]"
                                >
                                    <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b border-border/50 bg-background/80 backdrop-blur-md">
                                        <h3 id="trainup-popup-title" className="text-xl sm:text-2xl font-bold text-foreground">
                                            TrainUp Academy Platform
                                        </h3>
                                        <Button
                                            size="icon"
                                            variant="ghost"
                                            className="rounded-full hover:bg-destructive/10 hover:text-destructive transition-colors"
                                            onClick={closePopup}
                                            aria-label="Close popup"
                                        >
                                            <X size={20} />
                                        </Button>
                                    </div>

                                    <div className="overflow-y-auto p-6 sm:p-8 custom-scrollbar">
                                        <section className="mb-10">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                                {trainupImages.map((image) => (
                                                    <div
                                                        key={image.id}
                                                        className="relative group cursor-pointer overflow-hidden rounded-2xl bg-muted border border-border/50 shadow-md hover:shadow-xl transition-all duration-300"
                                                        onClick={() => setSelectedImage(image.full)}
                                                    >
                                                        <div className="aspect-[16/10] w-full overflow-hidden relative">
                                                            <Image
                                                                src={image.full}
                                                                alt={image.title}
                                                                fill
                                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                            />
                                                        </div>
                                                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                            <div className="bg-background/90 backdrop-blur-sm rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                                <ZoomIn size={24} className="text-foreground" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>

                                        <section className="mb-10 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                                            <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-5 flex items-center gap-2">
                                                <Cpu size={18} /> Technologies Used
                                            </h4>
                                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                                <Badge variant="default" className="text-sm py-2 px-4 shadow-sm hover:shadow transition-shadow">
                                                    <Code2 size={16} className="mr-2" /> Vue.js & Laravel
                                                </Badge>
                                                <Badge variant="default" className="text-sm py-2 px-4 shadow-sm hover:shadow transition-shadow">
                                                    <CreditCard size={16} className="mr-2" /> Ameriabank API
                                                </Badge>
                                                <Badge variant="default" className="text-sm py-2 px-4 shadow-sm hover:shadow transition-shadow">
                                                    <Shield size={16} className="mr-2" /> Financial Logic Security
                                                </Badge>
                                                <Badge variant="default" className="text-sm py-2 px-4 shadow-sm hover:shadow transition-shadow">
                                                    <Lock size={16} className="mr-2" /> Video URL Protection
                                                </Badge>
                                            </div>
                                        </section>

                                        <section className="grid md:grid-cols-2 gap-8 mb-6">
                                            <div className="space-y-4">
                                                <h4 className="text-lg font-semibold text-foreground flex items-center gap-2 border-b border-border/50 pb-2">
                                                    <Zap size={20} className="text-primary" /> Key Features
                                                </h4>
                                                <ul className="space-y-3 text-muted-foreground">
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-primary/10 p-1 rounded-full text-primary"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">Full Ameriabank integration with tokenized card support</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-primary/10 p-1 rounded-full text-primary"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">Automatic platform commission & instructor balance calculation</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-primary/10 p-1 rounded-full text-primary"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">Secure video access (preventing direct link manipulation)</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-primary/10 p-1 rounded-full text-primary"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">FAQ bot, NativeMail notifications, and whitelist functionality</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="space-y-4">
                                                <h4 className="text-lg font-semibold text-foreground flex items-center gap-2 border-b border-border/50 pb-2">
                                                    <Shield size={20} className="text-emerald-500" /> Project Insights
                                                </h4>
                                                <ul className="space-y-3 text-muted-foreground">
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-emerald-500/10 p-1 rounded-full text-emerald-500"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">Protected financial system against data manipulations</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-emerald-500/10 p-1 rounded-full text-emerald-500"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">Scaled existing platform translating into 3 static languages</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-emerald-500/10 p-1 rounded-full text-emerald-500"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">Dynamic sync between student purchases & instructor payouts</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-emerald-500/10 p-1 rounded-full text-emerald-500"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">Configured CI/CD on cPanel for automated deployment on every Git push</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </section>

                                        <div className="flex justify-end pt-6 mt-4 border-t border-border/50">
                                            <Button asChild size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-all">
                                                <a href="https://trainup.academy/" target="_blank" rel="noopener noreferrer">
                                                    Visit Live Site <ExternalLink size={18} className="ml-2" />
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {/* axion Card */}
                    <div ref={proj4.ref} className={proj4.className}>
                    <Card className="glass-card hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group overflow-hidden flex flex-col border border-border/50 h-full">
                        <div
                            className="relative w-full h-56 overflow-hidden cursor-pointer bg-muted"
                            onClick={() => openPopup("axion")}
                        >
                            <Image src="/portfolio-images/cards/axion-cover.webp" alt="Axion Landing Pages" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <Search size={32} className="text-white drop-shadow-lg" />
                            </div>
                        </div>

                        <CardContent className="p-6 flex-1 flex flex-col">
                            <div className="mb-4">
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    Axion Landing Pages
                                </h3>
                                <p className="text-muted-foreground text-sm line-clamp-2">
                                    A powerful landing page platform demonstrating one-page solutions with interactive calculators.
                                </p>
                            </div>

                            <div className="mb-6 flex-1">
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20 text-primary border-none p-1.5 px-3 whitespace-nowrap">
                                        <Code2 size={14} className="mr-1.5" /> Next.js / Tailwind
                                    </Badge>
                                    <Badge variant="secondary" className="p-1.5 px-3 whitespace-nowrap">
                                        <Calculator size={14} className="mr-1.5" /> Calculator
                                    </Badge>
                                    <Badge variant="secondary" className="p-1.5 px-3 whitespace-nowrap">
                                        <Sparkles size={14} className="mr-1.5" /> Animations
                                    </Badge>
                                </div>
                            </div>

                            <div className="flex gap-3 mt-auto">
                                <Button
                                    variant="default"
                                    className="flex-1 shadow-md hover:shadow-lg transition-all"
                                    onClick={() => openPopup("axion")}
                                >
                                    Details
                                </Button>
                                <Button variant="outline" asChild className="flex-1 border-primary/20 hover:border-primary/50">
                                    <a href="https://www.axionpages.com/" target="_blank" rel="noopener noreferrer">
                                        <ExternalLink size={16} className="mr-2" />
                                        Live Site
                                    </a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                    </div>

                    {/* axion Popup */}
                    {activePopup === "axion" && (
                        <>
                            <div
                                role="presentation"
                                aria-hidden="true"
                                onClick={closePopup}
                                className="fixed inset-0 z-[60] cursor-pointer overflow-hidden backdrop-blur-sm"
                            >
                                <div className="pointer-events-none absolute inset-0 bg-slate-950/80" />
                            </div>
                            <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6">
                                <div
                                    role="dialog"
                                    aria-modal="true"
                                    aria-labelledby="axion-popup-title"
                                    className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-border/50 bg-background/95 backdrop-blur-xl shadow-2xl flex flex-col max-h-[90vh]"
                                >
                                    <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b border-border/50 bg-background/80 backdrop-blur-md">
                                        <h3 id="axion-popup-title" className="text-xl sm:text-2xl font-bold text-foreground">
                                            Axion Landing Page
                                        </h3>
                                        <Button
                                            size="icon"
                                            variant="ghost"
                                            className="rounded-full hover:bg-destructive/10 hover:text-destructive transition-colors"
                                            onClick={closePopup}
                                            aria-label="Close popup"
                                        >
                                            <X size={20} />
                                        </Button>
                                    </div>

                                    <div className="overflow-y-auto p-6 sm:p-8 custom-scrollbar">
                                        <section className="mb-10">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                                {axionImages.map((image) => (
                                                    <div
                                                        key={image.id}
                                                        className="relative group cursor-pointer overflow-hidden rounded-2xl bg-muted border border-border/50 shadow-md hover:shadow-xl transition-all duration-300"
                                                        onClick={() => setSelectedImage(image.full)}
                                                    >
                                                        <div className="aspect-[16/10] w-full overflow-hidden relative">
                                                            <Image
                                                                src={image.full}
                                                                alt={image.title}
                                                                fill
                                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                            />
                                                        </div>
                                                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                            <div className="bg-background/90 backdrop-blur-sm rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                                <ZoomIn size={24} className="text-foreground" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>

                                        <section className="mb-10 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                                            <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-5 flex items-center gap-2">
                                                <Cpu size={18} /> Technologies Used
                                            </h4>
                                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                                <Badge variant="default" className="text-sm py-2 px-4 shadow-sm hover:shadow transition-shadow">
                                                    <Code2 size={16} className="mr-2" /> Next.js
                                                </Badge>
                                                <Badge variant="default" className="text-sm py-2 px-4 shadow-sm hover:shadow transition-shadow">
                                                    <Layout size={16} className="mr-2" /> Tailwind CSS
                                                </Badge>
                                                <Badge variant="default" className="text-sm py-2 px-4 shadow-sm hover:shadow transition-shadow">
                                                    <Sparkles size={16} className="mr-2" /> UI/UX Animations
                                                </Badge>
                                                <Badge variant="default" className="text-sm py-2 px-4 shadow-sm hover:shadow transition-shadow">
                                                    <Calculator size={16} className="mr-2" /> Interactive Calculator
                                                </Badge>
                                            </div>
                                        </section>

                                        <section className="grid md:grid-cols-2 gap-8 mb-6">
                                            <div className="space-y-4">
                                                <h4 className="text-lg font-semibold text-foreground flex items-center gap-2 border-b border-border/50 pb-2">
                                                    <Zap size={20} className="text-primary" /> Key Features
                                                </h4>
                                                <ul className="space-y-3 text-muted-foreground">
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-primary/10 p-1 rounded-full text-primary"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">Highly dynamic real-time project cost calculator</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-primary/10 p-1 rounded-full text-primary"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">Robust multilingual CMS architecture (3 languages)</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-primary/10 p-1 rounded-full text-primary"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">Complex scroll animations and vivid visual effects</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-primary/10 p-1 rounded-full text-primary"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">Automated email contact systems for leads</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="space-y-4">
                                                <h4 className="text-lg font-semibold text-foreground flex items-center gap-2 border-b border-border/50 pb-2">
                                                    <Shield size={20} className="text-emerald-500" /> Project Insights
                                                </h4>
                                                <ul className="space-y-3 text-muted-foreground">
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-emerald-500/10 p-1 rounded-full text-emerald-500"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">Developed autonomously from scratch as a proprietary product</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-emerald-500/10 p-1 rounded-full text-emerald-500"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">Engineered over 25 unique templates to showcase versatility</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-emerald-500/10 p-1 rounded-full text-emerald-500"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">Maximized SEO and LCP performance using Next.js</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-emerald-500/10 p-1 rounded-full text-emerald-500"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">Setup custom DNS & Vercel automated CI/CD for instant preview and production builds</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </section>

                                        <div className="flex justify-end pt-6 mt-4 border-t border-border/50">
                                            <Button asChild size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-all">
                                                <a href="https://www.axionpages.com/" target="_blank" rel="noopener noreferrer">
                                                    Visit Live Site <ExternalLink size={18} className="ml-2" />
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {/* uInvite Card */}
                    <div ref={proj5.ref} className={proj5.className}>
                    <Card className="glass-card hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group overflow-hidden flex flex-col border border-border/50 h-full">
                        <div
                            className="relative w-full h-56 overflow-hidden cursor-pointer bg-muted"
                            onClick={() => openPopup("uinvite")}
                        >
                            <Image src="/portfolio-images/cards/uinvite-cover.webp" alt="uInvite Online Invitations" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <Search size={32} className="text-white drop-shadow-lg" />
                            </div>
                        </div>

                        <CardContent className="p-6 flex-1 flex flex-col">
                            <div className="mb-4">
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    UInvite
                                </h3>
                                <p className="text-muted-foreground text-sm line-clamp-2">
                                    Digital invitation platform with 30+ templates, rich media, and custom RSVP system.
                                </p>
                            </div>

                            <div className="mb-6 flex-1">
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20 text-primary border-none p-1.5 px-3 whitespace-nowrap">
                                        <Code2 size={14} className="mr-1.5" /> Full-stack
                                    </Badge>
                                    <Badge variant="secondary" className="p-1.5 px-3 whitespace-nowrap">
                                        <Layout size={14} className="mr-1.5" /> 30+ Templates
                                    </Badge>
                                    <Badge variant="secondary" className="p-1.5 px-3 whitespace-nowrap">
                                        <Database size={14} className="mr-1.5" /> RSVP System
                                    </Badge>
                                </div>
                            </div>

                            <div className="flex gap-3 mt-auto">
                                <Button
                                    variant="default"
                                    className="flex-1 shadow-md hover:shadow-lg transition-all"
                                    onClick={() => openPopup("uinvite")}
                                >
                                    Details
                                </Button>
                                <Button variant="outline" asChild className="flex-1 border-primary/20 hover:border-primary/50">
                                    <a href="http://uinvite.am/" target="_blank" rel="noopener noreferrer">
                                        <ExternalLink size={16} className="mr-2" />
                                        Live Site
                                    </a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                    </div>

                    {/* uInvite Popup */}
                    {activePopup === "uinvite" && (
                        <>
                            <div
                                role="presentation"
                                aria-hidden="true"
                                onClick={closePopup}
                                className="fixed inset-0 z-[60] cursor-pointer overflow-hidden backdrop-blur-sm"
                            >
                                <div className="pointer-events-none absolute inset-0 bg-slate-950/80" />
                            </div>
                            <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6">
                                <div
                                    role="dialog"
                                    aria-modal="true"
                                    aria-labelledby="uinvite-popup-title"
                                    className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-border/50 bg-background/95 backdrop-blur-xl shadow-2xl flex flex-col max-h-[90vh]"
                                >
                                    <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b border-border/50 bg-background/80 backdrop-blur-md">
                                        <h3 id="uinvite-popup-title" className="text-xl sm:text-2xl font-bold text-foreground">
                                            uInvite Online Invitations
                                        </h3>
                                        <Button
                                            size="icon"
                                            variant="ghost"
                                            className="rounded-full hover:bg-destructive/10 hover:text-destructive transition-colors"
                                            onClick={closePopup}
                                            aria-label="Close popup"
                                        >
                                            <X size={20} />
                                        </Button>
                                    </div>

                                    <div className="overflow-y-auto p-6 sm:p-8 custom-scrollbar">
                                        <section className="mb-10">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                                {uinviteImages.map((image) => (
                                                    <div
                                                        key={image.id}
                                                        className="relative group cursor-pointer overflow-hidden rounded-2xl bg-muted border border-border/50 shadow-md hover:shadow-xl transition-all duration-300"
                                                        onClick={() => setSelectedImage(image.full)}
                                                    >
                                                        <div className="aspect-[16/10] w-full overflow-hidden relative">
                                                            <Image
                                                                src={image.full}
                                                                alt={image.title}
                                                                fill
                                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                            />
                                                        </div>
                                                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                            <div className="bg-background/90 backdrop-blur-sm rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                                <ZoomIn size={24} className="text-foreground" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>

                                        <section className="mb-10 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                                            <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-5 flex items-center gap-2">
                                                <Cpu size={18} /> Technologies Used
                                            </h4>
                                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                                <Badge variant="default" className="text-sm py-2 px-4 shadow-sm hover:shadow transition-shadow">
                                                    <Code2 size={16} className="mr-2" /> React & Full-stack Architecture
                                                </Badge>
                                                <Badge variant="default" className="text-sm py-2 px-4 shadow-sm hover:shadow transition-shadow">
                                                    <Layout size={16} className="mr-2" /> 30+ Adaptive Templates
                                                </Badge>
                                                <Badge variant="default" className="text-sm py-2 px-4 shadow-sm hover:shadow transition-shadow">
                                                    <Sparkles size={16} className="mr-2" /> Interactive Media & Animations
                                                </Badge>
                                                <Badge variant="default" className="text-sm py-2 px-4 shadow-sm hover:shadow transition-shadow">
                                                    <Database size={16} className="mr-2" /> Real-time RSVP & Email
                                                </Badge>
                                            </div>
                                        </section>

                                        <section className="grid md:grid-cols-2 gap-8 mb-6">
                                            <div className="space-y-4">
                                                <h4 className="text-lg font-semibold text-foreground flex items-center gap-2 border-b border-border/50 pb-2">
                                                    <Zap size={20} className="text-primary" /> Key Features
                                                </h4>
                                                <ul className="space-y-3 text-muted-foreground">
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-primary/10 p-1 rounded-full text-primary"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">Extensive catalog with categorization & filtering</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-primary/10 p-1 rounded-full text-primary"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">Highly interactive UX (scratch-effects, auto-play music, iFrame maps)</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-primary/10 p-1 rounded-full text-primary"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">Complete RSVP tracking with distinct guest links</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-primary/10 p-1 rounded-full text-primary"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">Automated email alerts for orders and guest replies</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="space-y-4">
                                                <h4 className="text-lg font-semibold text-foreground flex items-center gap-2 border-b border-border/50 pb-2">
                                                    <Shield size={20} className="text-emerald-500" /> Project Insights
                                                </h4>
                                                <ul className="space-y-3 text-muted-foreground">
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-emerald-500/10 p-1 rounded-full text-emerald-500"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">Engineered top-to-bottom architecture entirely independently</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-emerald-500/10 p-1 rounded-full text-emerald-500"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">Seamless synchronization of guest data for clients in real-time</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-emerald-500/10 p-1 rounded-full text-emerald-500"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">Prioritized elegant design and flawless execution on mobile devices</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-emerald-500/10 p-1 rounded-full text-emerald-500"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">Deployed on cPanel handling multiple domains for separated React frontend and backend</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </section>

                                        <div className="flex justify-end pt-6 mt-4 border-t border-border/50">
                                            <Button asChild size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-all">
                                                <a href="http://uinvite.am/" target="_blank" rel="noopener noreferrer">
                                                    Visit Live Site <ExternalLink size={18} className="ml-2" />
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                    {/* AISwift Card */}
                    <div ref={proj6.ref} className={proj6.className}>
                    <Card className="glass-card hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group overflow-hidden flex flex-col border border-border/50 h-full">
                        <div
                            className="relative w-full h-56 overflow-hidden cursor-pointer bg-muted"
                            onClick={() => openPopup("aiswift")}
                        >
                            <Image src="/portfolio-images/cards/aiswift-cover.webp" alt="AISwift Template Platform" fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <Search size={32} className="text-white drop-shadow-lg" />
                            </div>
                        </div>

                        <CardContent className="p-6 flex-1 flex flex-col">
                            <div className="mb-4">
                                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    AISwift Site
                                </h3>
                                <p className="text-muted-foreground text-sm line-clamp-2">
                                    Web template marketplace platform featuring 20+ custom React templates, advanced filtering, and dynamic pricing.
                                </p>
                            </div>

                            <div className="mb-6 flex-1">
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="secondary" className="bg-primary/10 hover:bg-primary/20 text-primary border-none p-1.5 px-3 whitespace-nowrap">
                                        <Code2 size={14} className="mr-1.5" /> React / Node.js
                                    </Badge>
                                    <Badge variant="secondary" className="p-1.5 px-3 whitespace-nowrap">
                                        <Globe size={14} className="mr-1.5" /> Marketplace
                                    </Badge>
                                    <Badge variant="secondary" className="p-1.5 px-3 whitespace-nowrap">
                                        <Database size={14} className="mr-1.5" /> MySQL / cPanel
                                    </Badge>
                                </div>
                            </div>

                            <div className="flex gap-3 mt-auto">
                                <Button
                                    variant="default"
                                    className="flex-1 shadow-md hover:shadow-lg transition-all"
                                    onClick={() => openPopup("aiswift")}
                                >
                                    Details
                                </Button>
                                <Button variant="outline" asChild className="flex-1 border-primary/20 hover:border-primary/50">
                                    <a href="https://aiswift.site/" target="_blank" rel="noopener noreferrer">
                                        <ExternalLink size={16} className="mr-2" />
                                        Live Site
                                    </a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                    </div>

                    {/* AISwift Popup */}
                    {activePopup === "aiswift" && (
                        <>
                            <div
                                role="presentation"
                                aria-hidden="true"
                                onClick={closePopup}
                                className="fixed inset-0 z-[60] cursor-pointer overflow-hidden backdrop-blur-sm"
                            >
                                <div className="pointer-events-none absolute inset-0 bg-slate-950/80" />
                            </div>
                            <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6">
                                <div
                                    role="dialog"
                                    aria-modal="true"
                                    aria-labelledby="aiswift-popup-title"
                                    className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-border/50 bg-background/95 backdrop-blur-xl shadow-2xl flex flex-col max-h-[90vh]"
                                >
                                    <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b border-border/50 bg-background/80 backdrop-blur-md">
                                        <h3 id="aiswift-popup-title" className="text-xl sm:text-2xl font-bold text-foreground">
                                            AISwift Template Platform
                                        </h3>
                                        <Button
                                            size="icon"
                                            variant="ghost"
                                            className="rounded-full hover:bg-destructive/10 hover:text-destructive transition-colors"
                                            onClick={closePopup}
                                            aria-label="Close popup"
                                        >
                                            <X size={20} />
                                        </Button>
                                    </div>

                                    <div className="overflow-y-auto p-6 sm:p-8 custom-scrollbar">
                                        <section className="mb-10">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                                {aiswiftImages.map((image) => (
                                                    <div
                                                        key={image.id}
                                                        className="relative group cursor-pointer overflow-hidden rounded-2xl bg-muted border border-border/50 shadow-md hover:shadow-xl transition-all duration-300"
                                                        onClick={() => setSelectedImage(image.full)}
                                                    >
                                                        <div className="aspect-[16/10] w-full overflow-hidden relative">
                                                            <Image
                                                                src={image.full}
                                                                alt={image.title}
                                                                fill
                                                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                            />
                                                        </div>
                                                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                            <div className="bg-background/90 backdrop-blur-sm rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                                <ZoomIn size={24} className="text-foreground" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>

                                        <section className="mb-10 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                                            <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-5 flex items-center gap-2">
                                                <Cpu size={18} /> Technologies Used
                                            </h4>
                                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                                <Badge variant="default" className="text-sm py-2 px-4 shadow-sm hover:shadow transition-shadow">
                                                    <Code2 size={16} className="mr-2" /> React & Node.js Backend
                                                </Badge>
                                                <Badge variant="default" className="text-sm py-2 px-4 shadow-sm hover:shadow transition-shadow">
                                                    <Layout size={16} className="mr-2" /> 20+ Custom Templates
                                                </Badge>
                                                <Badge variant="default" className="text-sm py-2 px-4 shadow-sm hover:shadow transition-shadow">
                                                    <Database size={16} className="mr-2" /> MongoDB to MySQL
                                                </Badge>
                                                <Badge variant="default" className="text-sm py-2 px-4 shadow-sm hover:shadow transition-shadow">
                                                    <Globe size={16} className="mr-2" /> Localized (EN/AM)
                                                </Badge>
                                            </div>
                                        </section>

                                        <section className="grid md:grid-cols-2 gap-8 mb-6">
                                            <div className="space-y-4">
                                                <h4 className="text-lg font-semibold text-foreground flex items-center gap-2 border-b border-border/50 pb-2">
                                                    <Zap size={20} className="text-primary" /> Key Features
                                                </h4>
                                                <ul className="space-y-3 text-muted-foreground">
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-primary/10 p-1 rounded-full text-primary"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">Template marketplace with advanced search & categories</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-primary/10 p-1 rounded-full text-primary"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">Live responsive preview modal (desktop/tablet/mobile)</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-primary/10 p-1 rounded-full text-primary"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">Dynamic pricing tables depending on multi-page/landing toggles</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-primary/10 p-1 rounded-full text-primary"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">SMTP integration via cPanel for receipts & contact forms</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="space-y-4">
                                                <h4 className="text-lg font-semibold text-foreground flex items-center gap-2 border-b border-border/50 pb-2">
                                                    <Shield size={20} className="text-emerald-500" /> Project Insights
                                                </h4>
                                                <ul className="space-y-3 text-muted-foreground">
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-emerald-500/10 p-1 rounded-full text-emerald-500"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">Built robust Node.js backend & migrated database from MongoDB to MySQL</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-emerald-500/10 p-1 rounded-full text-emerald-500"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">Designed & engineered 20+ distinct website templates</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-emerald-500/10 p-1 rounded-full text-emerald-500"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">Implemented lazy loading and performance improvements across the app</span>
                                                    </li>
                                                    <li className="flex items-start gap-3">
                                                        <div className="mt-1 bg-emerald-500/10 p-1 rounded-full text-emerald-500"><CheckCircle size={12} /></div>
                                                        <span className="leading-tight">Configured Node.js app natively on cPanel with separate frontend deployment</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </section>

                                        <div className="flex justify-end pt-6 mt-4 border-t border-border/50">
                                            <Button asChild size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-all">
                                                <a href="https://aiswift.site/" target="_blank" rel="noopener noreferrer">
                                                    Visit Live Site <ExternalLink size={18} className="ml-2" />
                                                </a>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}

                </div>

                {/* Lightbox Modal */}
                {selectedImage && (
                    <div
                        className="fixed inset-0 z-[80] bg-black/95 flex items-center justify-center p-0 sm:p-4 backdrop-blur-xl"
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="relative w-full h-full max-w-7xl flex items-center justify-center group">
                            <div
                                className={`overflow-auto w-full h-[100dvh] flex ${isZoomed ? 'items-start justify-center' : 'items-center justify-center'}`}
                                onTouchStart={onTouchStart}
                                onTouchMove={onTouchMove}
                                onTouchEnd={onTouchEnd}
                            >
                                <Image src={selectedImage || "/placeholder.svg"} width={1920} height={1080} alt="Project Screenshot" className={`shadow-2xl transition-all duration-300 ${isZoomed
                                            ? "w-full lg:w-auto lg:max-w-screen-xl h-auto cursor-zoom-out my-0 lg:my-12"
                                            : "max-w-full max-h-[95vh] w-auto h-auto object-contain cursor-zoom-in"
                                        } ${isAnimating
                                            ? animationDirection === 'left'
                                                ? 'transform translate-x-12 opacity-0'
                                                : 'transform -translate-x-12 opacity-0'
                                            : 'transform translate-x-0 opacity-100'
                                        }`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setIsZoomed(!isZoomed);
                                    }}
                                />
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="fixed top-4 right-4 sm:top-6 sm:right-6 bg-black/50 hover:bg-black/80 text-white rounded-full p-3 transition-all z-20 backdrop-blur-sm border border-white/10"
                            >
                                <X size={24} />
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
                                        className={`fixed left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-4 transition-all duration-300 z-20 backdrop-blur-sm border border-white/10 sm:opacity-0 sm:group-hover:opacity-100 opacity-80 ${isAnimating ? 'cursor-not-allowed opacity-50' : ''
                                            }`}
                                    >
                                        <ChevronLeft size={32} />
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            navigateImage('next');
                                        }}
                                        disabled={isAnimating}
                                        className={`fixed right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-4 transition-all duration-300 z-20 backdrop-blur-sm border border-white/10 sm:opacity-0 sm:group-hover:opacity-100 opacity-80 ${isAnimating ? 'cursor-not-allowed opacity-50' : ''
                                            }`}
                                    >
                                        <ChevronRight size={32} />
                                    </button>
                                </>
                            )}

                            {/* Image Info */}
                            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md text-white rounded-full px-6 py-3 transition-all duration-300 opacity-0 group-hover:opacity-100 z-20 border border-white/10 shadow-2xl">
                                <div className="flex items-center gap-4">
                                    <span className="font-medium">
                                        {getCurrentImages().find(img => img.full === selectedImage)?.title}
                                    </span>
                                    <div className="w-1 h-1 bg-white/50 rounded-full" />
                                    <span className="text-white/70">
                                        {getCurrentImageIndex() + 1} / {getCurrentImages().length}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}