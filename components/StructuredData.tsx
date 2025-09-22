import Script from 'next/script'

export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Arman Rafayelyan",
    "jobTitle": "Web Developer and ML Engineer",
    "description": "Professional web developer specializing in React, WordPress plugins, and machine learning solutions",
    "url": "https://armanrafayelyan.com",
    "image": "https://armanrafayelyan.com/icons/logo-512.png",
    "sameAs": [
      "https://www.linkedin.com/in/arman-rafayelyan-002a0b188/",
      "https://github.com/arman1919"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Yerevan",
      "addressCountry": "Armenia"
    },
    "email": "arman.raf2001@gmail.com",
    "telephone": "+374-98-983797",
    "knowsAbout": [
      "Web Development",
      "React",
      "Next.js",
      "WordPress",
      "PHP",
      "Python",
      "Machine Learning",
      "Natural Language Processing",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "PostgreSQL"
    ],
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "Yerevan State University",
        "department": "Faculty of Informatics and Applied Mathematics"
      },
      {
        "@type": "EducationalOrganization", 
        "name": "PicsArt Academy",
        "courseMode": "Python Engineer Program"
      }
    ],
    "worksFor": [
      {
        "@type": "Organization",
        "name": "TT-Soft",
        "description": "WordPress Plugin Developer"
      },
      {
        "@type": "Organization",
        "name": "CareAware",
        "description": "ML Engineer"
      }
    ]
  }

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Arman Rafayelyan Web Development Services",
    "description": "Professional web development and ML engineering services in Armenia",
    "provider": {
      "@type": "Person",
      "name": "Arman Rafayelyan"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Armenia"
      },
      {
        "@type": "Place",
        "name": "International"
      }
    ],
    "serviceType": [
      "Web Development",
      "WordPress Plugin Development", 
      "Machine Learning Solutions",
      "React Application Development",
      "Full Stack Development",
      "API Development",
      "Database Design"
    ],
    "priceRange": "$$",
    "url": "https://armanrafayelyan.com",
    "telephone": "+374-98-983797",
    "email": "arman.raf2001@gmail.com"
  }

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": "https://armanrafayelyan.com#portfolio",
    "name": "Arman Rafayelyan - Professional Portfolio",
    "description": "Portfolio showcasing web development projects, WordPress plugins, and machine learning solutions",
    "author": {
      "@type": "Person",
      "name": "Arman Rafayelyan"
    },
    "dateCreated": "2024",
    "dateModified": new Date().toISOString().split('T')[0],
    "inLanguage": "en-US",
    "url": "https://armanrafayelyan.com",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Featured Projects",
      "itemListElement": [
        {
          "@type": "CreativeWork",
          "name": "DROPIC - Photo Management Application",
          "description": "Comprehensive web application for managing public photo albums with authentication and cloud storage",
          "author": {
            "@type": "Person",
            "name": "Arman Rafayelyan"
          },
          "dateCreated": "2024",
          "programmingLanguage": ["Next.js", "TypeScript", "MongoDB"],
          "url": "https://dropic-sable.vercel.app"
        },
        {
          "@type": "SoftwareApplication",
          "name": "Fox LMS WordPress Plugin",
          "description": "Learning Management System plugin for WordPress with course management and student tracking",
          "author": {
            "@type": "Person",
            "name": "Arman Rafayelyan"
          },
          "applicationCategory": "WordPress Plugin",
          "operatingSystem": "WordPress"
        },
        {
          "@type": "SoftwareApplication",
          "name": "Quiz Maker WordPress Plugin",
          "description": "Interactive quiz creation plugin for WordPress with multiple question types and analytics",
          "author": {
            "@type": "Person",
            "name": "Arman Rafayelyan"
          },
          "applicationCategory": "WordPress Plugin",
          "operatingSystem": "WordPress"
        }
      ]
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Arman Rafayelyan - Portfolio",
    "description": "Professional portfolio of Arman Rafayelyan - Web Developer and ML Engineer from Yerevan, Armenia",
    "url": "https://armanrafayelyan.com",
    "author": {
      "@type": "Person",
      "name": "Arman Rafayelyan"
    },
    "inLanguage": "en-US",
    "copyrightYear": new Date().getFullYear(),
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://armanrafayelyan.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <>
      <Script
        id="person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <Script
        id="professional-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
      <Script
        id="portfolio-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  )
}
