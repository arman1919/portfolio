import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import TechBackground from "@/components/TechBackground"
import "./globals.css"

export const metadata: Metadata = {
  title: "Arman Rafayelyan - Web Developer & ML Engineer",
  description: "Portfolio of Arman Rafayelyan - Full-stack Web Developer and Machine Learning Engineer",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <TechBackground />
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
