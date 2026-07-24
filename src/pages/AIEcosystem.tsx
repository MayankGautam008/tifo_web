import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Brain, Database, Network, Zap, BarChart3, Star, TrendingUp, Target, Leaf, ChevronRight } from 'lucide-react'
import { PageHero, SectionHeader, FadeIn } from '../components/ui'

const aiModules = [
  {
    id: 'recommendation',
    icon: <Brain size={32} />,
    title: 'Recommendation Engine',
    status: 'Active',
    desc: 'The core AI that drives personalized meal suggestions. Analyzes individual taste profiles, behavioral history, and contextual signals to surface the most relevant meal options at any given moment.',
    details: [
      'Collaborative filtering and content-based algorithms',
      'Real-time preference weighting',
      'Contextual signals: time, location, weather',
      'Freshness-aware ranking',
    ],
  },
  {
    id: 'preference',
    icon: <Database size={32} />,
    title: 'Customer Preference Memory',
    status: 'Active',
    desc: 'A persistent, evolving food profile for every user. Captures explicit preferences, inferred patterns, and subtle behavioral signals to build the most accurate taste model possible.',
    details: [
      'Cuisine preference mapping',
      'Dietary restriction tracking',
      'Portion and price sensitivity modeling',
      'Temporal preference variation (lunch vs dinner)',
    ],
  },
  {
    id: 'intelligence',
    icon: <Zap size={32} />,
    title: 'Meal Intelligence',
    status: 'Active',
    desc: 'Goes beyond "what you like" to "what you need right now." Considers meal timing, nutritional balance across the day, and schedule-based context to make smarter recommendations.',
    details: [
      'Schedule-aware meal timing',
      'Cross-meal nutritional awareness',
      'Energy level and activity context',
      'Repeat avoidance logic',
    ],
  },
  {
    id: 'forecasting',
    icon: <TrendingUp size={32} />,
    title: 'Demand Forecasting',
    status: 'Active',
    desc: 'Predicts meal demand patterns at the restaurant level — enabling proactive preparation, reducing waste, and ensuring availability when customers need it most.',
    details: [
      'Time-series demand prediction',
      'Event and calendar-aware forecasting',
      'Peak load identification',
      'Restaurant-specific demand curves',
    ],
  },
  {
    id: 'analytics',
    icon: <BarChart3 size={32} />,
    title: 'Restaurant Analytics',
    status: 'Active',
    desc: 'A comprehensive analytics dashboard for restaurant partners — showing menu performance, customer preference signals, popular combinations, and actionable improvement insights.',
    details: [
      'Menu item performance ranking',
      'Customer preference heat maps',
      'Order pattern analysis',
      'Revenue optimization suggestions',
    ],
  },
  {
    id: 'subscription',
    icon: <Star size={32} />,
    title: 'Smart Subscription Engine',
    status: 'Active',
    desc: 'AI-curated subscription meal plans that automatically adapt to your preferences, schedule changes, and seasonal variations — delivering consistent value without manual effort.',
    details: [
      'Dynamic plan personalization',
      'Preference drift detection',
      'Budget-aware meal selection',
      'Subscription renewal optimization',
    ],
  },
  {
    id: 'ranking',
    icon: <Network size={32} />,
    title: 'Dynamic Menu Ranking',
    status: 'Active',
    desc: 'Real-time menu ranking that weighs freshness, availability, restaurant performance, customer ratings, and individual preference signals to show you the best options first.',
    details: [
      'Multi-factor ranking algorithm',
      'Real-time freshness signals',
      'Popularity and recency weighting',
      'Individual preference amplification',
    ],
  },
  {
    id: 'context',
    icon: <Target size={32} />,
    title: 'Context-Aware Recommendations',
    status: 'Active',
    desc: 'Moves beyond static profiles to understand the current situation. What you want for lunch between lectures is different from what you want on a Sunday evening.',
    details: [
      'Time-of-day context modeling',
      'Day-of-week behavioral patterns',
      'Occasion detection (exam week, weekend, etc.)',
      'Group vs individual dining context',
    ],
  },
  {
    id: 'health',
    icon: <Leaf size={32} />,
    title: 'Health-Aware AI',
    status: 'Roadmap',
    desc: 'Future capability: Integration of health metrics, dietary goals, and medical requirements for medically-aware food recommendations. Designed in partnership with nutrition experts.',
    details: [
      'Calorie and macro tracking integration',
      'Medical dietary requirement support',
      'Long-term health goal alignment',
      'Healthcare provider partnership (planned)',
    ],
  },
]

