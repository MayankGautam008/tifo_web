import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Brain, Shield, Zap, Heart, BarChart3, Clock, Users, Leaf } from 'lucide-react'
import { PageHero, SectionHeader, FadeIn } from '../components/ui'

export default function SolutionPage() {
  const solutions = [
    {
      problem: '7-Hour freshness problem',
      solution: 'Smart Subscriptions & Time-Aware Recommendations',
      icon: <Clock size={24} />,
      desc: 'TIFO\'s AI analyzes your class schedule and daily routine to recommend the right meal at the right time — so you always have fresh, timely food matched to your actual eating window.',
    },
    {
      problem: 'Zero personalization',
      solution: 'Deep Preference Learning Engine',
      icon: <Brain size={24} />,
      desc: 'From first order to hundredth, TIFO continuously builds and refines your unique food profile — cuisine preferences, dietary restrictions, meal patterns, and taste evolution over time.',
    },
    {
      problem: 'Limited campus availability',
      solution: 'Local Restaurant Ecosystem',
      icon: <Users size={24} />,
      desc: 'By partnering with local tiffin services, home kitchens, and restaurants near campuses, TIFO creates a reliable, hyper-local supply network that traditional delivery platforms ignore.',
    },
    {
      problem: 'Affordability gap',
      solution: 'AI-Optimized Subscription Plans',
      icon: <Shield size={24} />,
      desc: 'Intelligent subscription bundling and demand forecasting allow TIFO to offer quality personalized meals at price points accessible to students and early-career professionals.',
    },
    {
      problem: 'Restaurant demand uncertainty',
      solution: 'Demand Forecasting & Restaurant Analytics',
      icon: <BarChart3 size={24} />,
      desc: 'TIFO\'s analytics platform gives restaurant partners real-time insights into demand patterns, menu performance, and customer preferences — eliminating guesswork and reducing waste.',
    },
    {
      problem: 'Food waste',
      solution: 'Predictive Supply Matching',
      icon: <Leaf size={24} />,
      desc: 'By predicting demand with AI, TIFO ensures restaurants prepare the right quantities at the right time — significantly reducing food waste across the entire ecosystem.',
    },
  ]

  return (
    <main id="main-content">
      <PageHero
        badge="Our Solution"
        title="Intelligence as the"
        titleHighlight="Answer"
        description="TIFO's solution isn't a single feature — it's a comprehensive, AI-powered ecosystem that addresses every layer of the food problem."
      />

      {/* Solution Pairs */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeader
            badge="Problem → Solution"
            title="How TIFO"
            titleHighlight="Solves Each Problem"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((s, i) => (
              <FadeIn key={s.solution} delay={i * 0.1}>
                <div className="glass rounded-2xl p-7 card-hover h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-orange-400 flex-shrink-0" style={{ background: 'rgba(193,68,14,0.1)' }}>
                      {s.icon}
                    </div>
                    <div>
                      <p className="text-xs text-red-400 font-mono mb-0.5">Problem: {s.problem}</p>
                      <h3 className="text-white font-bold text-sm" style={{ fontFamily: 'var(--font-display)' }}>{s.solution}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="section-padding" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="container-max">
          <SectionHeader
            badge="The Ecosystem"
            title="One Integrated"
            titleHighlight="Platform"
            description="TIFO connects customers, restaurants, and technology into a single, intelligent ecosystem."
          />
          <FadeIn>
            <div className="glass rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                {[
                  { icon: <Users size={32} />, title: 'Customers', items: ['Personalized recommendations', 'Smart subscriptions', 'Fresh, timely meals', 'Budget-friendly plans'] },
                  { icon: <Zap size={32} />, title: 'TIFO AI Engine', items: ['Preference learning', 'Demand forecasting', 'Menu optimization', 'Smart matching'], highlight: true },
                  { icon: <Heart size={32} />, title: 'Restaurant Partners', items: ['Steady order flow', 'Demand insights', 'Menu analytics', 'Revenue growth'] },
                ].map((col, i) => (
                  <div key={col.title} className={`${col.highlight ? 'relative' : ''}`}>
                    {col.highlight && (
                      <div className="absolute inset-0 rounded-2xl opacity-10" style={{ background: 'linear-gradient(135deg, #C1440E, #8B3000)' }}></div>
                    )}
                    <div className={`relative z-10 p-6 ${col.highlight ? 'rounded-2xl' : ''}`} style={col.highlight ? { background: 'rgba(193,68,14,0.08)', border: '1px solid rgba(193,68,14,0.2)' } : {}}>
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 ${col.highlight ? 'text-orange-400' : 'text-gray-400'}`} style={{ background: col.highlight ? 'rgba(193,68,14,0.15)' : 'rgba(255,255,255,0.06)' }}>
                        {col.icon}
                      </div>
                      <h3 className={`font-bold text-lg mb-4 ${col.highlight ? 'gradient-text' : 'text-white'}`} style={{ fontFamily: 'var(--font-display)' }}>{col.title}</h3>
                      <ul className="space-y-2">
                        {col.items.map((item) => (
                          <li key={item} className="text-sm text-gray-400 flex items-center gap-2 justify-center">
                            <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#C1440E' }}></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-max text-center">
          <FadeIn>
            <h2 className="heading-md text-white mb-5">Explore the Full Platform</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/product" className="tifo-btn-primary">See the Product <ArrowRight size={16} /></Link>
              <Link to="/ai-ecosystem" className="tifo-btn-secondary">AI Ecosystem</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
