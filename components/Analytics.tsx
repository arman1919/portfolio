import Script from 'next/script'

export default function Analytics() {
  return (
    <>
      {/* Google Analytics 4 */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-4EK4PJ76SF"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-4EK4PJ76SF', {
            page_title: 'Arman Rafayelyan - Web Developer & ML Engineer',
            custom_map: {
              'custom_parameter_1': 'location',
              'custom_parameter_2': 'service_type'
            }
          });
          
          // Track specific events for portfolio
          gtag('event', 'page_view', {
            page_title: 'Portfolio Home',
            page_location: window.location.href,
            content_group1: 'Portfolio',
            custom_parameter_1: 'Yerevan, Armenia',
            custom_parameter_2: 'Web Development'
          });
        `}
      </Script>

      {/* Yandex Metrica (popular in Armenia) */}
      <Script id="yandex-metrica" strategy="afterInteractive">
        {`
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(YANDEX_COUNTER_ID, "init", {
               clickmap:true,
               trackLinks:true,
               accurateTrackBounce:true,
               webvisor:true,
               trackHash:true
          });
        `}
      </Script>

      {/* Structured Data for Analytics */}
      <Script id="portfolio-events" strategy="afterInteractive">
        {`
          // Track portfolio interactions
          function trackPortfolioEvent(action, section, value) {
            if (typeof gtag !== 'undefined') {
              gtag('event', action, {
                event_category: 'Portfolio Interaction',
                event_label: section,
                value: value,
                custom_parameter_1: 'Yerevan, Armenia',
                custom_parameter_2: 'Web Development Services'
              });
            }
            
            if (typeof ym !== 'undefined') {
              ym(YANDEX_COUNTER_ID, 'reachGoal', action + '_' + section);
            }
          }
          
          // Track section views
          const observerOptions = {
            threshold: 0.5,
            rootMargin: '0px 0px -20% 0px'
          };
          
          const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const sectionName = entry.target.id;
                trackPortfolioEvent('section_view', sectionName, 1);
              }
            });
          }, observerOptions);
          
          // Observe all sections
          document.addEventListener('DOMContentLoaded', () => {
            const sections = document.querySelectorAll('section[id]');
            sections.forEach(section => sectionObserver.observe(section));
            
            // Track contact form interactions
            const contactForm = document.querySelector('#contact form');
            if (contactForm) {
              contactForm.addEventListener('submit', () => {
                trackPortfolioEvent('form_submit', 'contact', 1);
              });
            }
            
            // Track project link clicks
            const projectLinks = document.querySelectorAll('a[href*="github.com"], a[href*="vercel.app"]');
            projectLinks.forEach(link => {
              link.addEventListener('click', () => {
                trackPortfolioEvent('project_click', 'external_link', 1);
              });
            });
            
            // Track social media clicks
            const socialLinks = document.querySelectorAll('a[href*="linkedin.com"], a[href*="github.com"]');
            socialLinks.forEach(link => {
              link.addEventListener('click', () => {
                const platform = link.href.includes('linkedin') ? 'linkedin' : 'github';
                trackPortfolioEvent('social_click', platform, 1);
              });
            });
          });
        `}
      </Script>

      {/* Noscript fallback for Yandex Metrica */}
      <noscript>
        <div>
          <img 
            src="https://mc.yandex.ru/watch/YANDEX_COUNTER_ID" 
            style={{position: 'absolute', left: '-9999px'}} 
            alt="" 
          />
        </div>
      </noscript>
    </>
  )
}