export default function AIEcosystemPage() {
  const [selected, setSelected] = useState(aiModules[0])

  return (
    <main id="main-content">
      <PageHero
        badge="AI Ecosystem"
        title="Nine AI Engines."
        titleHighlight="One Ecosystem."
        description="TIFO's AI infrastructure is a collection of specialized intelligence modules that work together to create a unified, learning food experience."
      />

      {/* Interactive AI Module Explorer */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeader
            badge="Intelligence Modules"
            title="Explore the"
            titleHighlight="AI Architecture"
            description="Click any module to explore how it works and what it enables."
          />

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Module List */}
            <div className="space-y-2">
              {aiModules.map((module) => (
                <button
                  key={module.id}
                  onClick={() => setSelected(module)}
                  className={`w-full flex items-center gap-3 p-4 rounded-xl text-left transition-all duration-200 ${
                    selected.id === module.id
                      ? 'border'
                      : 'glass hover:bg-white/5'
                  }`}
                  style={selected.id === module.id ? {
                    background: 'rgba(193,68,14,0.12)',
                    borderColor: 'rgba(193,68,14,0.35)',
                  } : {}}
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${selected.id === module.id ? 'text-orange-400' : 'text-gray-500'}`} style={{ background: selected.id === module.id ? 'rgba(193,68,14,0.15)' : 'rgba(255,255,255,0.05)' }}>
                    {React.cloneElement(module.icon, { size: 18 })}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-semibold truncate ${selected.id === module.id ? 'text-white' : 'text-gray-400'}`} style={{ fontFamily: 'var(--font-display)' }}>
                      {module.title}
                    </p>
                  </div>
                  {module.status === 'Roadmap' && (
                    <span className="text-xs px-2 py-0.5 rounded-full flex-shrink-0" style={{ background: 'rgba(255,255,255,0.05)', color: '#888', border: '1px solid rgba(255,255,255,0.1)' }}>
                      Soon
                    </span>
                  )}
                  <ChevronRight size={14} className={selected.id === module.id ? 'text-orange-400' : 'text-gray-600'} />
                </button>
              ))}
            </div>

            {/* Module Detail */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selected.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                  className="glass rounded-2xl p-8 h-full"
                  style={{ border: '1px solid rgba(193,68,14,0.15)' }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center text-orange-400" style={{ background: 'rgba(193,68,14,0.12)' }}>
                        {selected.icon}
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>{selected.title}</h2>
                        <span
                          className="badge mt-1 inline-flex"
                          style={{
                            background: selected.status === 'Active' ? 'rgba(16,185,129,0.1)' : 'rgba(255,255,255,0.06)',
                            color: selected.status === 'Active' ? '#10b981' : '#888',
                            border: selected.status === 'Active' ? '1px solid rgba(16,185,129,0.2)' : '1px solid rgba(255,255,255,0.1)',
                          }}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${selected.status === 'Active' ? 'bg-green-400' : 'bg-gray-500'} animate-pulse`}></span>
                          {selected.status === 'Active' ? 'Active Development' : 'On Roadmap'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6">{selected.desc}</p>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Key Capabilities</h3>
                    <div className="space-y-2">
                      {selected.details.map((detail, i) => (
                        <motion.div
                          key={detail}
                          initial={{ opacity: 0, x: 12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.07 }}
                          className="flex items-center gap-3 text-sm text-gray-400"
                        >
                          <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: '#C1440E' }}></span>
                          {detail}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="section-padding" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="container-max">
          <SectionHeader
            badge="Architecture"
            title="How the Modules"
            titleHighlight="Work Together"
            description="Each AI module feeds data into the others, creating a self-improving ecosystem that gets smarter with every interaction."
          />
          <FadeIn>
            <div className="glass rounded-3xl p-8" style={{ border: '1px solid rgba(193,68,14,0.15)' }}>
              <div className="grid md:grid-cols-3 gap-6 text-center text-sm">
                {[
                  { label: 'Data Layer', items: ['User Behavior', 'Order History', 'Restaurant Data', 'Contextual Signals'], color: '#888' },
                  { label: 'AI Processing', items: ['Preference Learning', 'Demand Prediction', 'Menu Ranking', 'Context Analysis'], color: '#C1440E', highlight: true },
                  { label: 'Output Layer', items: ['Personalized Feed', 'Smart Subscriptions', 'Restaurant Insights', 'Demand Alerts'], color: '#10b981' },
                ].map((col, i) => (
                  <div key={col.label} className={`p-6 rounded-2xl ${col.highlight ? 'glow-orange' : ''}`} style={col.highlight ? { background: 'rgba(193,68,14,0.08)', border: '1px solid rgba(193,68,14,0.25)' } : {}}>
                    <h3 className="font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)', color: col.color }}>{col.label}</h3>
                    <ul className="space-y-2">
                      {col.items.map((item) => (
                        <li key={item} className="text-gray-500 text-sm">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
