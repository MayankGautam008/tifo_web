import React from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink, Smartphone, Star, Bell, Calendar, ArrowRight, Zap } from 'lucide-react'
import { PageHero, SectionHeader, FadeIn } from '../components/ui'
import { config } from '../config/app'

const features = [
  { icon: <Star size={22} />, title: 'Personalized Feed', desc: 'A daily meal feed curated entirely around your preferences, schedule, and taste profile. No two users see the same feed.' },
  { icon: <Calendar size={22} />, title: 'Smart Subscriptions', desc: 'Choose from AI-curated meal subscription plans. Set your preferences once, and TIFO handles the rest — adapting as your tastes evolve.' },
  { icon: <Bell size={22} />, title: 'Meal Reminders', desc: 'Context-aware notifications that remind you about your meal at the right moment — not 30 minutes before, not after you\'ve already eaten.' },
  { icon: <Zap size={22} />, title: 'Instant Feedback Loop', desc: 'Rate meals, flag issues, share what you loved. Every piece of feedback makes your next recommendation more accurate.' },
  { icon: <Smartphone size={22} />, title: 'Mobile-First Experience', desc: 'Built for the smartphone-first Indian user. Fast, responsive, and designed for use between classes or during a quick work break.' },
  { icon: <ArrowRight size={22} />, title: 'Restaurant Discovery', desc: 'Discover trusted local restaurants and home kitchens near your campus or office, curated and quality-verified by TIFO.' },
]

export default function ProductPage() {
  return (
    <main id="main-content">
      <PageHero
        badge="Product"
        title="TIFO Platform —"
        titleHighlight="Your Intelligent Meal Companion"
        description="The TIFO platform is where AI meets your daily food journey. It's currently in active development and validation, with continuous improvements based on real customer feedback."
        cta={
          <a href={config.PLATFORM_URL} target="_blank" rel="noopener noreferrer" className="tifo-btn-primary">
            Launch Platform <ExternalLink size={16} />
          </a>
        }
      />

      {/* Status Banner */}
      <section className="section-padding pb-0">
        <div className="container-max">
          <FadeIn>
            <div className="glass rounded-xl p-5 flex gap-4 items-center mb-4" style={{ border: '1px solid rgba(193,68,14,0.2)', background: 'rgba(193,68,14,0.05)' }}>
              <span className="badge badge-orange flex-shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span>
                Active Development
              </span>
              <p className="text-sm text-gray-300">
                TIFO's platform is in active development and validation. We are continuously improving based on feedback from 300+ returning customers. Features listed represent current and planned capabilities.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeader
            badge="Platform Features"
            title="What the"
            titleHighlight="TIFO Platform Does"
            description="A comprehensive set of intelligent features that work together to create a seamless, personalized food experience."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.08}>
                <div className="glass rounded-2xl p-6 card-hover h-full">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-orange-400" style={{ background: 'rgba(193,68,14,0.1)' }}>
                    {f.icon}
                  </div>
                  <h3 className="text-white font-semibold mb-2" style={{ fontFamily: 'var(--font-display)' }}>{f.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* User Flows */}
      <section className="section-padding" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="container-max">
          <SectionHeader badge="User Experience" title="Designed for" titleHighlight="Every User" />
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                audience: 'For Students',
                desc: 'Budget-friendly meal subscriptions, campus-aware delivery, schedule-based meal timing, and AI recommendations tuned for student dietary patterns.',
                link: '/students',
              },
              {
                audience: 'For Working Professionals',
                desc: 'Time-optimized meal suggestions, office proximity awareness, work-schedule based meal timing, and premium plan options for professionals.',
                link: '/professionals',
              },
            ].map((u, i) => (
              <FadeIn key={u.audience} delay={i * 0.15}>
                <div className="glass rounded-2xl p-8 card-hover h-full">
                  <h3 className="heading-sm text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>{u.audience}</h3>
                  <p className="body-md text-sm leading-relaxed mb-6">{u.desc}</p>
                  <Link to={u.link} className="tifo-btn-ghost">
                    Learn More <ArrowRight size={14} />
                  </Link>
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
            <h2 className="heading-md text-white mb-5">Ready to Experience TIFO?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={config.PLATFORM_URL} target="_blank" rel="noopener noreferrer" className="tifo-btn-primary">
                Launch Platform <ExternalLink size={16} />
              </a>
              <Link to="/ai-ecosystem" className="tifo-btn-secondary">
                Explore AI Engine <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
