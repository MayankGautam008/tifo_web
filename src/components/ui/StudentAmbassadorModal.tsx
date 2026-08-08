import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, GraduationCap, Sparkles, Award, ArrowRight, CheckCircle2 } from 'lucide-react'

const MODAL_SESSION_KEY = 'tifo_ambassador_modal_closed'

export default function StudentAmbassadorModal() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    // Don't show modal if user is already on student ambassador pages
    if (location.pathname.startsWith('/student-ambassador')) {
      return
    }

    const isClosed = sessionStorage.getItem(MODAL_SESSION_KEY)
    if (!isClosed) {
      // Delay popup slightly for smooth transition after page load
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [location.pathname])

  const handleClose = () => {
    sessionStorage.setItem(MODAL_SESSION_KEY, 'true')
    setIsOpen(false)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl z-10 border border-[#C1440E]/20"
            style={{
              background: 'linear-gradient(135deg, #FFFFFF 0%, #FAF8F5 100%)',
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="ambassador-modal-title"
          >
            {/* Top decorative gradient banner */}
            <div
              className="h-3 w-full"
              style={{
                background: 'linear-gradient(90deg, #C1440E 0%, #E06D3B 50%, #9A3106 100%)',
              }}
            />

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors z-20"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Content */}
            <div className="p-6 sm:p-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-4"
                style={{ background: 'rgba(193,68,14,0.1)', color: '#C1440E' }}>
                <Sparkles size={14} className="animate-pulse" />
                Student Ambassador Program
              </div>

              {/* Title */}
              <h2
                id="ambassador-modal-title"
                className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-tight mb-3"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Lead TIFO on Your Campus!
              </h2>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                Are you a student passionate about AI innovation and student growth? Become an official TIFO Campus Ambassador and unlock incredible opportunities.
              </p>

              {/* Highlights */}
              <div className="space-y-3 mb-7 bg-[#F7F4F0] p-4 rounded-2xl border border-black/5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#C1440E] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-gray-800">
                    Earn Stipends, Goodies & Performance Bonuses
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <GraduationCap size={18} className="text-[#C1440E] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-gray-800">
                    Official Certificate of Internship & Recommendation
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Award size={18} className="text-[#C1440E] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-gray-800">
                    Host Workshops & Network with Industry Leaders
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  to="/student-ambassador"
                  onClick={handleClose}
                  className="tifo-btn-primary flex-1 justify-center py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  Explore Ambassador Program
                  <ArrowRight size={16} />
                </Link>
                <button
                  onClick={handleClose}
                  className="px-5 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 text-sm font-medium transition-colors"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
