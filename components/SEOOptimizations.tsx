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
      
      {/* Additional favicon links for better browser support */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icon.png" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png" />
      
      {/* Sitemap for search engines */}
      <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
      
      {/* Language alternatives for multilingual SEO */}
      <link rel="alternate" hrefLang="en" href="https://armanrafayelyan.com" />
      <link rel="alternate" hrefLang="ru" href="https://armanrafayelyan.com" />
      <link rel="alternate" hrefLang="hy" href="https://armanrafayelyan.com" />
      <link rel="alternate" hrefLang="x-default" href="https://armanrafayelyan.com" />
      
      {/* Additional SEO meta tags */}
      <meta name="author" content="Arman Rafayelyan" />
      <meta name="geo.region" content="AM-ER" />
      <meta name="geo.placename" content="Yerevan" />
      <meta name="geo.position" content="40.1792;44.4991" />
      <meta name="ICBM" content="40.1792, 44.4991" />
      
      {/* Professional profile meta tags */}
      <meta property="profile:first_name" content="Arman" />
      <meta property="profile:last_name" content="Rafayelyan" />
      <meta property="profile:username" content="arman1919" />
      
      {/* Additional Open Graph tags for better social sharing */}
      <meta property="og:site_name" content="Arman Rafayelyan Portfolio" />
      <meta property="og:locale:alternate" content="ru_RU" />
      <meta property="og:locale:alternate" content="hy_AM" />
      
      {/* Schema.org markup for local business */}
      <meta itemProp="name" content="Arman Rafayelyan" />
      <meta itemProp="description" content="Professional Web Developer & ML Engineer in Yerevan, Armenia" />
      <meta itemProp="image" content="https://armanrafayelyan.com/og-image.png" />
      
      {/* Meta tags for better performance */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Multilingual content description */}
      <meta name="description" lang="en" content="Arman Rafayelyan - Professional Web Developer & ML Engineer in Yerevan, Armenia. Expert in React, WordPress plugins, Python ML, PHP, JavaScript, API Integration, AI Automation." />
      <meta name="description" lang="ru" content="Арман Рафайелян - Профессиональный веб-разработчик и ML инженер в Ереване, Армения. Эксперт в React, плагинах WordPress, Python ML, PHP, JavaScript, интеграции API, AI автоматизации." />
      <meta name="description" lang="hy" content="Արման Ռաֆայելյան - Պրոֆեսիոնալ վեբ ծրագրավորող և ML ինժեներ Երևանում, Հայաստան. Փորձագետ React, WordPress հավելվածներ, Python ML, PHP, JavaScript, API ինտեգրում, AI ավտոմատացում." />
    </>
  )
}
