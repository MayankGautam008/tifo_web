// Application-level configuration
// Update PLATFORM_URL when the TIFO app is ready for launch
export const config = {
  PLATFORM_URL: 'https://tifoindia.app', // Updated custom domain
  COMPANY_EMAIL: 'hello@tifo.in',
  COMPANY_PHONE: '+91 XXXXX XXXXX',
  COMPANY_ADDRESS: 'India',
  SOCIAL: {
    linkedin: 'https://linkedin.com/company/tifo-in',
    twitter: 'https://twitter.com/tifo_in',
    instagram: 'https://instagram.com/tifo.in',
  },
  META: {
    siteName: 'TIFO',
    siteUrl: 'https://tifo.in',
    tagline: "India's AI-Powered Personalized Food Ecosystem",
    description: 'The right food, right person, right time.',
  },
} as const
