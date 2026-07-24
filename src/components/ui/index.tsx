import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface SectionHeaderProps {
  badge?: string
  title: string
  titleHighlight?: string
  description?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({ badge, title, titleHighlight, description, centered = true, className = '' }: SectionHeaderProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`${centered ? 'text-center' : ''} mb-14 ${className}`}
    >
      {badge && (
        <div className={`mb-4 ${centered ? 'flex justify-center' : ''}`}>
          <span className="badge badge-orange">
            <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
            {badge}
          </span>
        </div>
      )}
      <h2 className="heading-lg mb-4">
        {titleHighlight ? (
          <>{title}{' '}<span className="gradient-text">{titleHighlight}</span></>
        ) : title}
      </h2>
      {description && (
        <p className={`body-lg ${centered ? 'mx-auto' : ''}`} style={{ maxWidth: '600px' }}>
          {description}
        </p>
      )}
    </motion.div>
  )
}

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  style?: React.CSSProperties
  onClick?: () => void
}

export function GlassCard({ children, className = '', hover = true, style, onClick }: GlassCardProps) {
  return (
    <div className={`glass rounded-2xl ${hover ? 'card-hover' : ''} ${className}`} style={style} onClick={onClick}>
      {children}
    </div>
  )
}

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  className?: string
  once?: boolean
}

export function FadeIn({ children, delay = 0, direction = 'up', className = '', once = true }: FadeInProps) {
  const [ref, inView] = useInView({ triggerOnce: once, threshold: 0.12 })
  const initial = {
    opacity: 0,
    y: direction === 'up' ? 24 : direction === 'down' ? -24 : 0,
    x: direction === 'left' ? 24 : direction === 'right' ? -24 : 0,
  }
  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StatCardProps {
  value: string
  label: string
  source?: string
  icon?: React.ReactNode
  delay?: number
}

export function StatCard({ value, label, source, icon, delay = 0 }: StatCardProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className="glass rounded-2xl p-6 card-hover text-center"
    >
      {icon && <div className="mb-3 flex justify-center text-tifo-primary">{icon}</div>}
      <div className="heading-md gradient-text mb-2">{value}</div>
      <p className="text-sm font-semibold mb-1" style={{ color: '#3D3530' }}>{label}</p>
      {source && <p className="text-xs" style={{ color: '#A09890' }}>{source}</p>}
    </motion.div>
  )
}

interface PageHeroProps {
  badge?: string
  title: string
  titleHighlight?: string
  description: string
  cta?: React.ReactNode
  className?: string
}

export function PageHero({ badge, title, titleHighlight, description, cta, className = '' }: PageHeroProps) {
  return (
    <section
      className={`relative min-h-[52vh] flex items-center overflow-hidden grid-bg hero-section ${className}`}
      style={{ paddingTop: '112px', paddingBottom: '72px' }}
    >
      <div className="orb orb-orange w-96 h-96 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40 pointer-events-none"></div>
      <div className="container-max section-padding text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          {badge && (
            <div className="flex justify-center mb-5">
              <span className="badge badge-orange">
                <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                {badge}
              </span>
            </div>
          )}
          <h1 className="heading-xl mb-5">
            {titleHighlight ? (
              <>{title}{' '}<span className="gradient-text">{titleHighlight}</span></>
            ) : title}
          </h1>
          <p className="body-lg mx-auto mb-8" style={{ maxWidth: '680px' }}>
            {description}
          </p>
          {cta && <div className="flex flex-wrap justify-center gap-4">{cta}</div>}
        </motion.div>
      </div>
    </section>
  )
}

interface TabsProps {
  tabs: { label: string; id: string }[]
  active: string
  onChange: (id: string) => void
  className?: string
}

export function Tabs({ tabs, active, onChange, className = '' }: TabsProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`} role="tablist">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          role="tab"
          aria-selected={active === tab.id}
          className="px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
          style={active === tab.id
            ? { background: 'linear-gradient(135deg,#C1440E,#E05A1A)', color: 'white', boxShadow: '0 4px 16px rgba(193,68,14,0.28)' }
            : { background: 'white', color: '#5C524A', border: '1.5px solid #E4DDD5' }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}

export function Divider() {
  return <div className="divider"></div>
}

export function OrbDecoration({ className = '' }: { className?: string }) {
  return <div className={`orb orb-orange pointer-events-none ${className}`} style={{ filter: 'blur(100px)' }} />
}

export function SourceNote({ text, href }: { text: string; href?: string }) {
  return (
    <p className="source-note">
      Source:{' '}
      {href
        ? <a href={href} target="_blank" rel="noopener noreferrer">{text}</a>
        : text}
    </p>
  )
}

export function InternalResearchNote({ label = 'Internal Research' }: { label?: string }) {
  return (
    <span className="research-note">
      📊 {label}
    </span>
  )
}

// Backwards compat
export function GlassCard2(props: GlassCardProps) { return <GlassCard {...props} /> }
