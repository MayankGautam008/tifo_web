import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { PageHero, SectionHeader, FadeIn } from '../components/ui'

const leaders = [
  {
    name: 'Shashank Pandey',
    role: 'Founder & CEO',
    initials: 'SP',
    bio: 'Shashank founded TIFO after identifying the gap in personalized food technology for Indian students. With a focus on business strategy, partnerships, and long-term vision, he drives TIFO\'s growth and organizational direction.',
    areas: ['Business Strategy', 'Partnerships', 'Vision', 'Growth', 'Investor Relations'],
    gradient: 'linear-gradient(135deg, #C1440E, #8B3000)',
    linkedinPlaceholder: true,
  },
  {
    name: 'Mayank Gautam',
    role: 'Co-Founder & CTO',
    initials: 'MG',
    bio: 'Mayank leads TIFO\'s entire technology vision — from the core recommendation architecture to the future AI stack. His research-first approach ensures that TIFO\'s technology is built to scale and to learn.',
    areas: ['Technology', 'Artificial Intelligence', 'Research', 'System Architecture', 'Innovation'],
    gradient: 'linear-gradient(135deg, #1e40af, #1e3a8a)',
    linkedinPlaceholder: true,
  },
  {
    name: 'Akshara Bajpai',
    role: 'Chief Operating Officer',
    initials: 'AB',
    bio: 'Akshara translates TIFO\'s vision into daily operational excellence. She leads restaurant partnerships, customer experience design, and ensures that TIFO\'s operational execution matches its technological ambition.',
    areas: ['Operations', 'Execution', 'Restaurant Partnerships', 'Customer Experience', 'Process Design'],
    gradient: 'linear-gradient(135deg, #065f46, #064e3b)',
    linkedinPlaceholder: true,
  },
]

function LeaderCard({ leader, index }: { leader: typeof leaders[0]; index: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="glass rounded-3xl overflow-hidden card-hover"
    >
      {/* Profile Header */}
      <div className="p-8 text-center relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div
          className="absolute inset-0 opacity-5"
          style={{ background: leader.gradient }}
        ></div>
        <div className="relative z-10">
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center text-2xl font-black text-white mx-auto mb-4"
            style={{ background: leader.gradient }}
          >
            {leader.initials}
          </div>
          <h2 className="text-xl font-bold text-white mb-1" style={{ fontFamily: 'var(--font-display)' }}>{leader.name}</h2>
          <p className="text-sm font-semibold mb-3" style={{ color: '#E05A1A' }}>{leader.role}</p>
          {leader.linkedinPlaceholder && (
            <div className="flex justify-center">
              <span className="flex items-center gap-1 text-xs text-gray-600 border border-white/10 rounded-lg px-3 py-1.5">
                LinkedIn (Coming Soon)
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Bio */}
      <div className="p-8">
        <p className="text-sm text-gray-400 leading-relaxed mb-5">{leader.bio}</p>
        <div>
          <p className="text-xs text-gray-600 uppercase tracking-wider font-mono mb-3">Areas of Focus</p>
          <div className="flex flex-wrap gap-2">
            {leader.areas.map((area) => (
              <span key={area} className="tag text-xs">{area}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function LeadershipPage() {
  return (
    <main id="main-content">
      <PageHero
        badge="Leadership"
        title="The Team Building"
        titleHighlight="India's Food Future"
        description="TIFO's founding team combines business strategy, technology depth, and operational excellence — with a shared conviction that AI can transform how India eats."
      />

      {/* Team */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-3 gap-8">
            {leaders.map((leader, i) => (
              <LeaderCard key={leader.name} leader={leader} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="section-padding" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="container-max">
          <SectionHeader badge="Team Values" title="What We" titleHighlight="Believe In" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'Radical Honesty', desc: 'We don\'t embellish metrics, invent testimonials, or overstate capabilities. Credibility is earned through truth.' },
              { title: 'Research First', desc: 'Every product decision is rooted in real customer research, not assumptions or trend-chasing.' },
              { title: 'Long-Term Thinking', desc: 'We\'re building an ecosystem, not a feature. Short-term compromises that damage long-term trust are never worth it.' },
              { title: 'Technology as Service', desc: 'Our AI exists to serve people — not to replace human judgment or remove the joy from food.' },
            ].map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <div className="glass rounded-xl p-5 card-hover h-full">
                  <h3 className="text-white font-semibold mb-2 text-sm" style={{ fontFamily: 'var(--font-display)' }}>{v.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Join */}
      <section className="section-padding">
        <div className="container-max text-center">
          <FadeIn>
            <h2 className="heading-md text-white mb-5">Join the Team</h2>
            <p className="body-lg mb-8 mx-auto" style={{ maxWidth: '500px' }}>
              TIFO is growing. If you share our conviction that technology can transform food in India, we want to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/careers" className="tifo-btn-primary">Explore Careers <ArrowRight size={16} /></Link>
              <Link to="/contact" className="tifo-btn-secondary">Get in Touch</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
