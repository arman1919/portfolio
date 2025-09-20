import { useEffect, useState } from "react"
import {ChevronLeft, ChevronRight, Filter, Search, X } from "lucide-react"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"

export default function Gallery() {

    const [selectedCategory, setSelectedCategory] = useState("all")
    const [selectedImage, setSelectedImage] = useState<string | null>(null)
    const [touchStart, setTouchStart] = useState<number | null>(null)
    const [touchEnd, setTouchEnd] = useState<number | null>(null)
    const [showAll, setShowAll] = useState(false)

    // Reset showAll when category changes
    useEffect(() => {
        setShowAll(false)
    }, [selectedCategory])

    const scrollToGallery = () => {
        const gallerySection = document.getElementById('gallery')
        if (gallerySection) {
            gallerySection.scrollIntoView({ behavior: 'smooth' })
        }
    }
    
    const galleryImages = [
        { id: 1, thumb: "/portfolio-images/thumbs/analytics-menu.webp", full: "/portfolio-images/full/analytics-menu.webp", category: "wordpress", title: "Analytics Menu" },
        { id: 2, thumb: "/portfolio-images/thumbs/analytic-tab.webp", full: "/portfolio-images/full/analytic-tab.webp", category: "wordpress", title: "Analytics Tab" },
        { id: 3, thumb: "/portfolio-images/thumbs/announcements-front.webp", full: "/portfolio-images/full/announcements-front.webp", category: "wordpress", title: "Announcements Frontend Tab" },
        { id: 4, thumb: "/portfolio-images/thumbs/attachment-section.webp", full: "/portfolio-images/full/attachment-section.webp", category: "wordpress", title: "Attachment Admin Panel" },
        { id: 5, thumb: "/portfolio-images/thumbs/color-palette.webp", full: "/portfolio-images/full/color-palette.webp", category: "wordpress", title: "Color Palette System" },
        { id: 6, thumb: "/portfolio-images/thumbs/coupon-admin.webp", full: "/portfolio-images/full/coupon-admin.webp", category: "payment", title: "Coupon Admin Panel" },
        { id: 7, thumb: "/portfolio-images/thumbs/coupon-front.webp", full: "/portfolio-images/full/coupon-front.webp", category: "payment", title: "Coupon Frontend" },
        { id: 8, thumb: "/portfolio-images/thumbs/gamipress.webp", full: "/portfolio-images/full/gamipress.webp", category: "wordpress", title: "GamiPress Integration Admin Panel" },
        { id: 9, thumb: "/portfolio-images/thumbs/notifications.webp", full: "/portfolio-images/full/notifications.webp", category: "wordpress", title: "Notifications System Frontend" },
        { id: 10, thumb: "/portfolio-images/thumbs/paymeny.webp", full: "/portfolio-images/full/paymeny.webp", category: "payment", title: "Payment Integration Admin Panel" },
        { id: 11, thumb: "/portfolio-images/thumbs/popup-1.webp", full: "/portfolio-images/full/popup-1.webp", category: "banners", title: "Popup Plugin Frontend" },
        { id: 12, thumb: "/portfolio-images/thumbs/popup-demo-1.webp", full: "/portfolio-images/full/popup-demo-1.webp", category: "website", title: "Popup Plugin Demo Landing Page" },
        { id: 13, thumb: "/portfolio-images/thumbs/popup-demo-2.webp", full: "/portfolio-images/full/popup-demo-2.webp", category: "website", title: "Popup Plugin Free Demo Landing Page" },
        { id: 14, thumb: "/portfolio-images/thumbs/q-and-a-front.webp", full: "/portfolio-images/full/q-and-a-front.webp", category: "wordpress", title: "Questions & Answers Frontend" },
        { id: 15, thumb: "/portfolio-images/thumbs/registration-login-1.webp", full: "/portfolio-images/full/registration-login-1.webp", category: "dashboard", title: "Login Form Admin Panel" },
        { id: 16, thumb: "/portfolio-images/thumbs/registration-login-2.webp", full: "/portfolio-images/full/registration-login-2.webp", category: "dashboard", title: "Registration Form Admin Panel" },
        { id: 17, thumb: "/portfolio-images/thumbs/schedule-course-section.webp", full: "/portfolio-images/full/schedule-course-section.webp", category: "wordpress", title: "Schedule Course Admin Panel" },
        { id: 18, thumb: "/portfolio-images/thumbs/levelstudio-1.webp", full: "/portfolio-images/full/levelstudio-1.webp", category: "website", title: "LevelStudio.am" },
        { id: 19, thumb: "/portfolio-images/thumbs/levelstudio-2.webp", full: "/portfolio-images/full/levelstudio-2.webp", category: "website", title: "LevelStudio.am Calculator" },
        { id: 20, thumb: "/portfolio-images/thumbs/popup-2.webp", full: "/portfolio-images/full/popup-2.webp", category: "banners", title: "Plugin Sale Popup" },
        { id: 21, thumb: "/portfolio-images/thumbs/banner-1.webp", full: "/portfolio-images/full/banner-1.webp", category: "banners", title: "Banner Admin Panel" },
        { id: 22, thumb: "/portfolio-images/thumbs/dropic-1.webp", full: "/portfolio-images/full/dropic-1.webp", category: "website", title: "Dropic - Online Photo Album Landing Page" },
        { id: 23, thumb: "/portfolio-images/thumbs/dropic-2.webp", full: "/portfolio-images/full/dropic-2.webp", category: "website", title: "Dropic - Edit Album Page" },
        { id: 24, thumb: "/portfolio-images/thumbs/dropic-3.webp", full: "/portfolio-images/full/dropic-3.webp", category: "website", title: "Dropic - Frontend page" },
        { id: 25, thumb: "/portfolio-images/thumbs/woo-product.webp", full: "/portfolio-images/full/woo-product.webp", category: "wordpress", title: "WooCommerce Product Recommendation" },
        { id: 26, thumb: "/portfolio-images/thumbs/profile-settings.webp", full: "/portfolio-images/full/profile-settings.webp", category: "dashboard", title: "Profile Settings Admin Panel" },
        { id: 27, thumb: "/portfolio-images/thumbs/edit-question-answers-admin.webp", full: "/portfolio-images/full/edit-question-answers-admin.webp", category: "dashboard", title: "Edit Question Answers Admin Panel" },
      ]
    
      const filteredImages =
        selectedCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)
      
      // Show only first 9 images (3 rows) unless showAll is true
      const imagesPerRow = 3
      const maxRows = 3
      const maxInitialImages = imagesPerRow * maxRows
      const displayedImages = showAll ? filteredImages : filteredImages.slice(0, maxInitialImages)
      const hasMoreImages = filteredImages.length > maxInitialImages
    
      const getCurrentImageIndex = () => {
        return filteredImages.findIndex(img => img.full === selectedImage)
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
        
        setSelectedImage(filteredImages[newIndex].full)
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
        <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8">
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
                {displayedImages.map((image) => (
                <div 
                    key={image.id} 
                    className="relative group cursor-pointer overflow-hidden rounded-lg bg-card shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => setSelectedImage(image.full)}
                >
                    <div className="aspect-[4/3] w-full overflow-hidden">
                    <img 
                        src={image.thumb || "/placeholder.svg"} 
                        alt={image.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
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

            {/* Load More / Close Button */}
            {hasMoreImages && (
                <div className="flex justify-center mt-12">
                    {!showAll ? (
                        <Button
                            onClick={() => setShowAll(true)}
                            variant="outline"
                            className="bg-primary/10 hover:bg-primary/20 border-primary/20 cursor-pointer hover:scale-105 transition-transform duration-200"
                        >
                            Load More ({filteredImages.length - maxInitialImages} more)
                        </Button>
                    ) : (
                        <Button
                            onClick={() => {
                                setShowAll(false)
                                scrollToGallery()
                            }}
                            variant="outline"
                            className="bg-secondary/10 hover:bg-secondary/20 border-secondary/20 cursor-pointer hover:scale-105 transition-transform duration-200"
                        >
                            Show Less
                        </Button>
                    )}
                </div>
            )}

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
                            {filteredImages.find(img => img.full === selectedImage)?.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-300 mt-1">
                            {getCurrentImageIndex() + 1} of {filteredImages.length}
                        </p>
                        </div>
                        <Badge variant="outline" className="text-xs bg-black/50 border-gray-500 text-white">
                        {filteredImages.find(img => img.full === selectedImage)?.category}
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