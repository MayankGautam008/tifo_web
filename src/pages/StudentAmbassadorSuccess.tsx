import React, { useState } from 'react'
import { useLocation, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { CheckCircle2, Copy, Check, ArrowRight, Home, Compass } from 'lucide-react'
import { GlassCard, PageHero } from '../components/ui'

interface SuccessState {
  applicationId: string
  fullName: string
  email: string
  college: string
}

export default function StudentAmbassadorSuccess() {
  const location = useLocation()
  const state = location.state as SuccessState | null
  const [copied, setCopied] = useState(false)

  // Fallback if accessed directly without state
  const applicationId = state?.applicationId || `TIFO-SA-${new Date().getFullYear()}-00192`
  const fullName = state?.fullName || 'Applicant'

  const copyId = () => {
    navigator.clipboard.writeText(applicationId)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <>
      <Helmet>
        <title>Application Received | TIFO Student Ambassador</title>
      </Helmet>

      <section
        className="relative min-h-[80vh] flex items-center overflow-hidden grid-bg section-padding"
        style={{ paddingTop: '120px', paddingBottom: '80px' }}
      >
        <div className="container-max max-w-2xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="w-20 h-20 rounded-full bg-gradient-to-tr from-tifo-primary to-orange-400 text-white mx-auto flex items-center justify-center mb-6 shadow-xl"
          >
            <CheckCircle2 size={44} />
          </motion.div>

          <h1 className="heading-lg mb-3">Application Received 🎉</h1>
          <p className="body-lg text-gray-600 mb-8 max-w-lg mx-auto">
            Thank you, <strong className="text-gray-900">{fullName}</strong>! Your application to the TIFO Student Ambassador Program has been submitted.
          </p>

          {/* Application ID Card */}
          <GlassCard className="p-6 mb-8 text-left border border-orange-200 shadow-xl bg-white/90">
            <div className="flex items-center justify-between flex-wrap gap-4 border-b border-orange-100 pb-4 mb-4">
              <div>
                <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">Unique Application ID</p>
                <p className="text-2xl font-bold text-tifo-primary font-mono tracking-tight">{applicationId}</p>
              </div>
              <button
                onClick={copyId}
                className="tifo-btn-secondary py-2 px-4 text-xs inline-flex items-center gap-1.5"
              >
                {copied ? <Check size={14} className="text-green-600" /> : <Copy size={14} />}
                {copied ? 'Copied!' : 'Copy ID'}
              </button>
            </div>

            <div className="space-y-3 text-xs text-gray-600">
              <p className="font-semibold text-gray-800">What happens next?</p>
              <ul className="space-y-2 list-disc list-inside leading-relaxed text-gray-600">
                <li>Our team will carefully review your profile and response details.</li>
                <li>Shortlisted applicants will receive an invitation for an online interview via email.</li>
                <li>Keep an eye on your inbox for further official updates.</li>
              </ul>
            </div>
          </GlassCard>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/" className="tifo-btn-primary py-3 px-6 text-sm inline-flex items-center gap-2">
              <Home size={16} /> Back to TIFO
            </Link>
            <Link to="/student-ambassador" className="tifo-btn-secondary py-3 px-6 text-sm inline-flex items-center gap-2">
              <Compass size={16} /> Explore Program Details
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
