import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Brain, Users, Shield, TrendingUp, Zap, Heart, Globe, Star, CheckCircle2 } from 'lucide-react'
import { PageHero, SectionHeader, FadeIn } from '../components/ui'

export default function WhyTIFOPage() {
  const differentiators = [
    {
      icon: <Brain size={28} />,
      title: 'AI-First, Not Logistics-First',
      desc: 'Most food apps optimize delivery speed. TIFO optimizes the meal itself — matching you with food that fits your preferences, timing, and lifestyle through real intelligence.',
      tag: 'Core Differentiator',
    },
    {
      icon: <Users size={28} />,
      title: 'Deep Personalization',
      desc: 'Not just "you liked biryani once." TIFO builds a comprehensive food profile that considers cuisine, dietary needs, schedule, health goals, and behavioral patterns.',
      tag: 'Technology',
    },
    {
      icon: <Heart size={28} />,
      title: 'Local Restaurant Empowerment',
      desc: 'We don\'t compete with local restaurants — we supercharge them with technology, demand forecasting, and a steady, loyal customer base.',
      tag: 'Partnership Model',
    },
    {
      icon: <Shield size={28} />,
      title: 'Subscription Over Impulse',
      desc: 'Smart meal subscriptions create predictability for customers and restaurants alike — fresher food, less waste, better economics for everyone.',
      tag: 'Business Model',
    },
    {
      icon: <TrendingUp size={28} />,
      title: 'Data-Driven Improvement',
      desc: 'Every meal order, rating, and feedback makes the system smarter. TIFO improves continuously — unlike static menus or one-size-fits-all platforms.',
      tag: 'AI Learning',
    },
    {
      icon: <Globe size={28} />,
      title: 'Built for India\'s Diversity',
      desc: 'India\'s culinary diversity is unmatched. TIFO is designed from the ground up to handle thousands of regional cuisines, dietary traditions, and local food cultures.',
      tag: 'India-First',
    },
    {
      icon: <Zap size={28} />,
      title: 'Affordability Through Intelligence',
      desc: 'AI-optimized subscriptions and demand forecasting make quality personalized food affordable for students and budget-conscious professionals.',
      tag: 'Accessibility',
    },
    {
      icon: <Star size={28} />,
      title: 'Research-Driven Development',
      desc: 'TIFO\'s product is built on real customer research, not assumptions. 9+ months of validation with 10,000+ customer touchpoints shape every product decision.',
      tag: 'Validated',
    },
  ]

  const comparisons = [
    { feature: 'AI-Powered Personalization', tifo: true, traditional: false },
    { feature: 'Customer Preference Memory', tifo: true, traditional: false },
    { feature: 'Smart Subscriptions', tifo: true, traditional: 'Limited' },
    { feature: 'Restaurant Analytics', tifo: true, traditional: false },
    { feature: 'Demand Forecasting', tifo: true, traditional: false },
    { feature: 'Local Restaurant Focus', tifo: true, traditional: 'Partial' },
    { feature: 'Continuous Learning', tifo: true, traditional: false },
    { feature: 'Health-Aware Recommendations (Roadmap)', tifo: 'Roadmap', traditional: false },
  ]

  return (
    <main id="main-content">
      <PageHero
        badge="Why TIFO"
        title="Fundamentally Different."
        titleHighlight="By Design."
        description="TIFO isn't a variation of existing food apps. It's a rethinking of the entire food experience — from first preference to thousandth meal."
      />

      {/* Differentiators */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeader
            badge="What Sets Us Apart"
            title="The TIFO"
            titleHighlight="Difference"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {differentiators.map((d, i) => (
              <FadeIn key={d.title} delay={i * 0.07}>
                <div className="glass rounded-2xl p-6 card-hover h-full">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-orange-400" style={{ background: 'rgba(193,68,14,0.1)' }}>
                    {d.icon}
                  </div>
                  <span className="badge badge-orange mb-3 inline-flex">{d.tag}</span>
                  <h3 className="text-white font-semibold mb-2 text-sm" style={{ fontFamily: 'var(--font-display)' }}>{d.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{d.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="container-max">
          <SectionHeader
            badge="Comparison"
            title="TIFO vs"
            titleHighlight="Traditional Platforms"
          />
          <FadeIn>
            <div className="glass rounded-2xl overflow-hidden">
              <table className="w-full text-sm" role="table">
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <th className="text-left px-6 py-4 text-gray-400 font-medium">Feature</th>
                    <th className="px-6 py-4 text-center">
                      <span className="gradient-text font-bold" style={{ fontFamily: 'var(--font-display)' }}>TIFO</span>
                    </th>
                    <th className="px-6 py-4 text-center text-gray-500 font-medium">Traditional Apps</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((row, i) => (
                    <motion.tr
                      key={row.feature}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.04 }}
                      style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
                    >
                      <td className="px-6 py-4 text-gray-300">{row.feature}</td>
                      <td className="px-6 py-4 text-center">
                        {row.tifo === true ? (
                          <CheckCircle2 size={18} className="text-green-400 mx-auto" />
                        ) : row.tifo === false ? (
                          <span className="text-gray-600">—</span>
                        ) : (
                          <span className="badge badge-orange">{row.tifo}</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {row.traditional === true ? (
                          <CheckCircle2 size={18} className="text-green-400 mx-auto" />
                        ) : row.traditional === false ? (
                          <span className="text-red-900">✕</span>
                        ) : (
                          <span className="text-yellow-600 text-xs">{row.traditional}</span>
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-max text-center">
          <FadeIn>
            <h2 className="heading-md text-white mb-5">See TIFO in Action</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/product" className="tifo-btn-primary">Explore the Product <ArrowRight size={16} /></Link>
              <Link to="/ai-ecosystem" className="tifo-btn-secondary">Discover AI Ecosystem</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
