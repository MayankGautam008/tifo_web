import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Clock, Tag } from 'lucide-react'
import { PageHero, SectionHeader, FadeIn, InternalResearchNote } from '../components/ui'

const plannedTopics = [
  { title: 'Why AI Personalization is the Future of Food Tech in India', category: 'Technology', readTime: 'Coming Soon' },
  { title: 'The 7-Hour Freshness Problem: India\'s Most Overlooked Meal Crisis', category: 'Research', readTime: 'Coming Soon' },
  { title: 'How Local Restaurants Can Win with Data: A TIFO Perspective', category: 'Partners', readTime: 'Coming Soon' },
  { title: 'Understanding India\'s ₹75,000 Crore Food Services Opportunity', category: 'Market', readTime: 'Coming Soon' },
  { title: 'Building a Recommendation System for 1,000+ Indian Cuisines', category: 'Engineering', readTime: 'Coming Soon' },
  { title: 'From Problem to Product: TIFO\'s 9-Month Validation Journey', category: 'Company', readTime: 'Coming Soon' },
]

export default function BlogPage() {
  return (
    <main id="main-content">
      <PageHero
        badge="Blog"
        title="Thoughts on Food,"
        titleHighlight="Technology & India"
        description="TIFO's blog will feature in-depth articles on AI, food technology, market insights, and our journey building India's personalized food ecosystem."
      />

      {/* Status Notice */}
      <section className="section-padding pb-0">
        <div className="container-max">
          <FadeIn>
            <div className="glass rounded-xl p-5 mb-4 flex gap-4" style={{ border: '1px solid rgba(193,68,14,0.2)', background: 'rgba(193,68,14,0.03)' }}>
              <BookOpen size={20} className="text-orange-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-400">
                TIFO's blog is currently in development. The articles listed below represent planned topics — none have been published yet.{' '}
                <InternalResearchNote label="Planned Content" />{' '}
                We do not publish placeholder or AI-generated content as actual blog posts.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Planned Articles */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeader badge="Coming Soon" title="Planned" titleHighlight="Articles" description="Substantive, research-backed content on food technology, AI, and the Indian market. Each article will be properly cited and verified before publication." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plannedTopics.map((topic, i) => (
              <FadeIn key={topic.title} delay={i * 0.08}>
                <div className="glass rounded-2xl p-6 card-hover h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="badge badge-orange">{topic.category}</span>
                    <div className="flex items-center gap-1 text-xs text-gray-600">
                      <Clock size={12} />
                      {topic.readTime}
                    </div>
                  </div>
                  <h3 className="text-white font-semibold text-sm leading-snug flex-1" style={{ fontFamily: 'var(--font-display)' }}>{topic.title}</h3>
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <InternalResearchNote label="Planned — Not Yet Published" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="container-max">
          <FadeIn>
            <div className="glass rounded-2xl p-8 text-center" style={{ border: '1px solid rgba(193,68,14,0.15)' }}>
              <h2 className="heading-md text-white mb-4">Be the First to Read</h2>
              <p className="body-md mb-6 mx-auto" style={{ maxWidth: '480px' }}>Subscribe to TIFO's newsletter and be notified when new articles are published.</p>
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <label htmlFor="blog-email" className="sr-only">Email address</label>
                <input
                  id="blog-email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-4 py-3 rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
                />
                <button type="submit" className="tifo-btn-primary whitespace-nowrap">
                  Subscribe <ArrowRight size={14} />
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
