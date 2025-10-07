import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"
import TechBackground from "@/components/TechBackground"
import StructuredData from "@/components/StructuredData"
import SEOOptimizations from "@/components/SEOOptimizations"
import CriticalStyles from "@/components/CriticalStyles"
import WebVitalsScript from "@/components/WebVitalsScript"
import FaviconLinks from "@/components/FaviconLinks"
import "./globals.css"

export const metadata: Metadata = {
  title: "Arman Rafayelyan - Web Developer & ML Engineer | Yerevan, Armenia",
  description: "Arman Rafayelyan - Professional Web Developer & ML Engineer in Yerevan, Armenia. Expert in React, WordPress plugins, Python ML. 280+ completed projects.",
  keywords: [
    // English keywords
    "Arman Rafayelyan",
    "Arman Rafayelyan Web Developer",
    "Arman Rafayelyan PHP Developer",
    "Arman Rafayelyan Full Stack Developer",
    "Arman Rafayelyan Front End Developer",
    "Arman Rafayelyan Back End Developer",
    "Arman Rafayelyan AI Automation",
    "Arman Rafayelyan WordPress Plugin Developer",
    "Arman Rafayelyan JavaScript Developer",
    "Arman Rafayelyan API Integration",
    "Web Developer Armenia",
    "React Developer Yerevan",
    "WordPress Plugin Developer",
    "ML Engineer Armenia",
    "Python Developer Yerevan",
    "Full Stack Developer Armenia",
    "Machine Learning Engineer Yerevan",
    "WordPress Developer Armenia",
    "Next.js Developer Armenia",
    "PHP Developer Armenia",
    "JavaScript Developer Armenia",
    "API Integration Armenia",
    "AI Automation Armenia",
    "Armenia Developer",
    "Armenian Developer",
    // Russian keywords
    "Арман Рафайелян",
    "Арман Рафайелян Веб-разработчик",
    "Арман Рафайелян PHP-разработчик",
    "Арман Рафайелян Фулстек-разработчик",
    "Арман Рафайелян FrontEnd-разработчик",
    "Арман Рафайелян BackEnd-разработчик",
    "Арман Рафайелян AI Автоматизация",
    "Арман Рафайелян Разработчик плагинов WordPress",
    "Арман Рафайелян JavaScript-разработчик",
    "Арман Рафайелян Интеграция API",
    "Веб-разработчик Армения",
    "PHP-разработчик Ереван",
    "Фулстек-разработчик Армения",
    "FrontEnd-разработчик Ереван",
    "BackEnd-разработчик Армения",
    "AI Автоматизация Армения",
    "Разработчик плагинов WordPress Армения",
    "JavaScript-разработчик Ереван",
    "Интеграция API Армения",
    // Armenian keywords
    "Արման Ռաֆայելյան",
    "Արման Ռաֆայելյան Վեբ ծրագրավորող",
    "Արման Ռաֆայելյան PHP ծրագրավորող",
    "Արման Ռաֆայելյան Ֆուլստեք ծրագրավորող",
    "Արման Ռաֆայելյան FrontEnd ծրագրավորող",
    "Արման Ռաֆայելյան BackEnd ծրագրավորող",
    "Արման Ռաֆայելյան AI ավտոմատացում",
    "Արման Ռաֆայելյան WordPress հավելվածների մշակող",
    "Արման Ռաֆայելյան JavaScript ծրագրավորող",
    "Արման Ռաֆայելյան API ինտեգրում",
    "Վեբ ծրագրավորող Հայաստան",
    "PHP ծրագրավորող Երևան",
    "Ֆուլստեք ծրագրավորող Հայաստան",
    "FrontEnd ծրագրավորող Երևան",
    "BackEnd ծրագրավորող Հայաստան",
    "AI ավտոմատացում Հայաստան",
    "WordPress հավելվածների մշակող Հայաստան",
    "JavaScript ծրագրավորող Երևան",
    "API ինտեգրում Հայաստան"
  ],
  authors: [{ name: "Arman Rafayelyan", url: "https://armanrafayelyan.com" }],
  creator: "Arman Rafayelyan",
  publisher: "Arman Rafayelyan",
  generator: "Next.js",
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://armanrafayelyan.com',
    languages: {
      'en': 'https://armanrafayelyan.com',
      'ru': 'https://armanrafayelyan.com',
      'hy': 'https://armanrafayelyan.com',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://armanrafayelyan.com',
    title: 'Arman Rafayelyan - Web Developer & ML Engineer | Yerevan, Armenia',
    description: 'Professional Web Developer & ML Engineer in Yerevan, Armenia. Expert in React, WordPress plugins, Python ML. 280+ completed projects.',
    siteName: 'Arman Rafayelyan Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Arman Rafayelyan - Web Developer & ML Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arman Rafayelyan - Web Developer & ML Engineer | Yerevan, Armenia',
    description: 'Professional Web Developer & ML Engineer in Yerevan, Armenia. Expert in React, WordPress plugins, Python ML.',
    images: ['/og-image.png'],
  },
  verification: {
    google: 'xKBnoXppTIqCUOf0yHEFiqLBm1Pevdl6xAP9EtaBAT0',
    yandex: 'your-yandex-verification-code',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Arman Rafayelyan - Portfolio",
  },
  icons: {
    icon: [
      { url: "/icon.ico", sizes: "any" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "16x16", type: "image/x-icon" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <SEOOptimizations />
        <FaviconLinks />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <StructuredData />
        <CriticalStyles />
        <TechBackground />
        <Suspense fallback={null}>{children}</Suspense>
        <WebVitalsScript />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
