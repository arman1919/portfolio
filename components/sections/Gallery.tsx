import { useEffect, useState } from "react"
import {ChevronLeft, ChevronRight, Filter, Search, X } from "lucide-react"
import { Badge } from "../ui/badge"

export default function Gallery() {

    const [selectedCategory, setSelectedCategory] = useState("all")
    const [selectedImage, setSelectedImage] = useState<string | null>(null)
    const [touchStart, setTouchStart] = useState<number | null>(null)
    const [touchEnd, setTouchEnd] = useState<number | null>(null)
    
    const galleryImages = [
        { id: 1, src: "/portfolio-images/analytics-menu.png", category: "wordpress", title: "Analytics Menu" },
        { id: 2, src: "/portfolio-images/analytic-tab.png", category: "wordpress", title: "Analytics Tab" },
        { id: 3, src: "/portfolio-images/announcements-front.png", category: "wordpress", title: "Announcements Frontend Tab" },
        { id: 4, src: "/portfolio-images/attachment-section.png", category: "wordpress", title: "Attachment Admin Panel" },
        { id: 5, src: "/portfolio-images/color-palette.png", category: "wordpress", title: "Color Palette System" },
        { id: 6, src: "/portfolio-images/coupon-admin.png", category: "payment", title: "Coupon Admin Panel" },
        { id: 7, src: "/portfolio-images/coupon-front.png", category: "payment", title: "Coupon Frontend" },
        { id: 8, src: "/portfolio-images/gamipress.png", category: "wordpress", title: "GamiPress Integration Admin Panel" },
        { id: 9, src: "/portfolio-images/notifications.png", category: "wordpress", title: "Notifications System Frontend" },
        { id: 10, src: "/portfolio-images/paymeny.png", category: "payment", title: "Payment Integration Admin Panel" },
        { id: 11, src: "/portfolio-images/popup-1.png", category: "banners", title: "Popup Plugin Frontend" },
        { id: 12, src: "/portfolio-images/popup-demo-1.png", category: "website", title: "Popup Plugin Demo Landing Page" },
        { id: 13, src: "/portfolio-images/popup-demo-2.png", category: "website", title: "Popup Plugin Free Demo Landing Page" },
        { id: 14, src: "/portfolio-images/q-and-a-front.png", category: "wordpress", title: "Questions & Answers Frontend" },
        { id: 15, src: "/portfolio-images/registration-login-1.png", category: "dashboard", title: "Login Form Admin Panel" },
        { id: 16, src: "/portfolio-images/registration-login-2.png", category: "dashboard", title: "Registration Form Admin Panel" },
        { id: 17, src: "/portfolio-images/schedule-course-section.png", category: "wordpress", title: "Schedule Course Admin Panel" },
        { id: 18, src: "/portfolio-images/levelstudio-1.png", category: "website", title: "LevelStudio.am" },
        { id: 19, src: "/portfolio-images/levelstudio-2.png", category: "website", title: "LevelStudio.am Calculator" },
        { id: 20, src: "/portfolio-images/popup-2.png", category: "banners", title: "Plugin Sale Popup" },
        { id: 21, src: "/portfolio-images/banner-1.png", category: "banners", title: "Banner Admin Panel" },
        { id: 22, src: "/portfolio-images/dropic-1.png", category: "website", title: "Dropic - Online Photo Album Landing Page" },
        { id: 23, src: "/portfolio-images/dropic-2.png", category: "website", title: "Dropic - Edit Album Page" },
        { id: 24, src: "/portfolio-images/dropic-3.png", category: "website", title: "Dropic - Frontend page" },
        { id: 25, src: "/portfolio-images/woo-product.png", category: "wordpress", title: "WooCommerce Product Recommendation" },
      ]
    
      const filteredImages =
        selectedCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)
    
      const getCurrentImageIndex = () => {
        return filteredImages.findIndex(img => img.src === selectedImage)
      }
    
      const navigateImage = (direction: 'prev' | 'next') => {
        const currentIndex = getCurrentImageIndex()
        if (currentIndex === -1) return
    
        let newIndex
        if (direction === 'prev') {
          newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1
        } else {
          newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1
        }
        
        setSelectedImage(filteredImages[newIndex].src)
      }
    
      const handleKeyNavigation = (e: KeyboardEvent) => {
        if (!selectedImage) return
        
        if (e.key === 'ArrowLeft') {
          e.preventDefault()
          navigateImage('prev')
        } else if (e.key === 'ArrowRight') {
          e.preventDefault()
          navigateImage('next')
        } else if (e.key === 'Escape') {
          e.preventDefault()
          setSelectedImage(null)
        }
      }
    
      // Minimum swipe distance (in px)
      const minSwipeDistance = 50
    
      const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null)
        setTouchStart(e.targetTouches[0].clientX)
      }
    
      const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX)
      }
    
      const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return
        
        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance
    
        if (isLeftSwipe && filteredImages.length > 1) {
          navigateImage('next')
        }
        if (isRightSwipe && filteredImages.length > 1) {
          navigateImage('prev')
        }
      }
    
      useEffect(() => {
        if (selectedImage) {
          // Block background scrolling
          document.body.style.overflow = 'hidden'
          document.addEventListener('keydown', handleKeyNavigation)
          
          return () => {
            // Restore scrolling
            document.body.style.overflow = 'unset'
            document.removeEventListener('keydown', handleKeyNavigation)
          }
        }
      }, [selectedImage, filteredImages])


    return (
        <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
            <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-balance">Portfolio Gallery</h2>

            {/* Category Filter */}
            <div className="flex justify-center mb-12">
                <div className="flex flex-wrap gap-2 p-2 glass-card rounded-lg">
                {[
                    { id: "all", label: "All Projects" },
                    { id: "wordpress", label: "WordPress" },
                    { id: "website", label: "Website Development" },
                    { id: "payment", label: "Payment Integration" },
                    { id: "dashboard", label: "Admin Panels" },
                    { id: "banners", label: "Advertisement" },
                ].map((category) => (
                    <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                        selectedCategory === category.id
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/10"
                    }`}
                    >
                    <Filter size={14} className="mr-2 inline" />
                    {category.label}
                    </button>
                ))}
                </div>
            </div>

            {/* Gallery Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {filteredImages.map((image) => (
                <div 
                    key={image.id} 
                    className="relative group cursor-pointer overflow-hidden rounded-lg bg-card shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => setSelectedImage(image.src)}
                >
                    <div className="aspect-[4/3] w-full overflow-hidden">
                    <img 
                        src={image.src || "/placeholder.svg"} 
                        alt={image.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                    </div>
                    
                    {/* Magnifying Glass Overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                        <Search size={32} className="text-white" />
                    </div>
                    </div>
                    
                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-white font-medium text-sm">{image.title}</h3>
                    </div>
                </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div 
                className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-2 sm:p-4"
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
                        alt="Portfolio Image" 
                        className="max-w-full w-auto h-auto object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                    </div>
                    
                    {/* Close Button - всегда видна */}
                    <button
                    onClick={() => setSelectedImage(null)}
                    className="fixed top-2 right-2 sm:top-4 sm:right-4 bg-black/70 hover:bg-black/90 text-white rounded-full p-2 sm:p-3 transition-colors z-20 backdrop-blur-sm"
                    >
                    <X size={20} className="sm:w-6 sm:h-6" />
                    </button>

                    {/* Navigation Buttons - всегда видны и зафиксированы */}
                    {filteredImages.length > 1 && (
                    <>
                        <button
                        onClick={(e) => {
                            e.stopPropagation()
                            navigateImage('prev')
                        }}
                        className="fixed left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white rounded-full p-2 sm:p-3 transition-all duration-300 z-20 backdrop-blur-sm opacity-0 group-hover:opacity-100"
                        >
                        <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
                        </button>
                        <button
                        onClick={(e) => {
                            e.stopPropagation()
                            navigateImage('next')
                        }}
                        className="fixed right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white rounded-full p-2 sm:p-3 transition-all duration-300 z-20 backdrop-blur-sm opacity-0 group-hover:opacity-100"
                        >
                        <ChevronRight size={20} className="sm:w-6 sm:h-6" />
                        </button>
                    </>
                    )}

                    {/* Image Info - зафиксирована внизу */}
                    <div className="fixed bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 bg-black/70 backdrop-blur-sm text-white rounded-lg p-3 sm:p-4 transition-all duration-300 opacity-0 group-hover:opacity-100 z-20">
                    <div className="flex items-center justify-between">
                        <div>
                        <h3 className="font-medium text-sm sm:text-base">
                            {filteredImages.find(img => img.src === selectedImage)?.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-300 mt-1">
                            {getCurrentImageIndex() + 1} of {filteredImages.length}
                        </p>
                        </div>
                        <Badge variant="outline" className="text-xs bg-black/50 border-gray-500 text-white">
                        {filteredImages.find(img => img.src === selectedImage)?.category}
                        </Badge>
                    </div>
                    </div>
                </div>
                </div>
            )}
            </div>
        </section>
    )
}