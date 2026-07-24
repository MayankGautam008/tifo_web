import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Clock, Users, TrendingUp, Handshake, MessageSquare } from 'lucide-react'
import { PageHero, SectionHeader, FadeIn, InternalResearchNote } from '../components/ui'

const milestones = [
  {
    icon: <Clock size={28} />,
    title: '9+ Months Product Development & Validation',
    desc: 'TIFO has spent over 9 months in active product development and field validation — iterating based on real user feedback and market insights. This is not a weekend project; it\'s a deeply researched, continuously refined platform.',
    tag: 'Development',
    color: '#818cf8',
  },
  {
    icon: <Users size={28} />,
    title: '10,000+ Customer Outreach',
    desc: 'We have directly engaged with over 10,000 potential customers through field surveys, interviews, and product demos. This outreach has shaped every major product decision and validated our core hypotheses.',
    tag: 'Customer Research',
    color: '#38BDF8',
  },
  {
    icon: <CheckCircle2 size={28} />,
    title: '300+ Returning Customers',
    desc: 'Over 300 customers have returned to use TIFO more than once — the most meaningful early signal of product-market fit. Retention, not acquisition, is the most honest metric of a product\'s value.',
    tag: 'Product Validation',
    color: '#4ade80',
  },
  {
    icon: <Handshake size={28} />,
    title: 'Active Restaurant Partnerships',
    desc: 'TIFO has established active partnerships with restaurant operators who are integrated into our platform. These are real, operational partnerships — not LOIs or MoUs.',
    tag: 'Business Validation',
    color: '#C1440E',
  },
  {
    icon: <MessageSquare size={28} />,
    title: 'Continuous Product Improvements from Customer Feedback',
    desc: 'TIFO operates a continuous feedback loop where every customer interaction informs product improvements. Our development roadmap is driven by real user needs, not assumptions.',
    tag: 'Product Iteration',
    color: '#f59e0b',
  },
]

const learnings = [
  {
    title: 'Personalization is the Killer Feature',
    desc: 'Customer feedback consistently highlighted that personalized recommendations — not delivery speed or price — were the primary driver of satisfaction and retention.',
  },
  {
    title: 'Subscriptions Build Loyalty',
    desc: 'Customers on subscription plans showed significantly higher retention than those on a pay-per-order model — validating TIFO\'s subscription-first business model.',
  },
  {
    title: 'Local Restaurants are Eager Partners',
    desc: 'Local restaurants were overwhelmingly receptive to TIFO\'s technology-driven partnership model — particularly the demand forecasting and customer insights components.',
  },
  {
    title: 'Freshness is Non-Negotiable',
    desc: 'The single most common complaint in the market: food freshness. TIFO\'s schedule-aware meal timing directly addresses this and is the most cited reason customers return.',
  },
]

export default function ValidationPage() {
  return (
    <main id="main-content">
      <PageHero
        badge="Validation & Traction"
        title="Built on Real."
        titleHighlight="Not Imagined."
        description="Every milestone, metric, and learning at TIFO comes from real field validation. No fictional users, no made-up surveys, no invented traction."
      />

      {/* Integrity Notice */}
      <section className="section-padding pb-0">
        <div className="container-max">
          <FadeIn>
            <div className="glass rounded-xl p-5 mb-4 flex gap-4" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="flex-shrink-0 mt-0.5">
                <CheckCircle2 size={18} className="text-green-400" />
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                All metrics on this page are sourced from TIFO's internal validation activities.{' '}
                <InternalResearchNote label="Internal Research" />{' '}
                These are real, grounded figures from our own field work — clearly distinguished from external market data which is cited with source links.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Milestones */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeader
            badge="Key Milestones"
            title="Proof of"
            titleHighlight="Real Traction"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {milestones.map((m, i) => (
              <FadeIn key={m.title} delay={i * 0.1}>
                <div className="glass rounded-2xl p-7 card-hover h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${m.color}15`, color: m.color }}>
                      {m.icon}
                    </div>
                    <span className="badge" style={{ background: `${m.color}12`, color: m.color, border: `1px solid ${m.color}25` }}>
                      {m.tag}
                    </span>
                  </div>
                  <h3 className="text-white font-bold mb-3" style={{ fontFamily: 'var(--font-display)' }}>{m.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{m.desc}</p>
                  <p className="text-xs text-gray-700 mt-3 font-mono flex items-center gap-1">
                    <InternalResearchNote />
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Key Learnings */}
      <section className="section-padding" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="container-max">
          <SectionHeader badge="Key Learnings" title="What Validation" titleHighlight="Taught Us" />
          <div className="grid md:grid-cols-2 gap-5">
            {learnings.map((l, i) => (
              <FadeIn key={l.title} delay={i * 0.1}>
                <div className="glass rounded-xl p-6 card-hover flex gap-4">
                  <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: '#C1440E' }}></span>
                  <div>
                    <h4 className="text-white font-semibold mb-2 text-sm" style={{ fontFamily: 'var(--font-display)' }}>{l.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{l.desc}</p>
                    <p className="text-xs text-gray-700 mt-2 font-mono"><InternalResearchNote label="Customer Feedback" /></p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="section-padding">
        <div className="container-max text-center">
          <FadeIn>
            <h2 className="heading-md text-white mb-5">See Where We're Going Next</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/roadmap" className="tifo-btn-primary">View Roadmap <ArrowRight size={16} /></Link>
              <Link to="/market-opportunity" className="tifo-btn-secondary">Market Opportunity</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
