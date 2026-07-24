import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, GraduationCap, Clock, DollarSign, Brain, Calendar, Heart } from 'lucide-react'
import { PageHero, SectionHeader, FadeIn, SourceNote } from '../components/ui'
import { config } from '../config/app'
import { ExternalLink } from 'lucide-react'

export default function StudentsPage() {
  const benefits = [
    { icon: <Brain size={22} />, title: 'AI Meal Recommendations', desc: 'Get personalized meal suggestions that match your taste, dietary restrictions, and nutritional needs — refined over time through AI learning.' },
    { icon: <Clock size={22} />, title: 'Schedule-Aware Timing', desc: 'TIFO understands your class schedule. Meal recommendations arrive at the right time — so you always have fresh, timely food.' },
    { icon: <DollarSign size={22} />, title: 'Budget-Friendly Plans', desc: 'Subscription meal plans designed for student budgets, with AI optimization that maximizes value without compromising quality.' },
    { icon: <Heart size={22} />, title: 'Fresh, Local Food', desc: 'Partnered with local restaurants and home kitchens near your campus — ensuring fresh, hygienic food that\'s always better than stale packed lunch.' },
    { icon: <Calendar size={22} />, title: 'Smart Subscriptions', desc: 'Monthly meal plans that adapt to your schedule, exam periods, and preference changes — without the hassle of daily ordering.' },
    { icon: <GraduationCap size={22} />, title: 'Campus-First Focus', desc: 'TIFO was specifically built for the campus experience. We understand the unique constraints and needs of university life.' },
  ]

  return (
    <main id="main-content">
      <PageHero
        badge="For Students"
        title="Never Eat Stale Food"
        titleHighlight="Again"
        description="TIFO was built for you. Born on a university campus, our platform solves the real meal problems students face — with AI, subscriptions, and fresh local food."
        cta={
          <a href={config.PLATFORM_URL} target="_blank" rel="noopener noreferrer" className="tifo-btn-primary">
            Get Started <ExternalLink size={16} />
          </a>
        }
      />

      {/* The Student Problem */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="badge badge-orange mb-5 inline-flex">We Understand</span>
              <h2 className="heading-lg text-white mb-6">The Student <span className="gradient-text">Meal Reality</span></h2>
              <p className="body-lg mb-5">
                You pack lunch at 6 AM. By 1 PM, after 3 lectures, your food is stale, lukewarm, and unappetizing. Food delivery platforms don't reach your campus. Canteen queues are too long. You skip lunch or grab junk from a vending machine.
              </p>
              <p className="body-lg mb-8">
                This isn't just an inconvenience — it's a nutritional, health, and academic performance issue affecting millions of Indian students every day.
              </p>
              <div className="space-y-3">
                {[
                  { stat: '37M+', desc: 'Higher education students in India', src: 'AISHE Report 2021-22', href: 'https://aishe.gov.in' },
                  { stat: '7–8 hrs', desc: 'Average time food sits before being eaten on campus', src: 'Internal Research', href: undefined },
                ].map((s) => (
                  <div key={s.stat} className="glass rounded-xl p-4 flex items-center gap-4">
                    <div className="text-2xl font-black flex-shrink-0 gradient-text" style={{ fontFamily: 'var(--font-display)' }}>{s.stat}</div>
                    <div>
                      <p className="text-sm text-gray-300">{s.desc}</p>
                      <SourceNote text={s.src} href={s.href} />
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="right">
              <div className="glass rounded-3xl p-8" style={{ border: '1px solid rgba(193,68,14,0.2)' }}>
                <h3 className="text-white font-bold text-xl mb-6" style={{ fontFamily: 'var(--font-display)' }}>A Day with TIFO</h3>
                {[
                  { time: '7:00 AM', event: 'TIFO sends your personalized meal suggestion for the day based on your schedule' },
                  { time: '8:30 AM', event: 'You confirm your lunch order — fresh, from a trusted local restaurant near campus' },
                  { time: '12:30 PM', event: 'Your meal arrives on time, hot, and exactly what you wanted' },
                  { time: '2:00 PM', event: 'You rate the meal — TIFO learns and makes your next recommendation even better' },
                ].map((step, i) => (
                  <div key={i} className="flex gap-4 mb-5 last:mb-0">
                    <div className="flex-shrink-0 text-right" style={{ width: '80px' }}>
                      <span className="text-xs font-mono text-orange-400">{step.time}</span>
                    </div>
                    <div className="flex-shrink-0 w-px bg-white/10 mx-2"></div>
                    <p className="text-sm text-gray-400">{step.event}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="container-max">
          <SectionHeader badge="Student Benefits" title="What You" titleHighlight="Get With TIFO" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <FadeIn key={b.title} delay={i * 0.08}>
                <div className="glass rounded-2xl p-6 card-hover h-full">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-orange-400" style={{ background: 'rgba(193,68,14,0.1)' }}>
                    {b.icon}
                  </div>
                  <h3 className="text-white font-semibold mb-2" style={{ fontFamily: 'var(--font-display)' }}>{b.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{b.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
