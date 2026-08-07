import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ExternalLink } from 'lucide-react'
import { config } from '../../config/app'

const navItems = [
  { label: 'Company', href: '/about', children: [
    { label: 'About TIFO', href: '/about' },
    { label: 'Vision & Mission', href: '/vision-mission' },
    { label: 'Leadership', href: '/leadership' },
    { label: 'Why TIFO', href: '/why-tifo' },
  ]},
  { label: 'Platform', href: '/product', children: [
    { label: 'Product', href: '/product' },
    { label: 'AI Ecosystem', href: '/ai-ecosystem' },
    { label: 'Technology', href: '/technology' },
    { label: 'Solution', href: '/solution' },
    { label: 'Problem', href: '/problem' },
  ]},
  { label: 'Market', href: '/market-opportunity', children: [
    { label: 'Market Opportunity', href: '/market-opportunity' },
    { label: 'Validation & Traction', href: '/validation' },
    { label: 'Research & Insights', href: '/research' },
    { label: 'Roadmap', href: '/roadmap' },
  ]},
  { label: 'Ecosystem', href: '/restaurant-partners', children: [
    { label: 'Restaurant Partners', href: '/restaurant-partners' },
    { label: 'For Students', href: '/students' },
    { label: 'Student Ambassador', href: '/student-ambassador' },
    { label: 'For Professionals', href: '/professionals' },
  ]},
  { label: 'More', href: '/media', children: [
    { label: 'Media', href: '/media' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ]},
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
    setMobileExpanded(null)
  }, [location])

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
    setActiveDropdown(label)
  }
  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 150)
  }

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(247,245,242,0.95)' : 'rgba(247,245,242,0.88)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid rgba(193,68,14,0.12)' : '1px solid rgba(193,68,14,0.06)',
        boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.07)' : 'none',
      }}
      role="banner"
    >
      <div className="container-max px-6">
        <div className="flex items-center justify-between" style={{ height: '68px' }}>

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center gap-3" aria-label="TIFO Home">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden"
                style={{ background: '#F5F0E8', border: '1.5px solid rgba(193,68,14,0.18)', boxShadow: '0 2px 8px rgba(193,68,14,0.12)' }}>
                <img
                  src="/tifo-logo.png"
                  alt="TIFO Logo"
                  className="w-8 h-8 object-contain"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement
                    if (!img.src.endsWith('.svg')) { img.src = '/tifo-logo.svg' }
                    else {
                      img.style.display = 'none'
                      const p = img.parentElement
                      if (p) p.innerHTML = '<span style="font-family:var(--font-display);font-weight:900;font-size:19px;color:#C1440E;">T</span>'
                    }
                  }}
                />
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full pulse-orange" style={{ background: '#C1440E' }}></div>
            </div>
            <div>
              <span className="text-xl font-black tracking-tight" style={{ fontFamily: 'var(--font-display)', color: '#1A1410' }}>tifo</span>
              <p className="text-xs leading-none hidden sm:block" style={{ color: '#9A8E85', marginTop: '-1px' }}>AI Food Ecosystem</p>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-0.5" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                  style={{ color: '#4A4038', background: activeDropdown === item.label ? 'rgba(193,68,14,0.07)' : 'transparent' }}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown size={13} className="transition-transform duration-200"
                      style={{ transform: activeDropdown === item.label ? 'rotate(180deg)' : 'none', color: '#C1440E' }}
                    />
                  )}
                </Link>
                <AnimatePresence>
                  {activeDropdown === item.label && item.children && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.16 }}
                      className="absolute top-full left-0 mt-2 w-52 rounded-xl overflow-hidden"
                      style={{ background: 'white', border: '1px solid rgba(193,68,14,0.12)', boxShadow: '0 12px 40px rgba(0,0,0,0.10)' }}
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="py-1.5">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className="flex items-center gap-2.5 px-4 py-2.5 text-sm transition-all duration-150"
                            style={{ color: '#4A4038' }}
                            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(193,68,14,0.06)'; (e.currentTarget as HTMLElement).style.color = '#C1440E' }}
                            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = '#4A4038' }}
                          >
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#C1440E' }}></span>
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* ── CTA ── */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200"
              style={{ color: '#4A4038' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(193,68,14,0.07)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent' }}
            >
              Partner With Us
            </Link>
            <a
              href={config.PLATFORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="tifo-btn-primary text-sm py-2 px-5"
            >
              Launch Platform
              <ExternalLink size={13} />
            </a>
          </div>

          {/* ── Mobile Menu Button ── */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg transition-all duration-200"
            style={{ color: '#4A4038' }}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden"
            style={{ background: 'rgba(247,245,242,0.98)', borderTop: '1px solid rgba(193,68,14,0.10)' }}
          >
            <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200"
                    style={{ color: '#2A2018' }}
                  >
                    <span className="font-semibold" style={{ fontFamily: 'var(--font-display)' }}>{item.label}</span>
                    <ChevronDown
                      size={15}
                      className="transition-transform duration-200"
                      style={{ transform: mobileExpanded === item.label ? 'rotate(180deg)' : 'none', color: '#C1440E' }}
                    />
                  </button>
                  <AnimatePresence>
                    {mobileExpanded === item.label && item.children && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden ml-4"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className="flex items-center gap-2 px-4 py-2.5 text-sm transition-colors duration-150"
                            style={{ color: '#6A5E55' }}
                          >
                            <span className="w-1 h-1 rounded-full" style={{ background: '#C1440E' }}></span>
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="pt-4 border-t space-y-3" style={{ borderColor: 'rgba(193,68,14,0.1)' }}>
                <a href={config.PLATFORM_URL} target="_blank" rel="noopener noreferrer" className="tifo-btn-primary w-full justify-center">
                  Launch Platform <ExternalLink size={14} />
                </a>
                <Link to="/contact" className="tifo-btn-secondary w-full justify-center">Contact Us</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
