import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink, ArrowRight, MapPin, Mail } from 'lucide-react'
import { config } from '../../config/app'

const footerLinks = {
  Company: [
    { label: 'About TIFO', href: '/about' },
    { label: 'Vision & Mission', href: '/vision-mission' },
    { label: 'Leadership', href: '/leadership' },
    { label: 'Why TIFO', href: '/why-tifo' },
    { label: 'Careers', href: '/careers' },
  ],
  Platform: [
    { label: 'Product', href: '/product' },
    { label: 'AI Ecosystem', href: '/ai-ecosystem' },
    { label: 'Technology', href: '/technology' },
    { label: 'Problem', href: '/problem' },
    { label: 'Solution', href: '/solution' },
  ],
  Market: [
    { label: 'Market Opportunity', href: '/market-opportunity' },
    { label: 'Validation & Traction', href: '/validation' },
    { label: 'Research & Insights', href: '/research' },
    { label: 'Roadmap', href: '/roadmap' },
  ],
  Connect: [
    { label: 'Restaurant Partners', href: '/restaurant-partners' },
    { label: 'For Students', href: '/students' },
    { label: 'Student Ambassador', href: '/student-ambassador' },
    { label: 'For Professionals', href: '/professionals' },
    { label: 'Media', href: '/media' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subStatus, setSubStatus] = useState<'idle' | 'done'>('idle')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    setSubStatus('done')
    setEmail('')
  }

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: '#1A1410', color: '#B8AFA8' }}
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Subtle orange glow top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(193,68,14,0.40), transparent)' }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-48 opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(193,68,14,0.5), transparent)', filter: 'blur(60px)' }} />

      <div className="container-max section-padding relative z-10">

        {/* ── Top section ── */}
        <div className="grid lg:grid-cols-5 gap-12 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4" aria-label="TIFO Home">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden"
                style={{ background: '#F5F0E8', border: '1px solid rgba(193,68,14,0.20)' }}>
                <img src="/tifo-logo.png" alt="TIFO Logo" className="w-8 h-8 object-contain"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement
                    if (!img.src.endsWith('.svg')) { img.src = '/tifo-logo.svg' }
                    else {
                      img.style.display = 'none'
                      const p = img.parentElement
                      if (p) p.innerHTML = '<span style="font-family:var(--font-display);font-weight:900;font-size:19px;color:#C1440E;">T</span>'
                    }
                  }} />
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-white" style={{ fontFamily: 'var(--font-display)' }}>tifo</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-5" style={{ color: '#7A6E65' }}>
              India's AI-Powered Personalized Food Ecosystem.<br />
              The right food. Right person. Right time.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs" style={{ color: '#6B6560' }}>
                <MapPin size={12} className="text-orange-500" />
                India
              </div>
              <a href={`mailto:${config.COMPANY_EMAIL}`}
                className="flex items-center gap-2 text-xs hover:text-orange-400 transition-colors"
                style={{ color: '#6B6560' }}>
                <Mail size={12} className="text-orange-500" />
                {config.COMPANY_EMAIL}
              </a>
            </div>
          </div>

          {/* Nav Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                {category}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm transition-colors duration-150 hover:text-orange-400"
                      style={{ color: '#7A6E65' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Newsletter ── */}
        <div
          className="rounded-2xl p-6 mb-14 grid md:grid-cols-2 gap-6 items-center"
          style={{ background: 'rgba(193,68,14,0.08)', border: '1px solid rgba(193,68,14,0.18)' }}
        >
          <div>
            <h4 className="text-white font-bold mb-1" style={{ fontFamily: 'var(--font-display)' }}>Stay Updated</h4>
            <p className="text-sm" style={{ color: '#7A6E65' }}>
              TIFO updates, research insights, and food tech news — directly to your inbox.
            </p>
          </div>
          {subStatus === 'done' ? (
            <div className="flex items-center gap-2 text-green-400 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Thank you! You'll hear from us soon.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2" aria-label="Newsletter signup">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-2.5 rounded-lg text-sm outline-none transition-all"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#E0D8D0' }}
              />
              <button type="submit" className="tifo-btn-primary py-2.5 px-5 text-sm">
                Subscribe <ArrowRight size={14} />
              </button>
            </form>
          )}
        </div>

        {/* ── Bottom ── */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
        >
          <p className="text-xs" style={{ color: '#4A4038' }}>
            © {new Date().getFullYear()} TIFO Technologies. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/privacy-policy" className="text-xs hover:text-orange-400 transition-colors" style={{ color: '#4A4038' }}>
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs hover:text-orange-400 transition-colors" style={{ color: '#4A4038' }}>
              Terms & Conditions
            </Link>
            <a href={config.PLATFORM_URL} target="_blank" rel="noopener noreferrer"
              className="text-xs flex items-center gap-1 hover:text-orange-400 transition-colors" style={{ color: '#4A4038' }}>
              Launch App <ExternalLink size={10} />
            </a>
          </div>
          <p className="text-xs" style={{ color: '#3A3028' }}>
            Built with ❤️ in India 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  )
}
