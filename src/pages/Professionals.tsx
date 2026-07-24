import React from 'react'
import { ArrowRight, Briefcase, Clock, Zap, Brain, TrendingUp, Shield, ExternalLink } from 'lucide-react'
import { PageHero, SectionHeader, FadeIn } from '../components/ui'
import { config } from '../config/app'

export default function ProfessionalsPage() {
  const benefits = [
    { icon: <Clock size={22} />, title: 'Time-Optimized Meals', desc: 'AI recommendations calibrated to your work schedule, meetings, and energy levels throughout the day.' },
    { icon: <Brain size={22} />, title: 'Personalized for You', desc: 'A food profile that evolves with your tastes, dietary preferences, and nutrition goals — no manual updates needed.' },
    { icon: <Zap size={22} />, title: 'Zero Decision Fatigue', desc: 'Stop wasting mental energy on "what to eat." TIFO handles it — suggesting the right meal at the right moment.' },
    { icon: <TrendingUp size={22} />, title: 'Productivity-Aligned Nutrition', desc: 'Meals timed and chosen to support sustained energy and focus — not the post-lunch slump.' },
    { icon: <Shield size={22} />, title: 'Quality Assurance', desc: 'Every restaurant partner is quality-verified. Consistent, reliable food quality — not a gamble every day.' },
    { icon: <Briefcase size={22} />, title: 'Office Proximity Awareness', desc: 'TIFO knows where you work and surfaces the best options from nearby trusted restaurants.' },
  ]

  return (
    <main id="main-content">
      <PageHero
        badge="For Working Professionals"
        title="Eat Better."
        titleHighlight="Work Smarter."
        description="You have enough decisions to make at work. Let TIFO handle the most important one — what you eat — with AI personalization designed for busy professionals."
        cta={
          <a href={config.PLATFORM_URL} target="_blank" rel="noopener noreferrer" className="tifo-btn-primary">
            Get Started <ExternalLink size={16} />
          </a>
        }
      />

      {/* Professional Insights */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="badge badge-orange mb-5 inline-flex">The Reality</span>
              <h2 className="heading-lg text-white mb-6">The <span className="gradient-text">Professional Meal Problem</span></h2>
              <p className="body-lg mb-5">
                Between back-to-back meetings, deadlines, and commutes, food becomes an afterthought. You grab whatever's available — not what's good for you. Canteens serve uninspiring fixed menus. Ordering from apps means scrolling through hundreds of options with no personalization.
              </p>
              <p className="body-lg mb-8">
                TIFO changes this. A single, intelligent platform that knows your tastes, your schedule, and your nutritional preferences — serving the right meal at the right moment, every day.
              </p>
            </FadeIn>

            <FadeIn delay={0.2} direction="right">
              <div className="space-y-4">
                {[
                  { title: 'Decision Fatigue is Real', desc: 'Research in psychology shows that decision fatigue reduces the quality of decisions made later in the day. Your lunch choice shouldn\'t deplete that resource.' },
                  { title: 'Nutrition Impacts Productivity', desc: 'The WHO recognizes that adequate nutrition directly affects cognitive function, focus, and workplace productivity — making food a professional investment.' },
                  { title: '560M+ Working-Age Indians', desc: 'India\'s massive working population is largely underserved by personalized food technology — a gap TIFO was built to close.', src: 'World Bank, 2023', href: 'https://data.worldbank.org' },
                ].map((item, i) => (
                  <div key={item.title} className="glass rounded-xl p-5 card-hover">
                    <h4 className="text-white font-semibold mb-1 text-sm" style={{ fontFamily: 'var(--font-display)' }}>{item.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                    {item.src && (
                      <p className="text-xs text-gray-700 mt-1">
                        Source: <a href={item.href} target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-500">{item.src}</a>
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="container-max">
          <SectionHeader badge="Professional Benefits" title="TIFO for" titleHighlight="Busy Professionals" />
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
    </main>
  )
}
