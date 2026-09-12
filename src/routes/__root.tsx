import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import { seo, site } from '@/config/site'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: seo.title },
      { name: 'description', content: seo.description },
      { name: 'keywords', content: seo.keywords },
      { name: 'author', content: site.name },
      {
        name: 'robots',
        content: 'index, follow, max-image-preview:large, max-snippet:-1',
      },
      { name: 'geo.region', content: 'AE' },
      { name: 'geo.placename', content: 'United Arab Emirates' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: site.name },
      { property: 'og:title', content: seo.title },
      { property: 'og:description', content: seo.description },
      { property: 'og:locale', content: 'en_AE' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: seo.title },
      { name: 'twitter:description', content: seo.description },
      { name: 'theme-color', content: '#0a1526' },
    ],
    links: [
      { rel: 'canonical', href: 'https://glinkint.com/' },
      { rel: 'icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap',
      },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SelfStorage',
          name: site.name,
          description: seo.description,
          telephone: site.phone,
          email: site.email,
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'AE',
            addressRegion: 'Dubai',
            streetAddress: site.address,
          },
          areaServed: 'United Arab Emirates',
          priceRange: 'AED 9 - AED 850',
          openingHours: 'Mo-Sa 08:00-20:00',
        }),
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}