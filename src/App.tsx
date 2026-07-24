import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, useLocation, ScrollRestoration } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

// Lazy load all pages for performance
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const VisionMission = lazy(() => import('./pages/VisionMission'))
const WhyTIFO = lazy(() => import('./pages/WhyTIFO'))
const Problem = lazy(() => import('./pages/Problem'))
const Solution = lazy(() => import('./pages/Solution'))
const AIEcosystem = lazy(() => import('./pages/AIEcosystem'))
const Research = lazy(() => import('./pages/Research'))
const Technology = lazy(() => import('./pages/Technology'))
const Product = lazy(() => import('./pages/Product'))
const RestaurantPartners = lazy(() => import('./pages/RestaurantPartners'))
const Students = lazy(() => import('./pages/Students'))
const Professionals = lazy(() => import('./pages/Professionals'))
const MarketOpportunity = lazy(() => import('./pages/MarketOpportunity'))
const Validation = lazy(() => import('./pages/Validation'))
const Roadmap = lazy(() => import('./pages/Roadmap'))
const Leadership = lazy(() => import('./pages/Leadership'))
const Careers = lazy(() => import('./pages/Careers'))
const Media = lazy(() => import('./pages/Media'))
const Blog = lazy(() => import('./pages/Blog'))
const Contact = lazy(() => import('./pages/Contact'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const Terms = lazy(() => import('./pages/Terms'))

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-12 h-12 rounded-full border-2 border-transparent animate-spin"
          style={{ borderTopColor: '#C1440E', borderRightColor: 'rgba(193,68,14,0.3)' }}
        />
        <p className="text-gray-600 text-sm font-mono">Loading...</p>
      </div>
    </div>
  )
}

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center text-center section-padding" style={{ paddingTop: '120px' }}>
      <div>
        <div className="text-8xl font-black gradient-text mb-4" style={{ fontFamily: 'var(--font-display)' }}>404</div>
        <h1 className="text-white text-2xl font-bold mb-4">Page Not Found</h1>
        <p className="text-gray-500 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <a href="/" className="tifo-btn-primary">Return Home</a>
      </div>
    </div>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vision-mission" element={<VisionMission />} />
          <Route path="/why-tifo" element={<WhyTIFO />} />
          <Route path="/problem" element={<Problem />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/ai-ecosystem" element={<AIEcosystem />} />
          <Route path="/research" element={<Research />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/product" element={<Product />} />
          <Route path="/restaurant-partners" element={<RestaurantPartners />} />
          <Route path="/students" element={<Students />} />
          <Route path="/professionals" element={<Professionals />} />
          <Route path="/market-opportunity" element={<MarketOpportunity />} />
          <Route path="/validation" element={<Validation />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/media" element={<Media />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppLayout />
      </BrowserRouter>
    </HelmetProvider>
  )
}
