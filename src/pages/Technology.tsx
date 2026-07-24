import React from 'react'
import { Code, Server, Database, Cpu, Layers, CheckCircle2, Clock } from 'lucide-react'
import { PageHero, SectionHeader, FadeIn } from '../components/ui'

const techLayers = [
  {
    category: 'Frontend',
    icon: <Code size={28} />,
    color: '#61DAFB',
    status: 'Current',
    stack: [
      { name: 'React', desc: 'Component-based UI framework for dynamic, responsive interfaces' },
      { name: 'TypeScript', desc: 'Type-safe JavaScript for reliable, maintainable code' },
      { name: 'Tailwind CSS', desc: 'Utility-first CSS framework for rapid, consistent styling' },
      { name: 'Vite', desc: 'Next-generation build tool for lightning-fast development' },
    ],
  },
  {
    category: 'Backend',
    icon: <Server size={28} />,
    color: '#38BDF8',
    status: 'Current',
    stack: [
      { name: 'Python', desc: 'Primary backend language — ideal for AI/ML integration' },
      { name: 'FastAPI', desc: 'High-performance Python web framework for REST APIs' },
      { name: 'Node.js', desc: 'Event-driven runtime for real-time features and microservices' },
      { name: 'REST APIs', desc: 'Standard API architecture for frontend-backend communication' },
    ],
  },
  {
    category: 'Database',
    icon: <Database size={28} />,
    color: '#4ade80',
    status: 'Current',
    stack: [
      { name: 'MySQL', desc: 'Relational database for structured user, order, and restaurant data' },
    ],
  },
  {
    category: 'Future AI Stack',
    icon: <Cpu size={28} />,
    color: '#C1440E',
    status: 'Roadmap',
    stack: [
      { name: 'TensorFlow', desc: 'Deep learning framework for neural network-based recommendation models' },
      { name: 'PyTorch', desc: 'Research-grade ML framework for rapid AI model experimentation' },
      { name: 'Scikit-learn', desc: 'Classical ML algorithms for statistical pattern recognition' },
      { name: 'Recommendation Systems', desc: 'Collaborative filtering, content-based, and hybrid recommendation models' },
      { name: 'Predictive Analytics', desc: 'Demand forecasting and behavioral prediction models' },
      { name: 'Natural Language Processing', desc: 'Text analysis for menu understanding and user feedback processing' },
    ],
  },
]

export default function TechnologyPage() {
  return (
    <main id="main-content">
      <PageHero
        badge="Technology"
        title="Engineered for"
        titleHighlight="Intelligence at Scale"
        description="TIFO's technology stack is chosen for reliability today and the AI capabilities of tomorrow. Modern, maintainable, and built to grow."
      />

      {/* Tech Stack */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeader
            badge="Technology Stack"
            title="Current &"
            titleHighlight="Future Architecture"
          />
          <div className="space-y-8">
            {techLayers.map((layer, li) => (
              <FadeIn key={layer.category} delay={li * 0.1}>
                <div className="glass rounded-2xl overflow-hidden">
                  <div className="flex items-center gap-4 px-7 py-5 border-b border-white/5">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: `${layer.color}15`, color: layer.color }}>
                      {layer.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-display)' }}>{layer.category}</h3>
                        <span
                          className="badge text-xs"
                          style={{
                            background: layer.status === 'Current' ? 'rgba(16,185,129,0.1)' : 'rgba(193,68,14,0.1)',
                            color: layer.status === 'Current' ? '#10b981' : '#E05A1A',
                            border: layer.status === 'Current' ? '1px solid rgba(16,185,129,0.2)' : '1px solid rgba(193,68,14,0.2)',
                          }}
                        >
                          {layer.status === 'Current' ? <CheckCircle2 size={10} /> : <Clock size={10} />}
                          {layer.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-7 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {layer.stack.map((tech) => (
                      <div key={tech.name} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full flex-shrink-0 mt-1.5" style={{ background: layer.color }}></span>
                        <div>
                          <span className="text-white font-semibold text-sm" style={{ fontFamily: 'var(--font-display)' }}>{tech.name}</span>
                          <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{tech.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="section-padding" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="container-max">
          <SectionHeader
            badge="System Architecture"
            title="Scalable"
            titleHighlight="by Design"
            description="TIFO's architecture is designed to scale from thousands to millions of users without fundamental redesign."
          />
          <FadeIn>
            <div className="glass rounded-3xl p-8" style={{ border: '1px solid rgba(193,68,14,0.15)' }}>
              {/* Architecture layers diagram */}
              <div className="space-y-4">
                {[
                  { label: 'Client Layer', items: ['React Web App', 'Mobile Web (Responsive)', 'Future: Native Apps'], color: '#61DAFB' },
                  { label: 'API Gateway', items: ['REST API Endpoints', 'Authentication', 'Rate Limiting', 'Request Routing'], color: '#38BDF8' },
                  { label: 'Service Layer', items: ['Recommendation Service', 'Order Management', 'Restaurant API', 'User Profile Service'], color: '#818cf8' },
                  { label: 'AI/ML Layer (Roadmap)', items: ['Recommendation Engine', 'Demand Forecasting', 'Preference Learning', 'NLP Pipeline'], color: '#C1440E' },
                  { label: 'Data Layer', items: ['MySQL Database', 'Future: Redis Cache', 'Future: Data Warehouse', 'Future: ML Feature Store'], color: '#4ade80' },
                ].map((layer, i) => (
                  <div key={layer.label} className="flex items-start gap-4">
                    <div className="w-48 flex-shrink-0 pt-1">
                      <span className="text-xs font-mono" style={{ color: layer.color }}>{layer.label}</span>
                    </div>
                    <div className="flex-1 flex flex-wrap gap-2">
                      {layer.items.map((item) => (
                        <span
                          key={item}
                          className="text-xs px-3 py-1.5 rounded-lg"
                          style={{ background: `${layer.color}12`, border: `1px solid ${layer.color}25`, color: '#ccc' }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/5">
                <p className="text-xs text-gray-600 flex items-center gap-2">
                  <Clock size={12} />
                  Items marked as "Roadmap" represent planned future architecture components, not current production systems.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
