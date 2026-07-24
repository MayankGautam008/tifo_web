import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BarChart3, TrendingUp, Users, Zap, CheckCircle2, Handshake } from 'lucide-react'
import { PageHero, SectionHeader, FadeIn } from '../components/ui'

const benefits = [
  { icon: <TrendingUp size={22} />, title: 'Steady Order Flow', desc: 'TIFO\'s subscription model creates predictable, recurring demand for partner restaurants — replacing the boom-bust cycle of walk-in traffic.' },
  { icon: <BarChart3 size={22} />, title: 'Demand Intelligence', desc: 'Know what your customers want before they order. TIFO\'s AI-powered demand forecasting helps you prepare the right quantities at the right time.' },
  { icon: <Users size={22} />, title: 'Loyal Customer Base', desc: 'TIFO\'s personalization engine builds deep loyalty. Customers who discover you through TIFO are more likely to become regulars.' },
  { icon: <Zap size={22} />, title: 'Technology Without Cost', desc: 'Access enterprise-grade analytics, menu insights, and customer preference data — without building the technology yourself.' },
  { icon: <CheckCircle2 size={22} />, title: 'Quality Verification', desc: 'TIFO\'s quality standards protect your reputation and signal trustworthiness to new customers who discover you through the platform.' },
  { icon: <Handshake size={22} />, title: 'Collaborative Growth', desc: 'TIFO grows when partners grow. Our incentive structure is aligned with your success — not just transaction volume.' },
]

const partnerTypes = [
  { type: 'Local Restaurants', desc: 'Small to mid-sized local eateries with consistent quality and a focus on Indian cuisine.' },
  { type: 'Home Kitchen / Tiffin Services', desc: 'Home-cooked meal providers who want technology access and a reliable customer pipeline.' },
  { type: 'Campus Canteens', desc: 'Institutional food providers serving university campuses who want AI-powered demand intelligence.' },
  { type: 'Cloud Kitchens', desc: 'Delivery-only kitchen operations looking to expand their customer reach through TIFO\'s personalization layer.' },
]

export default function RestaurantPartnersPage() {
  return (
    <main id="main-content">
      <PageHero
        badge="Restaurant Partners"
        title="Grow With TIFO."
        titleHighlight="Not Just On It."
        description="TIFO is not a delivery aggregator. We are a technology partner that brings you intelligence, loyal customers, and predictable revenue growth."
        cta={<Link to="/contact" className="tifo-btn-primary">Become a Partner <ArrowRight size={16} /></Link>}
      />

      {/* Key Message */}
      <section className="section-padding pb-0">
        <div className="container-max">
          <FadeIn>
            <div className="glass-orange rounded-2xl p-8 mb-4" style={{ border: '1px solid rgba(193,68,14,0.25)' }}>
              <p className="text-lg text-white leading-relaxed text-center font-medium" style={{ fontFamily: 'var(--font-display)' }}>
                "We don't compete with local restaurants — we <span className="gradient-text">supercharge them</span> with technology they could never afford to build themselves."
              </p>
              <p className="text-center text-sm text-gray-500 mt-3">— TIFO Partnership Philosophy</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeader badge="Partner Benefits" title="What TIFO" titleHighlight="Gives You" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <FadeIn key={b.title} delay={i * 0.08}>
                <div className="glass rounded-2xl p-6 card-hover h-full">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-orange-400" style={{ background: 'rgba(193,68,14,0.1)' }}>
                    {b.icon}
                  </div>
                  <h3 className="text-white font-semibold mb-2" style={{ fontFamily: 'var(--font-display)' }}>{b.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{b.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="section-padding" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="container-max">
          <SectionHeader badge="Who Can Partner" title="We Welcome" titleHighlight="All Food Businesses" />
          <div className="grid md:grid-cols-2 gap-5">
            {partnerTypes.map((p, i) => (
              <FadeIn key={p.type} delay={i * 0.1}>
                <div className="glass rounded-xl p-6 card-hover flex gap-4">
                  <span className="w-2 h-2 rounded-full flex-shrink-0 mt-2" style={{ background: '#C1440E' }}></span>
                  <div>
                    <h3 className="text-white font-semibold mb-1" style={{ fontFamily: 'var(--font-display)' }}>{p.type}</h3>
                    <p className="text-sm text-gray-500">{p.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-max text-center">
          <FadeIn>
            <div className="glass rounded-3xl p-10" style={{ border: '1px solid rgba(193,68,14,0.2)' }}>
              <h2 className="heading-md text-white mb-5">Ready to Join TIFO's Partner Network?</h2>
              <p className="body-lg mx-auto mb-8" style={{ maxWidth: '500px' }}>
                We have active restaurant partnerships and are growing our network. Reach out to discuss how TIFO can work for your business.
              </p>
              <Link to="/contact" className="tifo-btn-primary">
                Contact Us <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
