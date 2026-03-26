import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://stephen-studio.com'
  
  const pages = [
    '',
    '/about',
    '/portfolio',
    '/portfolio/win',
    '/portfolio/proton-security',
    '/portfolio/reloexpress',
    '/services',
    '/services/custom-saas-platforms',
    '/services/ios-mobile-apps',
    '/services/websites-web-applications',
    '/services/systems-integrations',
    '/services/ai-systems-automations',
    '/services/enterprise-builds',
    '/contact',
    '/schedule',
    '/company',
    '/client-portal',
  ]

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === '' ? 'daily' : 'weekly' as any,
    priority: page === '' ? 1 : 0.8,
  }))
}
