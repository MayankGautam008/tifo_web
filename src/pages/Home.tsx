import React from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  ArrowRight, ExternalLink, Brain, Users, TrendingUp,
  Zap, Target, Star, ChevronRight, BookOpen, Handshake,
  Building2, GraduationCap, Briefcase, CheckCircle2,
  Cpu, Database, Network, BarChart3, Clock, Leaf
} from 'lucide-react'
import { config } from '../config/app'
import {
  SectionHeader, FadeIn,
  InternalResearchNote, SourceNote
} from '../components/ui'

// ─── Hero Section ──────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden grid-bg"
      aria-labelledby="hero-heading"
    >
      {/* Background Orbs */}
      <div className="orb orb-orange w-[600px] h-[600px] top-[-200px] left-1/2 -translate-x-1/2 opacity-25 pointer-events-none"></div>
      <div className="orb orb-small w-80 h-80 bottom-20 right-[-100px] opacity-20 pointer-events-none"></div>
      <div className="orb w-64 h-64 bottom-40 left-[-50px] opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,180,100,0.3), transparent)', filter: 'blur(80px)' }}></div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'radial-gradient(ellipse at 50% 0%, rgba(193,68,14,0.15) 0%, transparent 60%)',
      }}></div>

      <div className="container-max section-padding relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="badge badge-orange">
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span>
                Now Building the Future of Food
              </span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="heading-xl text-white mb-6"
            >
              India's{' '}
              <span className="gradient-text">AI-Powered</span>
              <br />
              Personalized Food
              <br />
              Ecosystem
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="body-lg mb-10"
              style={{ maxWidth: '520px' }}
            >
              TIFO is reimagining how India eats — delivering the{' '}
              <strong className="text-white font-semibold">right food, right person, right time</strong>{' '}
              through intelligent AI, deep personalization, and a thriving local restaurant ecosystem.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href={config.PLATFORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="tifo-btn-primary"
                id="hero-launch-btn"
              >
                Launch Platform
                <ExternalLink size={16} />
              </a>
              <Link
                to="/research"
                className="tifo-btn-secondary"
                id="hero-research-btn"
              >
                Explore Research
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/restaurant-partners"
                className="tifo-btn-ghost"
                id="hero-partner-btn"
              >
                Become a Partner
                <Handshake size={16} />
              </Link>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-12 flex items-center gap-8 flex-wrap"
            >
              {[
                { value: '9+', label: 'Months Development' },
                { value: '10,000+', label: 'Customer Outreach' },
                { value: '300+', label: 'Returning Customers' },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2">
                  <div className="w-px h-8 bg-white/10"></div>
                  <div>
                    <div className="text-lg font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>{s.value}</div>
                    <div className="text-xs text-gray-500">{s.label}</div>
                  </div>
                </div>
              ))}
              <div className="text-xs text-gray-600 self-end mb-0.5"><InternalResearchNote /></div>
            </motion.div>
          </div>

          {/* Right — AI Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600"
        aria-hidden="true"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-10 bg-gradient-to-b from-transparent via-orange-600 to-transparent"
        />
      </motion.div>
    </section>
  )
}

function HeroVisual() {
  return (
    <div className="relative w-full" style={{ height: '520px' }}>
      {/* Central AI core */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <div className="w-24 h-24 rounded-full border border-orange-700/40 absolute inset-0 scale-125"></div>
        <div className="w-24 h-24 rounded-full border border-orange-600/20 absolute inset-0 scale-150"></div>
      </motion.div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
        <div className="glass-orange w-24 h-24 rounded-full flex items-center justify-center glow-orange">
          <Brain size={40} className="text-orange-400" />
        </div>
      </div>

      {/* Orbiting nodes */}
      {[
        { icon: <Zap size={18} />, label: 'Smart\nRecommendations', angle: 0, delay: 0 },
        { icon: <Users size={18} />, label: 'Personalized\nProfiles', angle: 72, delay: 0.3 },
        { icon: <TrendingUp size={18} />, label: 'Demand\nForecasting', angle: 144, delay: 0.6 },
        { icon: <Database size={18} />, label: 'Meal\nIntelligence', angle: 216, delay: 0.9 },
        { icon: <Network size={18} />, label: 'Restaurant\nAnalytics', angle: 288, delay: 1.2 },
      ].map((node, i) => {
        const rad = (node.angle * Math.PI) / 180
        const r = 170
        const x = r * Math.cos(rad)
        const y = r * Math.sin(rad)
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: node.delay + 0.5, duration: 0.5 }}
            className="absolute z-20"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="glass rounded-xl p-3 text-center" style={{ minWidth: '90px', border: '1px solid rgba(193,68,14,0.2)' }}>
                <div className="text-orange-400 flex justify-center mb-1">{node.icon}</div>
                <p className="text-xs text-gray-400 leading-tight whitespace-pre">{node.label}</p>
              </div>
            </motion.div>
          </motion.div>
        )
      })}

      {/* Connection lines (decorative SVG) */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
        {[0, 72, 144, 216, 288].map((angle, i) => {
          const rad = (angle * Math.PI) / 180
          const r = 170
          const cx = 50
          const cy = 50
          const tx = cx + (r / 5.2) * Math.cos(rad)
          const ty = cy + (r / 5.2) * Math.sin(rad)
          return (
            <line
              key={i}
              x1={`${cx}%`}
              y1={`${cy}%`}
              x2={`${tx + 50}%`}
              y2={`${ty + 50}%`}
              stroke="rgba(193,68,14,0.15)"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          )
        })}
      </svg>
    </div>
  )
}

