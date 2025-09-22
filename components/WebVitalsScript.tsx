"use client"

import Script from 'next/script'

export default function WebVitalsScript() {
  return (
    <Script id="web-vitals-monitoring" strategy="afterInteractive">
      {`
        // Web Vitals monitoring with fallback
        function sendToAnalytics(metric) {
          console.log('Web Vital:', metric.name, metric.value);
          
          // Send to Google Analytics if available
          if (typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'Performance',
              event_label: metric.name,
              value: Math.round(metric.value),
              custom_parameter_1: 'Yerevan, Armenia',
              custom_parameter_2: 'Portfolio Performance'
            });
          }
        }
        
        // Try to load web-vitals library
        try {
          import('https://unpkg.com/web-vitals@3/dist/web-vitals.js').then((webVitals) => {
            if (webVitals.onCLS) webVitals.onCLS(sendToAnalytics);
            if (webVitals.onINP) webVitals.onINP(sendToAnalytics);
            if (webVitals.onFCP) webVitals.onFCP(sendToAnalytics);
            if (webVitals.onLCP) webVitals.onLCP(sendToAnalytics);
            if (webVitals.onTTFB) webVitals.onTTFB(sendToAnalytics);
          }).catch(() => {
            console.log('Web Vitals library not available from CDN');
          });
        } catch (error) {
          console.log('Web Vitals monitoring not available');
        }
        
        // Basic performance monitoring fallback
        if ('PerformanceObserver' in window) {
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (entry.entryType === 'navigation') {
                console.log('Navigation timing:', {
                  domContentLoaded: entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart,
                  loadComplete: entry.loadEventEnd - entry.loadEventStart
                });
              }
            }
          });
          
          try {
            observer.observe({ entryTypes: ['navigation', 'paint'] });
          } catch (e) {
            console.log('Performance Observer not fully supported');
          }
        }
      `}
    </Script>
  )
}
