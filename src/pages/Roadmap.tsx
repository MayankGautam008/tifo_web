import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle2, Clock, Circle } from 'lucide-react'
import { PageHero, FadeIn } from '../components/ui'

const phases = [
  {
    phase: 'Phase 1',
    title: 'Foundation & Validation',
    status: 'completed',
    period: '2024 — Q1 2025',
    milestones: [
      'Problem identification and user research',
      'Initial product concept development',
      'Technology stack selection and setup',
      '10,000+ customer outreach and surveys',
      '300+ returning customer validation',
      'Active restaurant partnership establishment',
      'Core recommendation engine development',
    ],
  },
  {
    phase: 'Phase 2',
    title: 'Product Refinement & Market Entry',
    status: 'active',
    period: 'Q2 2025 — Q4 2025',
    milestones: [
      'Platform stability and performance improvements',
      'Subscription model optimization',
      'Expanded restaurant partner network',
      'Enhanced AI personalization models',
      'User onboarding flow optimization',
      'Data infrastructure scaling',
      'Mobile experience improvements',
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Scale & Geographic Expansion',
    status: 'planned',
    period: '2026',
    milestones: [
      'Multi-city expansion within India',
      'Advanced AI recommendation models',
      'Restaurant analytics dashboard launch',
      'Institutional (university/corporate) partnerships',
      'Loyalty and rewards system',
      'Advanced subscription personalization',
      'API partnerships with complementary platforms',
    ],
  },
  {
    phase: 'Phase 4',
    title: 'AI Deepening & Health Integration',
    status: 'future',
    period: '2027 and Beyond',
    milestones: [
      'TensorFlow/PyTorch AI model deployment',
      'Health-aware recommendation engine',
      'Natural language processing for menu understanding',
      'Predictive analytics for restaurant inventory',
      'Potential healthcare and nutrition partnerships',
      'International market exploration',
      'Data platform for food industry insights',
    ],
  },
]

function PhaseCard({ phase, index }: { phase: typeof phases[0]; index: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  const statusConfig = {
    completed: { color: '#10b981', icon: <CheckCircle2 size={14} />, label: 'Completed' },
    active: { color: '#C1440E', icon: <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse inline-block"></span>, label: 'In Progress' },
    planned: { color: '#818cf8', icon: <Clock size={14} />, label: 'Planned' },
    future: { color: '#6b7280', icon: <Circle size={14} />, label: 'Future' },
  }

  const sc = statusConfig[phase.status as keyof typeof statusConfig]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {/* Phase connector */}
      {index < phases.length - 1 && (
        <div
          className="hidden lg:block absolute top-0 right-0 w-px"
          style={{ height: '100%', background: 'linear-gradient(to bottom, rgba(193,68,14,0.2), transparent)', right: '-1px' }}
        />
      )}

      <div
        className="glass rounded-2xl p-7 card-hover h-full"
        style={phase.status === 'active' ? { border: '1px solid rgba(193,68,14,0.3)', background: 'rgba(193,68,14,0.04)' } : {}}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-2">
          <span className="text-xs font-mono" style={{ color: sc.color }}>{phase.phase}</span>
          <span
            className="badge text-xs flex items-center gap-1"
            style={{ background: `${sc.color}12`, color: sc.color, border: `1px solid ${sc.color}25` }}
          >
            {sc.icon}
            {sc.label}
          </span>
        </div>
        <h3 className="text-white font-bold text-lg mb-1" style={{ fontFamily: 'var(--font-display)' }}>{phase.title}</h3>
        <p className="text-xs text-gray-600 font-mono mb-5">{phase.period}</p>

        {/* Milestones */}
        <ul className="space-y-2">
          {phase.milestones.map((m) => (
            <li key={m} className="flex items-start gap-2 text-sm">
              <span
                className="flex-shrink-0 mt-1"
                style={{ color: phase.status === 'completed' ? '#10b981' : phase.status === 'active' ? '#C1440E' : '#4b5563' }}
              >
                {phase.status === 'completed' ? <CheckCircle2 size={13} /> : <span className="w-1.5 h-1.5 rounded-full block mt-0.5" style={{ background: sc.color }}></span>}
              </span>
              <span style={{ color: phase.status === 'completed' ? '#9ca3af' : phase.status === 'active' ? '#d1d5db' : '#6b7280' }}>
                {m}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function RoadmapPage() {
  return (
    <main id="main-content">
      <PageHero
        badge="Roadmap"
        title="Where We've Been."
        titleHighlight="Where We're Going."
        description="TIFO's roadmap is ambitious, evidence-based, and grounded in real validation. Each phase builds on the last — with clear milestones and measurable outcomes."
      />

      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {phases.map((phase, i) => (
              <PhaseCard key={phase.phase} phase={phase} index={i} />
            ))}
          </div>

          <FadeIn className="mt-12">
            <div className="glass rounded-xl p-6 text-center" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
              <p className="text-sm text-gray-500 leading-relaxed">
                <span className="text-gray-400 font-medium">Roadmap Disclosure:</span> Items in Phase 3 and Phase 4 represent TIFO's planned strategic direction. Timelines may evolve based on market conditions, funding, and technical progress. Only Phase 1 milestones are confirmed completed activities.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
