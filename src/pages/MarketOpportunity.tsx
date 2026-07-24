import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Globe, Users, Building2 } from 'lucide-react'
import { PageHero, SectionHeader, FadeIn, SourceNote } from '../components/ui'

const marketData = [
  {
    value: '₹75,000 Cr+',
    label: 'India Food Services Market',
    period: 'FY2023',
    source: 'National Restaurant Association of India (NRAI) India Food Services Report 2023',
    sourceHref: 'https://nrai.org',
    desc: 'India\'s food services industry is one of the world\'s fastest-growing, driven by urbanization, rising incomes, and digital adoption.',
  },
  {
    value: '37M+',
    label: 'Higher Education Students',
    period: '2021-22',
    source: 'AISHE Annual Report 2021-22, Ministry of Education, GoI',
    sourceHref: 'https://aishe.gov.in',
    desc: 'A massive, technology-receptive segment that is largely underserved by personalized food technology platforms.',
  },
  {
    value: '560M+',
    label: 'Working-Age Population',
    period: '2023',
    source: 'World Bank Development Indicators — India',
    sourceHref: 'https://data.worldbank.org/indicator/SP.POP.1564.TO?locations=IN',
    desc: 'India\'s working-age population represents one of the largest addressable markets for workplace food technology globally.',
  },
  {
    value: '40%+',
    label: 'Annual Food Loss in Supply Chain',
    period: 'Recent',
    source: 'FSSAI Food Safety Reports',
    sourceHref: 'https://fssai.gov.in',
    desc: 'Significant food waste driven by demand-supply mismatch — a problem that intelligent demand forecasting directly addresses.',
  },
]

const segments = [
  { icon: <Users size={22} />, segment: 'University Students', size: '37M+ enrolled', opportunity: 'Daily meal subscriptions for campus students', challenge: 'Currently served by ad-hoc tiffin services with no personalization' },
  { icon: <Building2 size={22} />, segment: 'Working Professionals', size: '560M+ working age', opportunity: 'Time-optimized, intelligent meal plans for busy professionals', challenge: 'Canteens and aggregators offer no true personalization' },
  { icon: <Globe size={22} />, segment: 'Local Restaurants', size: '7.5M+ establishments', opportunity: 'Technology-as-a-service for demand forecasting and analytics', challenge: 'No affordable access to AI-powered demand intelligence', sourceNote: 'NRAI estimates, approximate' },
]

export default function MarketOpportunityPage() {
  return (
    <main id="main-content">
      <PageHero
        badge="Market Opportunity"
        title="A Massive Market."
        titleHighlight="Vastly Underserved."
        description="India's food ecosystem is one of the world's largest — yet it remains largely untouched by intelligent, personalized technology. That is TIFO's opportunity."
      />

      {/* Market Data */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeader
            badge="Verified Market Data"
            title="The Numbers"
            titleHighlight="Behind the Opportunity"
            description="All market figures are sourced from publicly available, government and industry reports."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {marketData.map((m, i) => (
              <FadeIn key={m.value} delay={i * 0.1}>
                <div className="glass rounded-2xl p-7 card-hover h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-4xl font-black gradient-text mb-1" style={{ fontFamily: 'var(--font-display)' }}>{m.value}</div>
                      <div className="text-white font-semibold">{m.label}</div>
                      <div className="text-xs text-gray-600 font-mono">({m.period})</div>
                    </div>
                    <TrendingUp size={20} className="text-orange-400 flex-shrink-0" />
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed mb-3">{m.desc}</p>
                  <SourceNote text={m.source} href={m.sourceHref} />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Market Segments */}
      <section className="section-padding" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="container-max">
          <SectionHeader badge="Target Segments" title="Three Underserved" titleHighlight="Markets" />
          <div className="space-y-5">
            {segments.map((s, i) => (
              <FadeIn key={s.segment} delay={i * 0.1}>
                <div className="glass rounded-2xl p-7 card-hover">
                  <div className="grid md:grid-cols-4 gap-6 items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-orange-400 flex-shrink-0" style={{ background: 'rgba(193,68,14,0.1)' }}>
                        {s.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-sm" style={{ fontFamily: 'var(--font-display)' }}>{s.segment}</h3>
                        <p className="text-xs text-gray-500">{s.size}</p>
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-xs text-gray-600 mb-1 uppercase tracking-wider font-mono">Opportunity</p>
                      <p className="text-sm text-gray-300">{s.opportunity}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 mb-1 uppercase tracking-wider font-mono">Gap</p>
                      <p className="text-sm text-gray-400 text-xs leading-relaxed">{s.challenge}</p>
                      {s.sourceNote && <p className="text-xs text-gray-700 mt-1 font-mono">[{s.sourceNote}]</p>}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* India Context */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeader badge="India Context" title="Why India, Why" titleHighlight="Now" />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Digital-First Generation', desc: 'India\'s student and young professional population is highly digital-native, making AI-powered food tech adoption rapid and natural.' },
              { title: 'Smartphone Penetration', desc: 'Rapidly growing smartphone penetration and affordable data make mobile-first food technology accessible across urban and semi-urban India.' },
              { title: 'Culinary Diversity', desc: 'India\'s unmatched culinary diversity creates an exceptionally rich dataset for AI personalization — and an equally large demand for it.' },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="glass rounded-2xl p-6 card-hover h-full">
                  <h3 className="text-white font-semibold mb-3" style={{ fontFamily: 'var(--font-display)' }}>{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/validation" className="tifo-btn-primary">
              See Our Validation Data <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
