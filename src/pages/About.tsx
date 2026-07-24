import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Clock, Users, Brain, Heart, Globe, Lightbulb } from 'lucide-react'
import { PageHero, SectionHeader, GlassCard, FadeIn } from '../components/ui'

export default function AboutPage() {
  return (
    <main id="main-content">
      <PageHero
        badge="About TIFO"
        title="We're Not a"
        titleHighlight="Food Delivery App"
        description="TIFO is an AI-powered food technology company on a mission to build India's most intelligent personalized food ecosystem — one that understands what you eat, when you eat, and why."
      />

      {/* Origin Story */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="badge badge-orange mb-5 inline-flex">Our Origin</span>
              <h2 className="heading-lg text-white mb-6">
                Born from a <span className="gradient-text">University Campus</span>
              </h2>
              <p className="body-lg mb-5">
                TIFO was founded after witnessing a problem that millions of students across India face every single day. Students carried lunch at around 6 AM and often ate it after 7–8 hours because of continuous classes. By lunchtime, the food was stale, unappetizing, and potentially unsafe.
              </p>
              <p className="body-lg mb-5">
                Existing food delivery platforms couldn't help — limited availability on campuses, zero personalization, unpredictable pricing, and no understanding of student schedules or dietary preferences.
              </p>
              <p className="body-lg mb-8">
                This wasn't just a convenience problem. It was a nutrition, health, and quality-of-life problem affecting tens of millions of students across India. TIFO was created to solve it — not with another delivery app, but with intelligent technology.
              </p>
              <Link to="/problem" className="tifo-btn-primary">
                Read the Problem Statement <ArrowRight size={16} />
              </Link>
            </FadeIn>

            <FadeIn delay={0.2} direction="right">
              <div className="space-y-4">
                {[
                  { icon: <Clock size={22} className="text-orange-400" />, title: 'The 7-Hour Problem', desc: 'Packed at 6 AM, eaten 7+ hours later. Food safety, freshness, and nutrition compromised daily.' },
                  { icon: <Users size={22} className="text-orange-400" />, title: '10,000+ Students Researched', desc: 'Deep customer outreach to understand real pain points before building anything.', note: 'Internal Research' },
                  { icon: <Brain size={22} className="text-orange-400" />, title: 'AI as the Answer', desc: 'Not logistics, not speed — intelligence. Understanding the human behind the meal.' },
                  { icon: <Heart size={22} className="text-orange-400" />, title: 'Local Restaurants at the Core', desc: 'Empowering local food businesses with technology, not replacing them.' },
                ].map((item, i) => (
                  <FadeIn key={item.title} delay={i * 0.1}>
                    <div className="glass rounded-xl p-5 flex gap-4 card-hover">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'rgba(193,68,14,0.1)' }}>
                        {item.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-white font-semibold text-sm" style={{ fontFamily: 'var(--font-display)' }}>{item.title}</h3>
                          {item.note && <span className="text-xs text-gray-600 font-mono">[{item.note}]</span>}
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding" style={{ background: 'rgba(193,68,14,0.03)', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="container-max">
          <SectionHeader
            badge="Core Philosophy"
            title="Technology Should"
            titleHighlight="Understand People"
            description="Our guiding belief shapes every product decision, every AI model, every partnership."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Globe size={28} />, title: 'What you eat', desc: 'Detailed food preferences, dietary needs, cuisine types, and ingredient sensitivities — all learned over time.' },
              { icon: <Clock size={28} />, title: 'When you eat', desc: 'Meal timing, schedule-based recommendations, and context-aware suggestions tied to your daily routine.' },
              { icon: <Lightbulb size={28} />, title: 'Why you eat', desc: 'Nutritional goals, emotional context, social occasions — deeper layers of personalization beyond simple preferences.' },
            ].map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.12}>
                <div className="glass rounded-2xl p-7 card-hover text-center h-full">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5 text-orange-400" style={{ background: 'rgba(193,68,14,0.12)' }}>
                    {p.icon}
                  </div>
                  <h3 className="heading-sm text-white mb-3">{p.title}</h3>
                  <p className="body-md text-sm leading-relaxed">{p.desc}</p>
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
            <h2 className="heading-md text-white mb-5">Explore the Full TIFO Vision</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/vision-mission" className="tifo-btn-primary">Vision & Mission <ArrowRight size={16} /></Link>
              <Link to="/leadership" className="tifo-btn-secondary">Meet the Team</Link>
              <Link to="/why-tifo" className="tifo-btn-ghost">Why TIFO?</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
