import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Shield, Award, Cpu, Compass } from 'lucide-react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { PageHero, SectionHeader, FadeIn, GlassCard } from '../components/ui'

import ceoImage from '../assets/CEO (2).jpeg'
import ctoImage from '../assets/CTO.jpeg'
import cooImage from '../assets/COO.jpeg'

const leaders = [
  {
    name: 'Shashank Pandey',
    role: 'Founder & CEO',
    tagline: 'Vision & Strategic Growth',
    image: ceoImage,
    initials: 'SP',
    bio: "Shashank founded TIFO after identifying the critical gap in personalized food technology for Indian students. With a focus on business strategy, ecosystem partnerships, and long-term vision, he drives TIFO's growth and organizational direction.",
    areas: ['Business Strategy', 'Partnerships', 'Vision & Mission', 'Growth Strategy', 'Investor Relations'],
    gradient: 'linear-gradient(135deg, #C1440E, #E05A1A)',
    badge: 'FOUNDER & CEO',
  },
  {
    name: 'Mayank Gautam',
    role: 'Co-Founder & CTO',
    tagline: 'AI Architecture & Technology',
    image: ctoImage,
    initials: 'MG',
    bio: "Mayank leads TIFO's entire technology vision — from the core recommendation algorithms to the future AI food stack. His research-first engineering mindset ensures TIFO's platform is built to scale, adapt, and learn seamlessly.",
    areas: ['Artificial Intelligence', 'System Architecture', 'Core Engineering', 'Product Innovation', 'Tech Research'],
    gradient: 'linear-gradient(135deg, #E05A1A, #FF6B35)',
    badge: 'CO-FOUNDER & CTO',
  },
  {
    name: 'Akshara Bajpai',
    role: 'Chief Operating Officer',
    tagline: 'Operations & Customer Experience',
    image: cooImage,
    initials: 'AB',
    bio: "Akshara translates TIFO's vision into daily operational excellence. She leads restaurant partner onboarding, customer experience design, and ensures TIFO's execution matches its technological ambitions.",
    areas: ['Operational Execution', 'Restaurant Network', 'User Experience', 'Process Design', 'Campus Operations'],
    gradient: 'linear-gradient(135deg, #C1440E, #8B3000)',
    badge: 'COO & CO-FOUNDER',
  },
]