// ─── Company Story ──────────────────────────────────────────────────────────────
function CompanyStorySection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section className="section-padding" aria-label="Company Story">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <span className="badge badge-orange mb-6 inline-flex">Our Origin Story</span>
            <h2 className="heading-lg text-white mb-6">
              Born from a{' '}
              <span className="gradient-text">Real Problem</span>
            </h2>
            <p className="body-lg mb-6">
              Every morning, university students packed lunch at 6 AM and ate it 7–8 hours later — stale, cold, and nutrition-poor. Existing delivery platforms couldn't help: limited availability, zero personalization, and unpredictable pricing.
            </p>
            <p className="body-lg mb-8">
              TIFO was created to solve this recurring meal problem through AI, personalization, subscriptions, affordability, and strong local restaurant partnerships. We are not another food delivery app — we are building India's first AI-powered personalized food ecosystem.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/about" className="tifo-btn-primary">
                Learn Our Story <ArrowRight size={16} />
              </Link>
              <Link to="/vision-mission" className="tifo-btn-secondary">
                Our Vision
              </Link>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  icon: <Clock size={24} className="text-orange-400" />,
                  title: 'The 7-Hour Problem',
                  text: 'Food packed at 6 AM eaten 7–8 hours later — no longer fresh, no longer safe.',
                },
                {
                  icon: <Target size={24} className="text-orange-400" />,
                  title: 'Zero Personalization',
                  text: 'Existing platforms treat every user the same. TIFO learns individual preferences.',
                },
                {
                  icon: <Brain size={24} className="text-orange-400" />,
                  title: 'AI as the Solution',
                  text: 'Intelligent systems that understand what you eat, when, and why — then improve continuously.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  ref={ref}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="glass rounded-2xl p-5 flex gap-4 card-hover"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(193,68,14,0.1)' }}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1" style={{ fontFamily: 'var(--font-display)' }}>{item.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

