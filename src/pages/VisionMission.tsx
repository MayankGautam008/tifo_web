import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Eye, Target, Compass, Globe2, Zap, Heart } from 'lucide-react'
import { PageHero, SectionHeader, FadeIn } from '../components/ui'

export default function VisionMissionPage() {
  return (
    <main id="main-content">
      <PageHero
        badge="Vision & Mission"
        title="Our North Star &"
        titleHighlight="Daily Purpose"
        description="Every decision at TIFO is guided by a clear vision for the future and a concrete mission for today."
      />

      {/* Vision */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-orange-400" style={{ background: 'rgba(193,68,14,0.12)' }}>
                <Eye size={32} />
              </div>
              <span className="badge badge-orange mb-4 inline-flex">Our Vision</span>
              <h2 className="heading-lg text-white mb-6">
                A World Where Technology <span className="gradient-text">Understands Your Food</span>
              </h2>
              <p className="body-lg mb-5">
                TIFO envisions a future where every individual in India has access to a deeply personalized food experience — one that understands their preferences, respects their schedule, supports their health, and continuously improves over time.
              </p>
              <p className="body-lg mb-5">
                We believe food is not just fuel. It is culture, memory, comfort, and identity. Technology should enhance this experience — not commoditize it.
              </p>
              <p className="body-lg">
                Our long-term vision is to build India's most comprehensive AI-powered food intelligence platform — connecting millions of eaters with the perfect meal, every single time.
              </p>
            </FadeIn>
            <FadeIn delay={0.2} direction="right">
              <div className="glass-orange rounded-3xl p-10 text-center" style={{ border: '1px solid rgba(193,68,14,0.25)' }}>
                <blockquote className="text-2xl font-bold text-white leading-snug mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  "The right food,<br />
                  <span className="gradient-text">right person,</span><br />
                  right time."
                </blockquote>
                <p className="text-sm text-gray-500">TIFO's founding principle</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="container-max">
          <SectionHeader
            badge="Our Mission"
            title="What We Do"
            titleHighlight="Every Day"
            description="Our mission is concrete, measurable, and human-centered."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Zap size={24} />, title: 'Eliminate Meal Uncertainty', desc: 'Remove the daily stress of "what to eat" through intelligent, personalized recommendations that actually fit your life.' },
              { icon: <Heart size={24} />, title: 'Improve Nutritional Outcomes', desc: 'Help students and working professionals access healthier, fresher food options through smart scheduling and local partnerships.' },
              { icon: <Globe2 size={24} />, title: 'Empower Local Restaurants', desc: 'Provide local food businesses with the technology, insights, and steady demand they need to grow sustainably.' },
              { icon: <Target size={24} />, title: 'Make Quality Food Affordable', desc: 'Through subscription models and AI-optimized ordering, make quality personalized food accessible to budget-conscious students.' },
              { icon: <Compass size={24} />, title: 'Build Food Intelligence', desc: 'Create a continuously learning food ecosystem that gets smarter with every meal, every order, every interaction.' },
              { icon: <Eye size={24} />, title: 'Set a Global Standard', desc: 'Prove that an Indian food tech startup can build world-class AI infrastructure that serves as a global model for food personalization.' },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="glass rounded-2xl p-6 card-hover h-full">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-orange-400" style={{ background: 'rgba(193,68,14,0.1)' }}>
                    {item.icon}
                  </div>
                  <h3 className="text-white font-semibold mb-2" style={{ fontFamily: 'var(--font-display)' }}>{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* National Impact Vision */}
      <section className="section-padding">
        <div className="container-max">
          <FadeIn>
            <div className="glass rounded-3xl p-10 md:p-16 text-center" style={{ border: '1px solid rgba(193,68,14,0.15)' }}>
              <span className="badge badge-orange mb-6 inline-flex">National Scale</span>
              <h2 className="heading-lg text-white mb-6">
                Building for <span className="gradient-text">Bharat</span>
              </h2>
              <p className="body-lg mx-auto mb-8" style={{ maxWidth: '680px' }}>
                India has over 37 million higher education students and 560+ million working-age individuals. TIFO's vision is to serve a meaningful portion of this population with AI-powered food intelligence — creating economic opportunity for local restaurants and better food outcomes for millions of Indians.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/market-opportunity" className="tifo-btn-primary">View Market Opportunity <ArrowRight size={16} /></Link>
                <Link to="/roadmap" className="tifo-btn-secondary">See Our Roadmap</Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
