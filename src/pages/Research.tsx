import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, TrendingUp, Users, Cpu, BarChart3, FileText, FlaskConical, Clock } from 'lucide-react'
import { PageHero, SectionHeader, FadeIn, InternalResearchNote, SourceNote } from '../components/ui'

const researchSections = [
  {
    id: 'market',
    icon: <TrendingUp size={24} />,
    title: 'Market Trends',
    desc: 'Analysis of India\'s rapidly evolving food technology and food services market, grounded in publicly available data.',
    items: [
      {
        title: 'India Food Services Market Size',
        stat: '₹75,000+ Crore',
        statLabel: 'FY2023 Market Size',
        desc: 'India\'s food services industry is one of the fastest-growing in the world, driven by urbanization, rising disposable incomes, and changing dietary habits.',
        source: 'National Restaurant Association of India (NRAI) India Food Services Report 2023',
        sourceHref: 'https://nrai.org',
      },
      {
        title: 'Online Food Delivery Growth',
        stat: 'Growing',
        statLabel: 'Market Segment',
        desc: 'The online food delivery segment in India continues to grow, particularly in Tier-1 and Tier-2 cities, with increasing smartphone penetration driving adoption.',
        source: 'Statista India Food Delivery Market Overview',
        sourceHref: 'https://www.statista.com/outlook/emo/eservices/online-food-delivery/india',
      },
    ],
  },
  {
    id: 'consumer',
    icon: <Users size={24} />,
    title: 'Consumer Behaviour',
    desc: 'Research into how Indian consumers, particularly students and professionals, make food decisions.',
    items: [
      {
        title: 'Student Nutrition in India',
        stat: '37M+',
        statLabel: 'Higher Ed Students',
        desc: 'India has over 37 million students enrolled in higher education institutions (AISHE 2021-22). A significant proportion face daily meal planning challenges due to schedule constraints and limited campus food options.',
        source: 'AISHE Annual Report 2021-22, Ministry of Education, Government of India',
        sourceHref: 'https://aishe.gov.in',
      },
      {
        title: 'Food Safety & Freshness Concerns',
        stat: 'Significant',
        statLabel: 'Public Health Issue',
        desc: 'The FSSAI has highlighted food safety and hygiene as major concerns in institutional food environments, including university campuses and workplace canteens.',
        source: 'FSSAI Annual Report, Food Safety and Standards Authority of India',
        sourceHref: 'https://fssai.gov.in',
      },
    ],
  },
  {
    id: 'foodtech',
    icon: <Cpu size={24} />,
    title: 'Food Technology',
    desc: 'Research on how technology is transforming the global and Indian food sector.',
    items: [
      {
        title: 'AI in Food Recommendation Systems',
        stat: 'Emerging Field',
        statLabel: 'Research Area',
        desc: 'Academic research on AI-powered food recommendation systems is an active field, with peer-reviewed work appearing in journals covering machine learning, nutrition informatics, and consumer behavior.',
        source: 'PubMed — Search "food recommendation systems machine learning"',
        sourceHref: 'https://pubmed.ncbi.nlm.nih.gov/?term=food+recommendation+systems+machine+learning',
      },
      {
        title: 'Personalization in Digital Platforms',
        stat: 'Proven Impact',
        statLabel: 'Technology Effect',
        desc: 'Research consistently shows that personalization in digital platforms leads to higher user satisfaction, increased retention, and better outcomes — a principle TIFO applies to food.',
        source: 'OECD Digital Economy Outlook',
        sourceHref: 'https://www.oecd.org/digital/oecd-digital-economy-outlook.htm',
      },
    ],
  },
  {
    id: 'foodwaste',
    icon: <BarChart3 size={24} />,
    title: 'Food Waste & Supply Chain',
    desc: 'Data on food waste in India and how demand intelligence can address it.',
    items: [
      {
        title: 'India Food Waste Statistics',
        stat: '~40%',
        statLabel: 'Supply Chain Loss',
        desc: 'Significant food loss occurs across India\'s agricultural and food supply chain. The FSSAI and government reports highlight this as a priority area for technological intervention.',
        source: 'FSSAI — Food Waste & Loss in India',
        sourceHref: 'https://fssai.gov.in',
      },
      {
        title: 'WHO: Nutrition and Food Systems',
        stat: 'Global Priority',
        statLabel: 'Policy Area',
        desc: 'The World Health Organization recognizes food systems transformation — including reducing waste and improving nutritional access — as a global health priority.',
        source: 'WHO Nutrition Guidance — Healthy Diet',
        sourceHref: 'https://www.who.int/news-room/fact-sheets/detail/healthy-diet',
      },
    ],
  },
]

