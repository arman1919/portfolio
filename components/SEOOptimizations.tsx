export default function SEOOptimizations() {
  return (
    <>
      {/* Preload critical resources */}
      <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
      
      {/* Resource hints for external domains */}
      <link rel="preconnect" href="https://vercel.com" />
      <link rel="preconnect" href="https://github.com" />
      <link rel="preconnect" href="https://linkedin.com" />
      
      {/* Meta tags for better performance */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    </>
  )
}
