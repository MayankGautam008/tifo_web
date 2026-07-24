import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react'
import { PageHero, FadeIn } from '../components/ui'
import { config } from '../config/app'

const contactReasons = [
  'Investor Inquiry',
  'Restaurant Partnership',
  'University Partnership',
  'Media / Press',
  'Career Inquiry',
  'General Question',
  'Technical Support',
  'Other',
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', org: '', reason: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form would integrate with backend in production
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main id="main-content">
        <div className="min-h-screen flex items-center justify-center section-padding" style={{ paddingTop: '120px' }}>
          <div className="text-center">
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'rgba(193,68,14,0.12)' }}>
              <Send size={32} className="text-orange-400" />
            </div>
            <h2 className="heading-md text-white mb-4">Message Sent!</h2>
            <p className="body-lg mb-8">Thank you for reaching out. The TIFO team will respond within 2–3 business days.</p>
            <button onClick={() => setSubmitted(false)} className="tifo-btn-secondary">Send Another Message</button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main id="main-content">
      <PageHero
        badge="Contact TIFO"
        title="Let's Build"
        titleHighlight="Something Together"
        description="Whether you're an investor, restaurant partner, university, or potential team member — we want to hear from you."
      />

      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="space-y-6">
              <FadeIn>
                <div className="glass rounded-2xl p-7">
                  <h3 className="text-white font-bold text-lg mb-5" style={{ fontFamily: 'var(--font-display)' }}>Get In Touch</h3>
                  <div className="space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center text-orange-400 flex-shrink-0" style={{ background: 'rgba(193,68,14,0.1)' }}>
                        <Mail size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 mb-0.5">Email</p>
                        <a href={`mailto:${config.COMPANY_EMAIL}`} className="text-sm text-white hover:text-orange-400 transition-colors">
                          {config.COMPANY_EMAIL}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center text-orange-400 flex-shrink-0" style={{ background: 'rgba(193,68,14,0.1)' }}>
                        <MapPin size={18} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 mb-0.5">Location</p>
                        <p className="text-sm text-white">India</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="glass rounded-2xl p-7">
                  <h3 className="text-white font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Who Should Contact Us</h3>
                  <ul className="space-y-2">
                    {['Investors & VCs', 'Restaurant Owners', 'Universities & Institutions', 'Startup Incubators', 'Government Officials', 'Media & Journalists', 'Future Employees'].map((who) => (
                      <li key={who} className="text-sm text-gray-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#C1440E' }}></span>
                        {who}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            </div>

            {/* Contact Form */}
            <FadeIn className="lg:col-span-2" delay={0.15}>
              <div className="glass rounded-2xl p-8">
                <h3 className="text-white font-bold text-lg mb-6" style={{ fontFamily: 'var(--font-display)' }}>Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5" aria-label="Contact form">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-xs text-gray-400 mb-2 font-medium">Full Name *</label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none transition-all"
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs text-gray-400 mb-2 font-medium">Email Address *</label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none transition-all"
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="org" className="block text-xs text-gray-400 mb-2 font-medium">Organization</label>
                    <input
                      id="org"
                      type="text"
                      value={form.org}
                      onChange={(e) => setForm({ ...form, org: e.target.value })}
                      placeholder="Company, University, or Organization name"
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none transition-all"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="reason" className="block text-xs text-gray-400 mb-2 font-medium">Reason for Contact *</label>
                    <select
                      id="reason"
                      required
                      value={form.reason}
                      onChange={(e) => setForm({ ...form, reason: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm text-white focus:outline-none transition-all appearance-none"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                    >
                      <option value="" style={{ background: '#111' }}>Select a reason</option>
                      {contactReasons.map((r) => (
                        <option key={r} value={r} style={{ background: '#111' }}>{r}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs text-gray-400 mb-2 font-medium">Message *</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us what you have in mind..."
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none transition-all resize-none"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                    />
                  </div>
                  <button type="submit" className="tifo-btn-primary w-full justify-center">
                    Send Message <Send size={16} />
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  )
}
