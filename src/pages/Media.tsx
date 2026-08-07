import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, ArrowRight, FileText, Newspaper } from 'lucide-react'
import { PageHero, SectionHeader, FadeIn, InternalResearchNote } from '../components/ui'
import { config } from '../config/app'

export default function MediaPage() {
  return (
    <main id="main-content">
      <PageHero
        badge="Media"
        title="TIFO in the"
        titleHighlight="Public Domain"
        description="Press resources, official company information, and media contact details for journalists and publications covering TIFO."
      />

      {/* Media Contact */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-10">
            <FadeIn>
              <div className="glass rounded-2xl p-8">
                <h2 className="text-white font-bold text-xl mb-5" style={{ fontFamily: 'var(--font-display)' }}>Media & Press Inquiries</h2>
                <p className="body-md mb-6">
                  For press inquiries, interview requests, and media kit access, please reach out to our team directly. We aim to respond to all media inquiries within 2 business days.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-orange-400 flex-shrink-0" style={{ background: 'rgba(193,68,14,0.1)' }}>
                      <Mail size={16} />
                    </div>
                    <a href={`mailto:${config.COMPANY_EMAIL}`} className="text-sm text-white hover:text-orange-400">
                      {config.COMPANY_EMAIL}
                    </a>
                  </div>
                </div>
                <Link to="/contact" className="tifo-btn-primary">
                  Send Media Inquiry <ArrowRight size={16} />
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="glass rounded-2xl p-8">
                <h2 className="text-white font-bold text-xl mb-5" style={{ fontFamily: 'var(--font-display)' }}>Official Company Facts</h2>
                <div className="space-y-4">
                  {[
                    { label: 'Company Name', value: 'TIFO' },
                    { label: 'Full Name', value: 'TIFO Technologies' },
                    { label: 'Founded', value: '2024' },
                    { label: 'Country', value: 'India' },
                    { label: 'Category', value: 'AI-Powered Food Technology' },
                    { label: 'Stage', value: 'Early Stage — Product Development & Validation' },
                    { label: 'Tagline', value: 'India\'s AI-Powered Personalized Food Ecosystem' },
                    { label: 'Brand Meaning', value: 'The right food, right person, right time' },
                  ].map((fact) => (
                    <div key={fact.label} className="flex gap-4 border-b border-white/5 pb-3">
                      <span className="text-xs text-gray-500 font-mono w-40 flex-shrink-0 pt-0.5">{fact.label}</span>
                      <span className="text-sm text-gray-300">{fact.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Coverage Notice */}
      <section className="section-padding" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="container-max">
          <FadeIn>
            <div className="glass rounded-2xl p-8">
              <div className="flex gap-4">
                <Newspaper size={24} className="text-orange-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-bold mb-3" style={{ fontFamily: 'var(--font-display)' }}>Media Coverage Status</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    TIFO is an early-stage startup currently in its product development and validation phase. We do not have confirmed press coverage to display at this time. As TIFO grows and earns media attention, this section will be updated with verified, sourced coverage links.
                  </p>
                  <div className="flex items-center gap-2">
                    <InternalResearchNote label="No fabricated press coverage" />
                    <span className="text-xs text-gray-600">— We show only what is real.</span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Brand Assets Note */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeader badge="Brand Assets" title="Logo &" titleHighlight="Brand Guidelines" />
          <FadeIn>
            <div className="glass rounded-2xl p-8 text-center">
              <div className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center overflow-hidden p-2" style={{ background: '#F5F0E8', border: '1.5px solid rgba(193,68,14,0.18)' }}>
                <img
                  src="/tifo-logo.svg"
                  alt="TIFO Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement
                    if (!img.src.endsWith('.png')) { img.src = '/tifo-logo.png' }
                    else {
                      img.style.display = 'none'
                      const p = img.parentElement
                      if (p) p.innerHTML = '<span style="font-family:var(--font-display);font-weight:900;font-size:28px;color:#C1440E;">T</span>'
                    }
                  }}
                />
              </div>
              <p className="text-sm text-gray-400 mb-6 mx-auto" style={{ maxWidth: '500px' }}>
                Official brand assets including the TIFO logo, color palette, and usage guidelines are available for verified media and partner use. Please contact us to request access.
              </p>
              <Link to="/contact" className="tifo-btn-ghost">
                Request Brand Assets <FileText size={14} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
