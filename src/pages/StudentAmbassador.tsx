import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import {
  Sparkles,
  Users,
  Award,
  BookOpen,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  TrendingUp,
  Target,
  Share2,
  Zap,
  Globe,
  Compass,
  MessageSquare,
  ShieldCheck,
  Briefcase,
  Smile,
  GraduationCap,
  Megaphone,
  UserCheck,
  Rocket,
  Video,
  FileText,
} from 'lucide-react'
import { SectionHeader, GlassCard, FadeIn, OrbDecoration } from '../components/ui'

const benefits = [
  {
    icon: <Award className="w-6 h-6 text-tifo-primary" />,
    title: 'Leadership',
    description: 'Develop leadership, initiative, and real-world campus management experience.',
  },
  {
    icon: <Users className="w-6 h-6 text-tifo-primary" />,
    title: 'Networking',
    description: 'Connect with driven students, creators, builders, and the core TIFO team.',
  },
  {
    icon: <Zap className="w-6 h-6 text-tifo-primary" />,
    title: 'Startup Exposure',
    description: 'Understand how a fast-moving AI startup builds products, communities, and growth strategies.',
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-tifo-primary" />,
    title: 'Communication',
    description: 'Refine public speaking, outreach, presentation, and collaboration skills.',
  },
  {
    icon: <Share2 className="w-6 h-6 text-tifo-primary" />,
    title: 'Community Building',
    description: 'Learn how to construct, foster, and manage vibrant student communities from scratch.',
  },
  {
    icon: <Briefcase className="w-6 h-6 text-tifo-primary" />,
    title: 'Real-World Experience',
    description: 'Execute practical initiatives and ground campaigns instead of theoretical coursework.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-tifo-primary" />,
    title: 'Recognition',
    description: 'Earn performance-based recognition and verified certificates for your contributions.',
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-tifo-primary" />,
    title: 'Growth Opportunities',
    description: 'Top ambassadors may be considered for expanded roles and future team opportunities.',
  },
]

const learningRoadmap = [
  { id: '01', title: 'Communication', desc: 'Master persuasive messaging, active listening, and public speaking.' },
  { id: '02', title: 'Leadership', desc: 'Lead campus initiatives, delegate tasks, and drive team outcomes.' },
  { id: '03', title: 'Community Building', desc: 'Engage peer networks and create engaging student events.' },
  { id: '04', title: 'Marketing', desc: 'Learn digital marketing, word-of-mouth growth, and campaign execution.' },
  { id: '05', title: 'Sales & Outreach', desc: 'Understand student acquisition, pitch decks, and partner outreach.' },
  { id: '06', title: 'Startup Operations', desc: 'Gain insights into how technology startups operate and scale.' },
  { id: '07', title: 'Networking', desc: 'Build meaningful connections across colleges and startup ecosystems.' },
  { id: '08', title: 'Problem Solving', desc: 'Address local campus challenges with creative solutions.' },
  { id: '09', title: 'Team Collaboration', desc: 'Work seamlessly with cross-functional student and corporate teams.' },
  { id: '10', title: 'Professional Branding', desc: 'Build your personal brand on LinkedIn and in professional networks.' },
]

const timelineStages = [
  { stage: 'Discover', label: 'Explore TIFO', desc: 'Understand TIFO’s AI-powered food mission and product suite.' },
  { stage: 'Learn', label: 'Onboard & Train', desc: 'Receive toolkits, guidelines, and direct mentor support.' },
  { stage: 'Represent', label: 'Campus Presence', desc: 'Become the official face and point-of-contact of TIFO on your campus.' },
  { stage: 'Engage', label: 'Community Outreach', desc: 'Organize workshops, peer discussions, and interactive activities.' },
  { stage: 'Build', label: 'Feedback Loop', desc: 'Collect valuable student food preferences and feed product insights.' },
  { stage: 'Grow', label: 'Scale Impact', desc: 'Expand your campus footprint and unlock advanced leadership tiers.' },
]

