"use client"

export default function CriticalStyles() {
  return (
    <style jsx global>{`
      .hero-section {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .glass {
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
      }
      
      .glass-card {
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }
      
      /* Performance optimizations */
      * {
        box-sizing: border-box;
      }
      
      img {
        max-width: 100%;
        height: auto;
      }
      
      /* Reduce layout shift */
      .w-40.h-40 {
        width: 10rem;
        height: 10rem;
      }
    `}</style>
  )
}