function LeaderCard({ leader, index }: { leader: (typeof leaders)[0]; index: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.15, ease: 'easeOut' }}
      className="glass rounded-3xl overflow-hidden card-hover border border-orange-100/80 shadow-xl flex flex-col justify-between group bg-white/90"
    >
      <div>
        {/* Profile Image & Header */}
        <div className="p-8 text-center relative overflow-hidden bg-gradient-to-b from-orange-50/60 to-transparent">
          {/* Subtle Ambient Radial Glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 opacity-20 pointer-events-none rounded-full blur-2xl"
            style={{ background: leader.gradient }}
          />

          {/* Badge */}
          <div className="flex justify-center mb-6 relative z-10">
            <span
              className="px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-white shadow-md flex items-center gap-1.5"
              style={{ background: leader.gradient, fontFamily: 'var(--font-display)' }}
            >
              <Sparkles size={12} />
              {leader.badge}
            </span>
          </div>

          {/* Profile Picture Frame */}
          <div className="relative z-10 mx-auto w-36 h-36 mb-6">
            <div
              className="w-full h-full rounded-2xl p-1 shadow-2xl transition-transform duration-500 group-hover:scale-105"
              style={{ background: leader.gradient }}
            >
              <div className="w-full h-full rounded-xl overflow-hidden bg-gray-100 relative">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover object-center transition-all duration-500 group-hover:contrast-[1.05]"
                  onError={(e) => {
                    // Fallback to initials if image fails
                    const target = e.currentTarget
                    target.style.display = 'none'
                    const parent = target.parentElement
                    if (parent) {
                      parent.innerHTML = `<div class="w-full h-full flex items-center justify-center font-black text-2xl text-white" style="background:${leader.gradient}">${leader.initials}</div>`
                    }
                  }}
                />
              </div>
            </div>

            {/* Glowing ring accent */}
            <div
              className="absolute -inset-1 rounded-2xl opacity-40 blur-md pointer-events-none group-hover:opacity-70 transition-opacity"
              style={{ background: leader.gradient }}
            />
          </div>

          {/* Name & Role */}
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-1 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
              {leader.name}
            </h2>
            <p className="text-sm font-semibold text-tifo-primary mb-1">{leader.role}</p>
            <p className="text-xs text-gray-500 font-mono">{leader.tagline}</p>
          </div>
        </div>

        {/* Bio */}
        <div className="px-8 py-6 border-t border-orange-100/60">
          <p className="text-sm text-gray-600 leading-relaxed mb-6">{leader.bio}</p>

          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider font-mono font-bold mb-3 flex items-center gap-1.5">
              <Compass size={13} className="text-tifo-primary" /> Key Leadership Domains
            </p>
            <div className="flex flex-wrap gap-2">
              {leader.areas.map((area) => (
                <span
                  key={area}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-orange-50 text-gray-800 border border-orange-100/80"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-8 py-4 bg-orange-50/40 border-t border-orange-100/60 flex items-center justify-between text-xs text-gray-500">
        <span className="font-mono text-[11px] text-gray-500">TIFO Leadership Team</span>
        <span className="text-tifo-primary font-bold flex items-center gap-1">
          Founding Member <Sparkles size={12} />
        </span>
      </div>
    </motion.div>
  )
}

export default function LeadershipPage() {
  return (
    <main id="main-content">
      <PageHero
        badge="TIFO LEADERSHIP TEAM"
        title="The Visionaries Building"
        titleHighlight="India's Food Future"
        description="TIFO's founding team combines business strategy, deep technology expertise, and operational excellence — driven by a shared mission to transform how India eats through AI."
      />

      {/* Team Cards Section */}
      <section className="section-padding grid-bg relative">
        <div className="container-max">
          <SectionHeader
            badge="FOUNDING MEMBERS"
            title="Meet the"
            titleHighlight="Leadership Team"
            description="Leading TIFO's mission to make food smarter, healthier, and more accessible for every student and professional in India."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {leaders.map((leader, i) => (
              <LeaderCard key={leader.name} leader={leader} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="section-padding bg-white border-t border-orange-100">
        <div className="container-max">
          <SectionHeader
            badge="OUR PRINCIPLES"
            title="Leadership"
            titleHighlight="Values"
            description="The core tenets that guide our decisions, products, and culture."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Shield className="w-6 h-6 text-tifo-primary" />,
                title: 'Radical Honesty',
                desc: "We don't embellish metrics or overstate capabilities. Real credibility is built through transparency and trust.",
              },
              {
                icon: <Cpu className="w-6 h-6 text-tifo-primary" />,
                title: 'Research First',
                desc: 'Every feature and AI algorithm is grounded in deep user research across 10,000+ students and ground insights.',
              },
              {
                icon: <Award className="w-6 h-6 text-tifo-primary" />,
                title: 'Long-Term Thinking',
                desc: "We're constructing an AI ecosystem for decades to come, refusing short-term hacks that compromise quality.",
              },
              {
                icon: <Sparkles className="w-6 h-6 text-tifo-primary" />,
                title: 'Human-Centric AI',
                desc: 'Technology exists to serve people and nourish lives — enhancing convenience without diluting the joy of food.',
              },
            ].map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <GlassCard className="p-6 h-full flex flex-col justify-between border border-orange-100">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-4">
                      {v.icon}
                    </div>
                    <h3 className="font-bold text-base mb-2 text-gray-900" style={{ fontFamily: 'var(--font-display)' }}>
                      {v.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{v.desc}</p>
                  </div>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Join Callout */}
      <section className="section-padding grid-bg text-center">
        <div className="container-max max-w-3xl">
          <FadeIn>
            <span className="badge badge-orange mb-4">WE ARE HIRING</span>
            <h2 className="heading-md text-gray-900 mb-4">Join the TIFO Movement</h2>
            <p className="body-lg mb-8 text-gray-600">
              TIFO is expanding rapidly. If you share our conviction that technology can redefine food experiences across India, we'd love to collaborate with you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/careers" className="tifo-btn-primary inline-flex items-center gap-2">
                Explore Open Careers <ArrowRight size={16} />
              </Link>
              <Link to="/student-ambassador" className="tifo-btn-secondary">
                Become a Student Ambassador
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