// ─── National Impact ────────────────────────────────────────────────────────────
function NationalImpactSection() {
  const stats = [
    {
      value: '560M+',
      label: 'Working-age population in India',
      source: 'World Bank, 2023',
      sourceHref: 'https://data.worldbank.org/indicator/SP.POP.1564.TO?locations=IN',
    },
    {
      value: '37M+',
      label: 'Higher education students in India',
      source: 'AISHE Report 2021-22, Ministry of Education',
      sourceHref: 'https://aishe.gov.in',
    },
    {
      value: '₹75,000 Cr+',
      label: 'India food services market (FY2023)',
      source: 'NRAI India Food Services Report 2023',
      sourceHref: 'https://nrai.org',
    },
    {
      value: '40%',
      label: 'Food wasted in supply chain annually',
      source: 'FSSAI Report on Food Waste',
      sourceHref: 'https://fssai.gov.in',
    },
  ]

  return (
    <section className="section-padding" style={{ background: 'rgba(193,68,14,0.03)', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }} aria-label="National Impact Statistics">
      <div className="container-max">
        <SectionHeader
          badge="Market Reality"
          title="The Scale of"
          titleHighlight="Opportunity"
          description="India's food ecosystem is vast — and largely underserved by intelligent technology."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.1}>
              <div className="glass rounded-2xl p-6 card-hover text-center h-full flex flex-col">
                <div className="heading-md gradient-text mb-2">{s.value}</div>
                <p className="text-sm text-gray-300 font-medium mb-auto">{s.label}</p>
                <SourceNote text={s.source} href={s.sourceHref} />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── AI Features ────────────────────────────────────────────────────────────────
function AIFeaturesSection() {
  const features = [
    { icon: <Brain size={28} />, title: 'Recommendation Engine', desc: 'Hyper-personalized meal suggestions based on individual taste, schedule, dietary needs, and past behavior.' },
    { icon: <Database size={28} />, title: 'Customer Preference Memory', desc: 'Continuously learns and refines your food profile over time — the more you use TIFO, the smarter it gets.' },
    { icon: <Zap size={28} />, title: 'Meal Intelligence', desc: 'Context-aware meal timing and nutritional balance recommendations based on your daily routine.' },
    { icon: <BarChart3 size={28} />, title: 'Demand Forecasting', desc: 'Predicts meal demand patterns for restaurants, reducing waste and ensuring availability when you need it.' },
    { icon: <Network size={28} />, title: 'Restaurant Analytics', desc: 'Deep insights for restaurant partners on menu performance, customer preferences, and operational efficiency.' },
    { icon: <Star size={28} />, title: 'Smart Subscription Engine', desc: 'AI-curated meal subscription plans that adapt to your schedule, preferences, and budget.' },
    { icon: <TrendingUp size={28} />, title: 'Dynamic Menu Ranking', desc: 'Real-time menu optimization based on freshness, demand, ratings, and individual preference signals.' },
    { icon: <Target size={28} />, title: 'Context-Aware Recommendations', desc: 'Understands time-of-day, weather, location, and occasion to surface the most relevant meal options.' },
    { icon: <Leaf size={28} />, title: 'Future: Health-Aware AI', desc: 'Roadmap: Integration of health metrics and dietary goals for medically-aware food recommendations.', isRoadmap: true },
  ]

  return (
    <section className="section-padding" aria-label="AI Features">
      <div className="container-max">
        <SectionHeader
          badge="AI Ecosystem"
          title="Intelligence at Every"
          titleHighlight="Touchpoint"
          description="TIFO's AI engine works silently across the entire food journey — from recommendation to delivery to feedback."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.08}>
              <div className="glass rounded-2xl p-6 card-hover h-full relative overflow-hidden">
                {f.isRoadmap && (
                  <div className="absolute top-4 right-4">
                    <span className="text-xs px-2 py-0.5 rounded-full font-mono" style={{ background: 'rgba(255,255,255,0.05)', color: '#888', border: '1px solid rgba(255,255,255,0.1)' }}>
                      Roadmap
                    </span>
                  </div>
                )}
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-orange-400" style={{ background: 'rgba(193,68,14,0.12)' }}>
                  {f.icon}
                </div>
                <h3 className="text-white font-semibold mb-2" style={{ fontFamily: 'var(--font-display)' }}>{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/ai-ecosystem" className="tifo-btn-primary">
            Explore AI Ecosystem <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── Customer Journey ───────────────────────────────────────────────────────────
function CustomerJourneySection() {
  const steps = [
    { num: '01', title: 'Create Your Profile', desc: 'Tell TIFO your food preferences, dietary restrictions, schedule, and goals.' },
    { num: '02', title: 'AI Learns Your Taste', desc: 'Our recommendation engine analyzes your behavior and continuously refines your food profile.' },
    { num: '03', title: 'Receive Smart Suggestions', desc: 'Get hyper-personalized meal recommendations at the right time, from trusted local restaurants.' },
    { num: '04', title: 'Subscribe & Save', desc: 'Choose intelligent meal subscription plans that fit your budget and daily routine.' },
    { num: '05', title: 'Track & Improve', desc: 'Provide feedback that makes your next meal better. The ecosystem improves with every interaction.' },
  ]

  return (
    <section className="section-padding" style={{ background: 'rgba(255,255,255,0.01)' }} aria-label="Customer Journey">
      <div className="container-max">
        <SectionHeader
          badge="How It Works"
          title="Your Personalized"
          titleHighlight="Food Journey"
          description="From first sign-up to daily meal — TIFO makes every step intelligent and effortless."
        />
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(193,68,14,0.3), transparent)' }}></div>
          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.12}>
                <div className="glass rounded-2xl p-6 card-hover text-center relative">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white mx-auto mb-4 relative z-10"
                    style={{ background: 'linear-gradient(135deg, #C1440E, #E05A1A)' }}
                  >
                    {step.num}
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-2" style={{ fontFamily: 'var(--font-display)' }}>{step.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Business Model ──────────────────────────────────────────────────────────────
function BusinessModelSection() {
  const models = [
    { icon: <GraduationCap size={28} />, title: 'Students', tag: 'Affordable Plans', desc: 'Subscription-based meal plans tailored for university students — fresh, personalized, and budget-friendly.' },
    { icon: <Briefcase size={28} />, title: 'Working Professionals', tag: 'Convenience First', desc: 'Time-optimized meal solutions for busy professionals who need quality nutrition without the hassle.' },
    { icon: <Building2 size={28} />, title: 'Restaurant Partners', tag: 'Revenue Growth', desc: 'Technology-driven partnership that brings data insights, demand forecasting, and steady order flow to local restaurants.' },
    { icon: <Cpu size={28} />, title: 'Institutions', tag: 'Enterprise', desc: 'Bulk meal planning and management solutions for universities, companies, and large-scale organizations.' },
  ]

  return (
    <section className="section-padding" aria-label="Business Model">
      <div className="container-max">
        <SectionHeader
          badge="Business Model"
          title="Built for"
          titleHighlight="Every Stakeholder"
          description="TIFO creates value for the entire food ecosystem — customers, restaurants, and institutions."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.map((m, i) => (
            <FadeIn key={m.title} delay={i * 0.1}>
              <div className="glass rounded-2xl p-7 card-hover h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-orange-400" style={{ background: 'rgba(193,68,14,0.12)' }}>
                  {m.icon}
                </div>
                <span className="badge badge-orange mb-3 self-start">{m.tag}</span>
                <h3 className="text-white font-bold text-lg mb-3" style={{ fontFamily: 'var(--font-display)' }}>{m.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed flex-1">{m.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Validation ─────────────────────────────────────────────────────────────────
function ValidationSection() {
  const milestones = [
    { icon: <Clock size={22} />, title: '9+ Months', sub: 'Product Development & Validation' },
    { icon: <Users size={22} />, title: '10,000+', sub: 'Customer Outreach Conducted' },
    { icon: <CheckCircle2 size={22} />, title: '300+', sub: 'Returning Customers Validated' },
    { icon: <Handshake size={22} />, title: 'Active', sub: 'Restaurant Partnerships' },
    { icon: <TrendingUp size={22} />, title: 'Continuous', sub: 'Product Improvements from Feedback' },
  ]

  return (
    <section className="section-padding" style={{ background: 'rgba(193,68,14,0.04)', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }} aria-label="Validation">
      <div className="container-max">
        <SectionHeader
          badge="Validation & Traction"
          title="Built on"
          titleHighlight="Real Evidence"
          description="Every milestone is grounded in real customer interactions, feedback, and product iterations."
        />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 mb-8">
          {milestones.map((m, i) => (
            <FadeIn key={m.title} delay={i * 0.1}>
              <div className="glass rounded-2xl p-5 card-hover text-center h-full flex flex-col items-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3 text-orange-400" style={{ background: 'rgba(193,68,14,0.12)' }}>
                  {m.icon}
                </div>
                <div className="text-xl font-bold text-white mb-1" style={{ fontFamily: 'var(--font-display)' }}>{m.title}</div>
                <p className="text-xs text-gray-500 leading-snug">{m.sub}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-600 mb-4 flex justify-center items-center gap-2">
            <InternalResearchNote label="Internal Research — TIFO Validation Data" />
          </p>
          <Link to="/validation" className="tifo-btn-secondary inline-flex">
            View Full Validation Report <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── Tech Stack ──────────────────────────────────────────────────────────────────
function TechnologySection() {
  return (
    <section className="section-padding" aria-label="Technology">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <span className="badge badge-orange mb-5 inline-flex">Technology</span>
            <h2 className="heading-lg text-white mb-6">
              Built on{' '}
              <span className="gradient-text">Modern Stack</span>
            </h2>
            <p className="body-lg mb-8">
              TIFO is engineered for scale, reliability, and intelligence — using proven modern technologies with a clear path to an advanced AI infrastructure.
            </p>
            <div className="space-y-4">
              {[
                { label: 'Frontend', tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'] },
                { label: 'Backend', tags: ['Python', 'FastAPI', 'Node.js', 'REST APIs'] },
                { label: 'Database', tags: ['MySQL'] },
                { label: 'Future AI Stack', tags: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP'], isFuture: true },
              ].map((layer) => (
                <div key={layer.label} className="flex items-start gap-4">
                  <div className="w-32 flex-shrink-0">
                    <span className="text-sm text-gray-500 font-mono">{layer.label}</span>
                    {layer.isFuture && <span className="text-xs text-orange-600 ml-1">Roadmap</span>}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {layer.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link to="/technology" className="tifo-btn-primary">
                View Architecture <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="right">
            <div className="glass rounded-2xl p-8 font-mono text-sm" style={{ borderColor: 'rgba(193,68,14,0.2)' }}>
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <pre className="text-xs text-gray-400 leading-loose overflow-x-auto">
                {`// TIFO AI Recommendation Engine
const tifoEngine = {
  user: {
    id: "USR_002847",
    preferences: ["South Indian", "Light"],
    mealTime: "13:00",
    location: "Campus Zone A"
  },

  recommend: async (context) => {
    const profile = await AI.getProfile(context.user)
    const demand = await Forecast.getAvailability()
    const ranked = Engine.rank(profile, demand)

    return {
      topPick: ranked[0],
      confidence: 0.94,
      reason: "Fresh + Preferred + Available"
    }
  }
}`}
              </pre>
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2 text-green-400 text-xs">
                <CheckCircle2 size={14} />
                <span>Recommendation computed in ~180ms</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

// ─── Leadership Teaser ───────────────────────────────────────────────────────────
function LeadershipSection() {
  const leaders = [
    {
      name: 'Shashank Pandey',
      role: 'Founder & CEO',
      areas: ['Business Strategy', 'Partnerships', 'Vision', 'Growth'],
      initials: 'SP',
    },
    {
      name: 'Mayank Gautam',
      role: 'Co-Founder & CTO',
      areas: ['Technology', 'Artificial Intelligence', 'Research', 'Architecture'],
      initials: 'MG',
    },
    {
      name: 'Akshara Bajpai',
      role: 'Chief Operating Officer',
      areas: ['Operations', 'Execution', 'Restaurant Partnerships', 'Customer Experience'],
      initials: 'AB',
    },
  ]

  return (
    <section className="section-padding" style={{ background: 'rgba(255,255,255,0.01)' }} aria-label="Leadership">
      <div className="container-max">
        <SectionHeader
          badge="Leadership"
          title="The Team Behind"
          titleHighlight="TIFO"
          description="A founding team that combines business acumen, deep technology expertise, and operational excellence."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {leaders.map((leader, i) => (
            <FadeIn key={leader.name} delay={i * 0.15}>
              <div className="glass rounded-2xl p-8 card-hover text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-xl font-black text-white mx-auto mb-5"
                  style={{ background: 'linear-gradient(135deg, #C1440E, #8B3000)' }}
                >
                  {leader.initials}
                </div>
                <h3 className="text-white text-lg font-bold mb-1" style={{ fontFamily: 'var(--font-display)' }}>{leader.name}</h3>
                <p className="text-sm font-semibold mb-4" style={{ color: '#E05A1A' }}>{leader.role}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {leader.areas.map((area) => (
                    <span key={area} className="tag text-xs">{area}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/leadership" className="tifo-btn-secondary inline-flex">
            Meet the Full Team <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}

// ─── CTA Section ─────────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section className="section-padding" aria-label="Call to Action">
      <div className="container-max">
        <div
          className="rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, rgba(193,68,14,0.15), rgba(139,48,0,0.1))', border: '1px solid rgba(193,68,14,0.2)' }}
        >
          <div className="orb orb-orange w-80 h-80 top-[-100px] left-1/2 -translate-x-1/2 opacity-20 pointer-events-none"></div>
          <div className="relative z-10">
            <span className="badge badge-orange mb-6 inline-flex">Join the Revolution</span>
            <h2 className="heading-lg text-white mb-6">
              Ready to Experience the{' '}
              <span className="gradient-text">Future of Food?</span>
            </h2>
            <p className="body-lg mx-auto mb-10" style={{ maxWidth: '560px' }}>
              Whether you're a student, professional, restaurant partner, or investor — TIFO has a place for you in India's AI food revolution.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={config.PLATFORM_URL} target="_blank" rel="noopener noreferrer" className="tifo-btn-primary">
                Launch Platform <ExternalLink size={16} />
              </a>
              <Link to="/contact" className="tifo-btn-secondary">
                Partner With Us <Handshake size={16} />
              </Link>
              <Link to="/research" className="tifo-btn-ghost">
                Read Research <BookOpen size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── FAQ Section ─────────────────────────────────────────────────────────────────
function FAQSection() {
  const [open, setOpen] = React.useState<number | null>(null)
  const faqs = [
    {
      q: 'What is TIFO?',
      a: 'TIFO is India\'s AI-Powered Personalized Food Ecosystem — a technology platform that uses artificial intelligence to connect the right food, with the right person, at the right time. We started by solving meal problems for university students and are expanding to working professionals and institutions.',
    },
    {
      q: 'Is TIFO a food delivery app?',
      a: 'No. TIFO is a food technology company building a personalized food ecosystem. While delivery may be one component, our core value is in AI-powered personalization, smart subscriptions, restaurant analytics, and building a long-term food intelligence platform.',
    },
    {
      q: 'How does the AI personalization work?',
      a: 'TIFO\'s AI engine learns your individual food preferences, dietary needs, meal timing, and behavioral patterns. Over time, it builds a detailed food profile that enables hyper-personalized recommendations that improve with every interaction.',
    },
    {
      q: 'How can restaurants partner with TIFO?',
      a: 'TIFO offers restaurant partners a technology-driven partnership that provides demand forecasting, customer insights, menu analytics, and a steady order flow. Interested restaurants can reach out through our contact page.',
    },
    {
      q: 'Who is TIFO for?',
      a: 'TIFO serves university students, working professionals, and eventually institutions. Our restaurant partners are local food businesses looking to grow through technology. We also work with investors, incubators, and universities who share our vision.',
    },
    {
      q: 'Is TIFO available across India?',
      a: 'TIFO is currently in the product development and validation phase, with active restaurant partnerships and a customer base being built. Our roadmap includes expanding across Indian cities progressively.',
    },
  ]

  return (
    <section className="section-padding" aria-label="FAQs" id="faq">
      <div className="container-max" style={{ maxWidth: '860px' }}>
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked"
          titleHighlight="Questions"
        />
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="glass rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-white/4 transition-colors"
                  aria-expanded={open === i}
                >
                  <span className="text-white font-semibold" style={{ fontFamily: 'var(--font-display)' }}>{faq.q}</span>
                  <ChevronRight
                    size={18}
                    className={`flex-shrink-0 text-orange-400 transition-transform duration-200 ${open === i ? 'rotate-90' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Main Home Page ───────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <main id="main-content">
      <HeroSection />
      <CompanyStorySection />
      <NationalImpactSection />
      <AIFeaturesSection />
      <CustomerJourneySection />
      <BusinessModelSection />
      <ValidationSection />
      <TechnologySection />
      <LeadershipSection />
      <CTASection />
      <FAQSection />
    </main>
  )
}
