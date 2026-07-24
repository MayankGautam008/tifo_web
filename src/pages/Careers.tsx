import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Code, Brain, BarChart3, Megaphone, Users } from 'lucide-react'
import { PageHero, SectionHeader, FadeIn } from '../components/ui'

const openRoles = [
  { title: 'Full Stack Engineer', dept: 'Engineering', type: 'Full Time', location: 'India (Remote/Hybrid)', desc: 'Build and scale TIFO\'s core platform. Work with React, TypeScript, Python, FastAPI, and contribute to AI integration.', icon: <Code size={22} /> },
  { title: 'AI/ML Engineer', dept: 'Engineering', type: 'Full Time', location: 'India (Remote/Hybrid)', desc: 'Design and implement recommendation systems, demand forecasting models, and personalization algorithms.', icon: <Brain size={22} /> },
  { title: 'Data Analyst', dept: 'Analytics', type: 'Full Time', location: 'India (Remote/Hybrid)', desc: 'Extract insights from customer behavior, menu performance, and restaurant data to drive product and business decisions.', icon: <BarChart3 size={22} /> },
  { title: 'Growth & Marketing Lead', dept: 'Growth', type: 'Full Time', location: 'India', desc: 'Drive TIFO\'s customer acquisition, retention, and brand building strategy across digital and campus channels.', icon: <Megaphone size={22} /> },
  { title: 'Restaurant Partnership Manager', dept: 'Operations', type: 'Full Time', location: 'India', desc: 'Expand and manage TIFO\'s restaurant partner network. Build relationships that create sustainable value for both parties.', icon: <Users size={22} /> },
]

export default function CareersPage() {
  return (
    <main id="main-content">
      <PageHero
        badge="Careers"
        title="Build the Future"
        titleHighlight="of Food in India"
        description="Join TIFO at the ground floor of India's most ambitious food technology company. We're looking for builders, researchers, and visionaries."
      />

      {/* Culture */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="badge badge-orange mb-5 inline-flex">Why TIFO</span>
              <h2 className="heading-lg text-white mb-6">Work on <span className="gradient-text">Meaningful Problems</span></h2>
              <p className="body-lg mb-6">
                At TIFO, you're not building another CRUD app or optimizing ad clicks. You're solving real nutritional, behavioral, and economic problems that affect millions of Indians every single day.
              </p>
              <p className="body-lg mb-8">
                We move fast, we think long-term, and we're honest about what we know and don't know. If that resonates with you, we want to hear from you.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Ground-floor opportunity',
                  'Real user impact',
                  'AI-first environment',
                  'Ownership culture',
                  'Honest team dynamics',
                  'Research-driven work',
                ].map((v) => (
                  <div key={v} className="flex items-center gap-2 text-sm text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#C1440E' }}></span>
                    {v}
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="right">
              <div className="glass rounded-2xl p-8" style={{ border: '1px solid rgba(193,68,14,0.15)' }}>
                <h3 className="text-white font-bold text-xl mb-6" style={{ fontFamily: 'var(--font-display)' }}>What We Look For</h3>
                {[
                  { title: 'Problem-First Mindset', desc: 'You start by deeply understanding the problem, not by reaching for a technology solution.' },
                  { title: 'Intellectual Honesty', desc: 'You\'re comfortable saying "I don\'t know" and uncomfortable with inflated claims or metrics.' },
                  { title: 'Long-Term Orientation', desc: 'You\'re excited about building something that matters — not just shipping features.' },
                  { title: 'Deep Craft', desc: 'Whether you\'re an engineer, designer, or analyst — you care deeply about the quality of your work.' },
                ].map((item) => (
                  <div key={item.title} className="mb-4 last:mb-0 flex gap-3">
                    <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0" style={{ background: '#C1440E' }}></span>
                    <div>
                      <h4 className="text-white text-sm font-semibold mb-1" style={{ fontFamily: 'var(--font-display)' }}>{item.title}</h4>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="section-padding" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="container-max">
          <SectionHeader badge="Open Positions" title="Join" titleHighlight="Our Team" description="We're actively looking for talented individuals across all disciplines." />
          <div className="space-y-4">
            {openRoles.map((role, i) => (
              <FadeIn key={role.title} delay={i * 0.08}>
                <div className="glass rounded-2xl p-6 card-hover">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-orange-400 flex-shrink-0" style={{ background: 'rgba(193,68,14,0.1)' }}>
                        {role.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-bold mb-1" style={{ fontFamily: 'var(--font-display)' }}>{role.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-2">
                          <span className="badge badge-orange">{role.dept}</span>
                          <span className="tag">{role.type}</span>
                          <span className="tag">{role.location}</span>
                        </div>
                        <p className="text-sm text-gray-500">{role.desc}</p>
                      </div>
                    </div>
                    <Link to="/contact" className="tifo-btn-ghost flex-shrink-0">
                      Apply <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-sm text-gray-600 mb-4">Don't see your role? We're always open to exceptional talent.</p>
            <Link to="/contact" className="tifo-btn-secondary">
              Send Open Application <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