const selectionSteps = [
  {
    step: '01',
    title: 'Application',
    desc: 'Submit your profile, background, skills, and campus promotion vision.',
    icon: <FileText className="w-5 h-5 text-tifo-primary" />,
  },
  {
    step: '02',
    title: 'Review',
    desc: 'TIFO team evaluates your application, motivation, and potential.',
    icon: <UserCheck className="w-5 h-5 text-tifo-primary" />,
  },
  {
    step: '03',
    title: 'Online Interview',
    desc: 'Shortlisted candidates are invited to a brief 1-on-1 virtual interview.',
    icon: <Video className="w-5 h-5 text-tifo-primary" />,
  },
  {
    step: '04',
    title: 'Selection',
    desc: 'Selected applicants receive official email confirmation and welcome kit.',
    icon: <Award className="w-5 h-5 text-tifo-primary" />,
  },
  {
    step: '05',
    title: 'Onboarding',
    desc: 'Get access to ambassador resources, community channels, and initial tasks.',
    icon: <Rocket className="w-5 h-5 text-tifo-primary" />,
  },
]

const faqs = [
  {
    q: 'Who can apply?',
    a: 'Any student currently enrolled in an undergraduate or postgraduate program at a recognized college or university in India can apply.',
  },
  {
    q: 'Is prior experience required?',
    a: 'No prior experience as a campus ambassador or leader is required. We look for curiosity, enthusiasm, strong communication, and a willingness to learn.',
  },
  {
    q: 'Is there any registration fee?',
    a: 'No. Applying to and participating in the TIFO Student Ambassador Program is completely free.',
  },
  {
    q: 'How does the selection process work?',
    a: 'The selection process involves submitting an online application, an application review by the TIFO team, an online interview for shortlisted candidates, and final selection.',
  },
  {
    q: 'Is the interview online?',
    a: 'Yes, all interviews and interactions during the selection process are conducted online.',
  },
  {
    q: 'What happens after selection?',
    a: 'Once selected, you will receive an official welcome email, onboarding materials, access to the ambassador community, and your initial campus activation guidelines.',
  },
  {
    q: 'Will I receive a certificate?',
    a: 'Yes! Ambassadors who successfully complete their responsibilities will receive an official TIFO Student Ambassador Certificate of Excellence.',
  },
  {
    q: 'Can students from any branch apply?',
    a: 'Yes. Students from Engineering, Management, Arts, Science, Commerce, Design, Law, or any other discipline are welcome to apply.',
  },
  {
    q: 'Can students from any college apply?',
    a: 'Yes, students from any recognized college, institute, or university across India can apply.',
  },
  {
    q: 'Can I apply if I have never been an ambassador before?',
    a: 'Absolutely! Fresh perspectives are highly valued. We encourage first-time applicants to share their passion and ideas.',
  },
]