const publications = [
  {
    title: 'TIFO Market Validation Report',
    type: 'Internal Research',
    desc: 'Findings from 9+ months of product development, 10,000+ customer outreach interactions, and 300+ returning customer analysis.',
    status: 'internal',
  },
  {
    title: 'AI Personalization in Indian Food Tech: Opportunities & Challenges',
    type: 'Planned Whitepaper',
    desc: 'TIFO\'s planned research publication on the application of AI recommendation systems to the unique context of India\'s diverse food culture.',
    status: 'planned',
  },
  {
    title: 'Student Meal Patterns in Indian Universities: A Field Study',
    type: 'Planned Research',
    desc: 'Structured research study on meal planning behavior, food preferences, and nutritional patterns among Indian university students.',
    status: 'planned',
  },
  {
    title: 'Local Restaurant Technology Adoption in Tier-2 Cities',
    type: 'Future Publication',
    desc: 'Analysis of technology adoption barriers and opportunities for local food businesses in non-metro Indian cities.',
    status: 'future',
  },
]

export default function ResearchPage() {
  return (
    <main id="main-content">
      <PageHero
        badge="Research & Insights"
        title="Evidence-Based."
        titleHighlight="Always."
        description="Every claim we make is backed by real data, verified sources, or clearly labeled as internal research. We believe in radical factual transparency."
      />

      {/* Research Integrity Notice */}
      <section className="section-padding pb-0">
        <div className="container-max">
          <FadeIn>
            <div className="glass rounded-2xl p-6 mb-12 flex gap-4" style={{ border: '1px solid rgba(59,130,246,0.2)', background: 'rgba(59,130,246,0.05)' }}>
              <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-blue-400" style={{ background: 'rgba(59,130,246,0.1)' }}>
                <FlaskConical size={20} />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1" style={{ fontFamily: 'var(--font-display)' }}>Research Integrity Policy</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  TIFO does not fabricate statistics, invent market reports, or cite non-existent research. All external statistics are linked to their original publicly available sources.
                  Content labeled as <InternalResearchNote /> comes from TIFO's own validated field research.
                  Content labeled as <InternalResearchNote label="Planned Research" /> or <InternalResearchNote label="Coming Soon" /> is clearly aspirational.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Research Sections */}
      {researchSections.map((section, si) => (
        <section
          key={section.id}
          className="section-padding"
          style={si % 2 === 1 ? { background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' } : {}}
        >
          <div className="container-max">
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-orange-400" style={{ background: 'rgba(193,68,14,0.1)' }}>
                  {section.icon}
                </div>
                <span className="badge badge-orange">{section.title}</span>
              </div>
              <p className="body-md mb-8">{section.desc}</p>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-6">
              {section.items.map((item, i) => (
                <FadeIn key={item.title} delay={i * 0.1}>
                  <div className="glass rounded-2xl p-7 card-hover h-full">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="text-2xl font-black mb-0.5" style={{ fontFamily: 'var(--font-display)', color: '#E05A1A' }}>{item.stat}</div>
                        <div className="text-xs text-gray-600 font-mono">{item.statLabel}</div>
                      </div>
                    </div>
                    <h3 className="text-white font-bold mb-3" style={{ fontFamily: 'var(--font-display)' }}>{item.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-3">{item.desc}</p>
                    <SourceNote text={item.source} href={item.sourceHref} />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Publications */}
      <section className="section-padding" style={{ background: 'rgba(193,68,14,0.03)', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="container-max">
          <SectionHeader
            badge="Publications"
            title="Research"
            titleHighlight="Library"
            description="TIFO's research publications — current, planned, and future."
          />
          <div className="grid md:grid-cols-2 gap-5">
            {publications.map((pub, i) => (
              <FadeIn key={pub.title} delay={i * 0.1}>
                <div className="glass rounded-2xl p-6 card-hover h-full">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-orange-400" style={{ background: 'rgba(193,68,14,0.1)' }}>
                      <FileText size={16} />
                    </div>
                    <InternalResearchNote
                      label={pub.status === 'internal' ? 'Internal Research' : pub.status === 'planned' ? 'Planned Research' : 'Future Publication'}
                    />
                  </div>
                  <h3 className="text-white font-bold mb-2 text-sm" style={{ fontFamily: 'var(--font-display)' }}>{pub.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{pub.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
