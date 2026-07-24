import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, AlertTriangle, Clock, X, TrendingDown, Users, Leaf, DollarSign } from 'lucide-react'
import { PageHero, SectionHeader, FadeIn, SourceNote } from '../components/ui'

export default function ProblemPage() {
  const problems = [
    {
      icon: <Clock size={28} />,
      title: 'The 7-Hour Freshness Problem',
      desc: 'University students carry lunch packed at 6 AM and eat it after 7–8 hours of continuous classes. By then, food is no longer fresh, nutritionally compromised, and potentially unsafe. This is not a rare occurrence — it is the daily reality for millions of Indian students.',
      severity: 'Critical',
      audience: 'Students',
    },
    {
      icon: <X size={28} />,
      title: 'Zero Personalization',
      desc: 'Existing food platforms treat every user identically. They show the same restaurant lists, the same menus, with no understanding of individual dietary preferences, health goals, cultural food habits, or daily routines. There is no learning, no adaptation, no intelligence.',
      severity: 'High',
      audience: 'All Users',
    },
    {
      icon: <AlertTriangle size={28} />,
      title: 'Limited Availability on Campuses',
      desc: 'Most food delivery platforms struggle with campus and institutional coverage. Delivery costs are high, ETAs are unpredictable, and quality varies wildly. For students between classes, this makes reliable meal access nearly impossible.',
      severity: 'High',
      audience: 'Students',
    },
    {
      icon: <DollarSign size={28} />,
      title: 'Affordability Gap',
      desc: 'Premium food platforms price out budget-sensitive segments. Subscription models, where they exist, are rigid and not personalized. Students and early-career professionals cannot access quality, personalized food at a price that fits their income.',
      severity: 'High',
      audience: 'Students & Professionals',
    },
    {
      icon: <TrendingDown size={28} />,
      title: 'Restaurant Visibility & Demand Uncertainty',
      desc: 'Local restaurants — especially home-cooked meal providers and small tiffin services — have no tools to understand demand patterns, optimize their menus, or build loyal customer bases. They operate blind, leading to food waste and revenue loss.',
      severity: 'Medium',
      audience: 'Restaurant Partners',
    },
    {
      icon: <Leaf size={28} />,
      title: 'Massive Food Waste',
      desc: 'Without demand intelligence, food is overproduced, under-ordered, or over-carried by students. This contributes to India\'s significant food waste problem at the individual and institutional level.',
      severity: 'Medium',
      audience: 'System-Wide',
      sourceText: 'FSSAI Report on Food Waste',
      sourceHref: 'https://fssai.gov.in',
    },
  ]

  return (
    <main id="main-content">
      <PageHero
        badge="Problem Statement"
        title="The Problem TIFO"
        titleHighlight="Was Built to Solve"
        description="Every great technology company starts by identifying a real, painful, widespread problem. TIFO identified several — and they're all connected."
      />

      {/* Problem Cards */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeader
            badge="Core Problems"
            title="What's Broken in"
            titleHighlight="India's Food Ecosystem"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.1}>
                <div className="glass rounded-2xl p-7 card-hover h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-red-400" style={{ background: 'rgba(239,68,68,0.1)' }}>
                      {p.icon}
                    </div>
                    <div className="flex gap-2">
                      <span
                        className="badge text-xs"
                        style={{
                          background: p.severity === 'Critical' ? 'rgba(239,68,68,0.12)' : p.severity === 'High' ? 'rgba(245,158,11,0.12)' : 'rgba(255,255,255,0.06)',
                          color: p.severity === 'Critical' ? '#f87171' : p.severity === 'High' ? '#fbbf24' : '#9ca3af',
                          border: p.severity === 'Critical' ? '1px solid rgba(239,68,68,0.25)' : p.severity === 'High' ? '1px solid rgba(245,158,11,0.25)' : '1px solid rgba(255,255,255,0.08)',
                        }}
                      >
                        {p.severity}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-white font-bold mb-3" style={{ fontFamily: 'var(--font-display)' }}>{p.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-3">{p.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600 font-mono">Affects: {p.audience}</span>
                    {p.sourceText && <SourceNote text={p.sourceText} href={p.sourceHref} />}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Scale of Problem */}
      <section className="section-padding" style={{ background: 'rgba(239,68,68,0.03)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="container-max">
          <SectionHeader
            badge="The Scale"
            title="How Many People"
            titleHighlight="Are Affected?"
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                value: '37M+',
                label: 'Higher education students in India who face daily meal planning challenges',
                source: 'AISHE Report 2021-22, Ministry of Education',
                href: 'https://aishe.gov.in',
              },
              {
                value: '560M+',
                label: 'Working-age Indians who struggle with time-poor, nutrition-poor meal choices',
                source: 'World Bank, 2023',
                href: 'https://data.worldbank.org',
              },
              {
                value: '40%',
                label: 'Food wasted annually in India\'s supply chain due to demand-supply mismatch',
                source: 'FSSAI Annual Report',
                href: 'https://fssai.gov.in',
              },
            ].map((s, i) => (
              <FadeIn key={s.value} delay={i * 0.12}>
                <div className="glass rounded-2xl p-7 card-hover text-center">
                  <div className="text-4xl font-black mb-3" style={{ fontFamily: 'var(--font-display)', color: '#E05A1A' }}>{s.value}</div>
                  <p className="text-sm text-gray-300 mb-2 leading-relaxed">{s.label}</p>
                  <SourceNote text={s.source} href={s.href} />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Transition to Solution */}
      <section className="section-padding">
        <div className="container-max text-center">
          <FadeIn>
            <div className="glass rounded-3xl p-10 md:p-14" style={{ border: '1px solid rgba(193,68,14,0.15)' }}>
              <h2 className="heading-md text-white mb-5">
                Every Problem Has a <span className="gradient-text">TIFO Solution</span>
              </h2>
              <p className="body-lg mx-auto mb-8" style={{ maxWidth: '600px' }}>
                TIFO was designed specifically to address each of these problems with intelligent technology, local partnerships, and a customer-first approach.
              </p>
              <Link to="/solution" className="tifo-btn-primary">
                See Our Solution <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