export default function StudentAmbassador() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <>
      <Helmet>
        <title>TIFO Student Ambassador Program | Build Your Campus</title>
        <meta
          name="description"
          content="Represent TIFO on your campus. Develop real-world startup, leadership, and marketing skills while building a food-tech community at your college."
        />
        <meta property="og:title" content="TIFO Student Ambassador Program | Build Your Campus" />
        <meta
          property="og:description"
          content="Join TIFO's Student Ambassador Program. Build communities, gain startup exposure, and shape the future of food on your campus."
        />
      </Helmet>

      {/* ── HERO SECTION ── */}
      <section
        className="relative min-h-[85vh] flex items-center overflow-hidden grid-bg hero-section"
        style={{ paddingTop: '120px', paddingBottom: '80px' }}
      >
        <OrbDecoration className="w-[500px] h-[500px] top-10 left-1/2 -translate-x-1/2 opacity-30" />

        <div className="container-max section-padding relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-orange text-xs font-semibold tracking-wide uppercase mb-6" style={{ color: '#C1440E' }}>
                <span className="w-2 h-2 rounded-full bg-tifo-primary animate-pulse" />
                TIFO INDIA • STUDENT AMBASSADOR PROGRAM
              </div>

              <h1 className="heading-xl mb-6">
                Your Campus.{' '}
                <span className="gradient-text">Your Community.</span>{' '}
                <br />
                Your Opportunity.
              </h1>

              <p className="body-lg mb-8 max-w-xl text-gray-700">
                Join a growing student community helping TIFO bring smarter, more personalized food experiences to campuses across India. Build leadership skills, connect with innovators, and make a real impact.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link to="/student-ambassador/register" className="tifo-btn-primary text-base py-3.5 px-7 flex items-center gap-2">
                  Become a TIFO Ambassador
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="#program"
                  className="tifo-btn-secondary text-base py-3.5 px-6"
                >
                  Explore the Program
                </a>
              </div>

              {/* Quick highlights */}
              <div className="mt-10 pt-6 border-t flex flex-wrap items-center gap-6 text-xs text-gray-600" style={{ borderColor: 'rgba(193,68,14,0.12)' }}>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-tifo-primary" />
                  <span>Pan-India Campuses</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-tifo-primary" />
                  <span>100% Free Application</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-tifo-primary" />
                  <span>Official Certification</span>
                </div>
              </div>
            </motion.div>

            {/* Right Visual Composition */}
            <motion.div
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative mx-auto max-w-md">
                {/* Central Glass Card Visual */}
                <div className="glass rounded-3xl p-6 relative z-10 border shadow-2xl" style={{ borderColor: 'rgba(193,68,14,0.2)' }}>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-orange-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-tifo-primary">
                        <GraduationCap size={22} />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-gray-900" style={{ fontFamily: 'var(--font-display)' }}>Campus Ambassador Hub</h4>
                        <p className="text-xs text-gray-500">TIFO Student Network</p>
                      </div>
                    </div>
                    <span className="badge badge-orange text-[10px]">Active Cohort</span>
                  </div>

                  <div className="space-y-4">
                    <div className="p-3.5 rounded-xl bg-white/70 border border-orange-100 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-tifo-primary flex items-center justify-center">
                        <Megaphone size={16} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-800">Campus Activation</p>
                        <p className="text-[11px] text-gray-500">Engage peer groups & events</p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/70 border border-orange-100 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-tifo-primary flex items-center justify-center">
                        <Users size={16} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-800">Community Growth</p>
                        <p className="text-[11px] text-gray-500">Connect students with food tech</p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/70 border border-orange-100 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-tifo-primary flex items-center justify-center">
                        <Award size={16} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-800">Leadership & Recognition</p>
                        <p className="text-[11px] text-gray-500">Build real startup credentials</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-orange-100 flex items-center justify-between text-xs">
                    <span className="text-gray-500 font-mono">Status: Recruiting</span>
                    <span className="text-tifo-primary font-bold flex items-center gap-1">
                      Join 2026 Batch <ArrowRight size={12} />
                    </span>
                  </div>
                </div>

                {/* Floating Decorative Badges */}
                <div className="absolute -top-4 -right-4 glass px-4 py-2 rounded-2xl text-xs font-bold text-gray-800 shadow-lg border border-orange-200 z-20 flex items-center gap-2 animate-bounce">
                  <Sparkles size={14} className="text-orange-500" />
                  <span>Pan-India Colleges</span>
                </div>

                <div className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-2xl text-xs font-bold text-gray-800 shadow-lg border border-orange-200 z-20 flex items-center gap-2">
                  <BookOpen size={14} className="text-tifo-primary" />
                  <span>Real Startup Insights</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── WHAT IS THE PROGRAM ── */}
      <section id="program" className="section-padding bg-white relative overflow-hidden">
        <div className="container-max">
          <SectionHeader
            badge="OVERVIEW"
            title="More Than an Ambassador Role."
            titleHighlight="It's a Campus Leadership Experience."
            description="TIFO is building an AI-powered food ecosystem for students and professionals. The Student Ambassador Program gives ambitious students an opportunity to represent TIFO on their campus, build communities, develop real-world skills, and grow alongside an emerging technology startup."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Create Awareness', text: 'Introduce TIFO’s AI food ecosystem to students and campus groups.', icon: <Megaphone className="w-5 h-5" /> },
              { title: 'Connect & Onboard', text: 'Help peers discover personalized, healthier meal planning on campus.', icon: <Users className="w-5 h-5" /> },
              { title: 'Organize Activities', text: 'Host interactive campus sessions, discussions, and student meetups.', icon: <Globe className="w-5 h-5" /> },
              { title: 'Collect Feedback', text: 'Share student insights and food preferences directly with TIFO engineers.', icon: <MessageSquare className="w-5 h-5" /> },
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <GlassCard className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-orange-100 text-tifo-primary flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900" style={{ fontFamily: 'var(--font-display)' }}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
                  </div>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO CAN APPLY ── */}
      <section className="section-padding grid-bg relative">
        <div className="container-max">
          <SectionHeader
            badge="ELIGIBILITY"
            title="Who Can"
            titleHighlight="Apply?"
            description="We welcome proactive students from all academic backgrounds across India. Prior ambassador experience is NOT mandatory."
          />

          <div className="grid md:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <GlassCard className="p-8 h-full border-l-4 border-tifo-primary">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 text-tifo-primary flex items-center justify-center mb-5">
                  <GraduationCap size={24} />
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900" style={{ fontFamily: 'var(--font-display)' }}>
                  Enrolled Students
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Currently enrolled in an undergraduate or postgraduate program at any recognized college or university in India.
                </p>
              </GlassCard>
            </FadeIn>

            <FadeIn delay={0.2}>
              <GlassCard className="p-8 h-full border-l-4 border-tifo-primary">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 text-tifo-primary flex items-center justify-center mb-5">
                  <Compass size={24} />
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900" style={{ fontFamily: 'var(--font-display)' }}>
                  Diverse Interests
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Passionate about technology, food-tech, AI, marketing, business, community building, design, or leadership.
                </p>
              </GlassCard>
            </FadeIn>

            <FadeIn delay={0.3}>
              <GlassCard className="p-8 h-full border-l-4 border-tifo-primary">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 text-tifo-primary flex items-center justify-center mb-5">
                  <Smile size={24} />
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900" style={{ fontFamily: 'var(--font-display)' }}>
                  First-Timers Welcome
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  No prior ambassador or corporate experience is necessary. Enthusiasm, integrity, and good communication are key!
                </p>
              </GlassCard>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── WHY SHOULD YOU JOIN ── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <SectionHeader
            badge="BENEFITS"
            title="Why Should You"
            titleHighlight="Join TIFO?"
            description="Gain real startup experience, build networks, and grow as a leader on your campus."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, idx) => (
              <FadeIn key={idx} delay={idx * 0.08}>
                <GlassCard className="p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-4">
                      {b.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900" style={{ fontFamily: 'var(--font-display)' }}>
                      {b.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{b.description}</p>
                  </div>
                </GlassCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WILL YOU LEARN ── */}
      <section className="section-padding grid-bg">
        <div className="container-max">
          <SectionHeader
            badge="CURRICULUM & SKILLS"
            title="What Will You"
            titleHighlight="Learn?"
            description="Develop a multi-disciplinary toolkit that sets you apart in your career."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {learningRoadmap.map((item) => (
              <FadeIn key={item.id}>
                <div className="p-5 rounded-2xl bg-white border border-orange-100 shadow-sm hover:border-orange-300 transition-all">
                  <span className="text-xs font-mono font-bold text-tifo-primary block mb-2">{item.id}</span>
                  <h4 className="font-bold text-base mb-1 text-gray-900" style={{ fontFamily: 'var(--font-display)' }}>{item.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WILL YOU DO / TIMELINE ── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <SectionHeader
            badge="ROLE TIMELINE"
            title="Your Ambassador"
            titleHighlight="Lifecycle"
            description="From discovery to campus leadership — step by step."
          />

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {timelineStages.map((t, idx) => (
              <div key={idx} className="relative p-5 rounded-2xl bg-orange-50/50 border border-orange-100 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-full bg-tifo-primary text-white text-xs font-bold flex items-center justify-center mb-3">
                    {idx + 1}
                  </div>
                  <h4 className="font-bold text-base text-gray-900 mb-1" style={{ fontFamily: 'var(--font-display)' }}>{t.stage}</h4>
                  <p className="text-xs font-semibold text-tifo-primary mb-2">{t.label}</p>
                  <p className="text-xs text-gray-600">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW SELECTION WORKS ── */}
      <section className="section-padding grid-bg">
        <div className="container-max">
          <SectionHeader
            badge="SELECTION PROCESS"
            title="How Selection"
            titleHighlight="Works"
            description="A simple, transparent 5-step process from application to onboarding."
          />

          <div className="grid md:grid-cols-5 gap-6">
            {selectionSteps.map((s, idx) => (
              <FadeIn key={s.step} delay={idx * 0.1}>
                <GlassCard className="p-6 text-center h-full flex flex-col items-center">
                  <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center mb-4">
                    {s.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-tifo-primary mb-1">STEP {s.step}</span>
                  <h3 className="font-bold text-lg mb-2 text-gray-900" style={{ fontFamily: 'var(--font-display)' }}>{s.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{s.desc}</p>
                </GlassCard>
              </FadeIn>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500 italic">
              Note: Submitting an application does not guarantee selection. Shortlisted candidates will be contacted via official email for the online interview.
            </p>
          </div>
        </div>
      </section>

      {/* ── CAMPUS IMPACT ── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="rounded-3xl p-8 md:p-12 glass-orange border border-orange-200 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="badge badge-orange mb-3">CAMPUS IMPACT</span>
              <h2 className="heading-md mb-4">
                Don't just promote a platform.{' '}
                <span className="gradient-text">Help shape how your campus experiences food.</span>
              </h2>
              <p className="body-lg mb-6 text-gray-700">
                As a TIFO Ambassador, you are a co-creator. You provide ground-level student feedback, identify local dining opportunities, and help us tailor TIFO's AI food engine to the real daily needs of Indian college students.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-semibold text-gray-800">
                <span className="px-3 py-1.5 bg-white rounded-lg border border-orange-200">💡 Student Feedback Loop</span>
                <span className="px-3 py-1.5 bg-white rounded-lg border border-orange-200">📍 Campus Insights</span>
                <span className="px-3 py-1.5 bg-white rounded-lg border border-orange-200">🤝 Peer Community</span>
              </div>
            </div>

            <div className="lg:col-span-4 text-center">
              <Link to="/student-ambassador/register" className="tifo-btn-primary w-full py-4 text-center text-base justify-center inline-flex items-center gap-2">
                Apply Now <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-padding grid-bg">
        <div className="container-max max-w-4xl">
          <SectionHeader
            badge="FREQUENTLY ASKED QUESTIONS"
            title="Got Questions?"
            titleHighlight="We Have Answers."
            description="Everything you need to know about the TIFO Student Ambassador application."
          />

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className="glass rounded-2xl overflow-hidden border border-orange-100 transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-6 font-bold text-gray-900 flex items-center justify-between gap-4"
                    style={{ fontFamily: 'var(--font-display)' }}
                    aria-expanded={isOpen}
                  >
                    <span className="text-base">{faq.q}</span>
                    <ChevronDown
                      size={20}
                      className={`text-tifo-primary transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-gray-600 leading-relaxed border-t border-orange-50 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="section-padding bg-white text-center">
        <div className="container-max max-w-3xl">
          <span className="badge badge-orange mb-4">READY TO START?</span>
          <h2 className="heading-lg mb-4">
            Ready to Represent TIFO on <span className="gradient-text">Your Campus?</span>
          </h2>
          <p className="body-lg mb-8 text-gray-600">
            If you're curious, proactive, and ready to build something meaningful on your campus, we'd love to hear from you.
          </p>
          <Link to="/student-ambassador/register" className="tifo-btn-primary text-lg py-4 px-9 inline-flex items-center gap-2">
            Apply Now
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  )
}
