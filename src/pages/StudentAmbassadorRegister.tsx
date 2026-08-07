import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import {
  User,
  Mail,
  Phone,
  GraduationCap,
  MapPin,
  Briefcase,
  FileText,
  Upload,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  AlertCircle,
  Sparkles,
  HelpCircle,
} from 'lucide-react'
import type { AmbassadorFormData } from '../types/ambassador'
import { submitAmbassadorApplication } from '../services/ambassadorApi'
import { PageHero } from '../components/ui'

const interestOptions = [
  'Technology',
  'AI / ML',
  'Software Development',
  'Marketing',
  'Sales',
  'Business',
  'Entrepreneurship',
  'Community Building',
  'Content Creation',
  'Social Media',
  'Design',
  'Operations',
  'Event Management',
  'Food & Hospitality',
  'Research',
  'Other',
]

const skillOptions = [
  'Communication',
  'Leadership',
  'Marketing',
  'Public Speaking',
  'Social Media',
  'Content Creation',
  'Coding',
  'Design',
  'Event Management',
  'Sales',
  'Community Management',
  'Video Editing',
]

const yearOptions = [
  '1st Year',
  '2nd Year',
  '3rd Year',
  '4th Year',
  '5th Year',
  'Postgraduate',
  'Other',
]

const reachOptions = [
  'Under 100',
  '100–500',
  '500–1,000',
  '1,000–5,000',
  '5,000+',
  'Not sure',
]

export default function StudentAmbassadorRegister() {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [submitting, setSubmitting] = useState<boolean>(false)
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const [formData, setFormData] = useState<AmbassadorFormData>({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    course: 'B.Tech',
    branch: '',
    currentYear: '1st Year',
    city: '',
    state: '',
    interests: ['Technology', 'Community Building'],
    skills: ['Communication'],
    priorExperience: '',
    whyJoin: '',
    campusPromotionPlan: '',
    leadershipExperience: '',
    campusReach: '100–500',
    linkedin: '',
    instagram: '',
    additionalNotes: '',
    resume: null,
    consent: false,
  })

  const [customSkillInput, setCustomSkillInput] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData((prev) => ({ ...prev, [name]: checked }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const toggleInterest = (item: string) => {
    setFormData((prev) => {
      const exists = prev.interests.includes(item)
      if (exists) {
        return { ...prev, interests: prev.interests.filter((i) => i !== item) }
      }
      return { ...prev, interests: [...prev.interests, item] }
    })
  }

  const toggleSkill = (skill: string) => {
    setFormData((prev) => {
      const exists = prev.skills.includes(skill)
      if (exists) {
        return { ...prev, skills: prev.skills.filter((s) => s !== skill) }
      }
      return { ...prev, skills: [...prev.skills, skill] }
    })
  }

  const addCustomSkill = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && customSkillInput.trim()) {
      e.preventDefault()
      if (!formData.skills.includes(customSkillInput.trim())) {
        setFormData((prev) => ({ ...prev, skills: [...prev.skills, customSkillInput.trim()] }))
      }
      setCustomSkillInput('')
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      if (file.size > 5 * 1024 * 1024) {
        alert('File size exceeds 5MB limit.')
        return
      }
      setFormData((prev) => ({ ...prev, resume: file }))
    }
  }

  // Step Validations
  const validateStep = (step: number): boolean => {
    setErrorMsg(null)

    if (step === 1) {
      if (!formData.fullName.trim()) {
        setErrorMsg('Please enter your full name.')
        return false
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!formData.email.trim() || !emailRegex.test(formData.email)) {
        setErrorMsg('Please enter a valid email address.')
        return false
      }
      const phoneDigits = formData.phone.replace(/[\s\-]/g, '')
      if (!formData.phone.trim() || phoneDigits.length < 10) {
        setErrorMsg('Please enter a valid 10-digit phone number.')
        return false
      }
    }

    if (step === 2) {
      if (!formData.college.trim()) {
        setErrorMsg('Please enter your College or University name.')
        return false
      }
      if (!formData.course.trim()) {
        setErrorMsg('Please enter your course/degree.')
        return false
      }
      if (!formData.city.trim() || !formData.state.trim()) {
        setErrorMsg('Please enter your city and state.')
        return false
      }
    }

    if (step === 3) {
      if (formData.interests.length === 0) {
        setErrorMsg('Please select at least one field of interest.')
        return false
      }
    }

    if (step === 4) {
      if (!formData.whyJoin.trim() || formData.whyJoin.trim().length < 20) {
        setErrorMsg('Please explain why you want to become a TIFO Student Ambassador (at least 20 characters).')
        return false
      }
      if (!formData.campusPromotionPlan.trim() || formData.campusPromotionPlan.trim().length < 20) {
        setErrorMsg('Please detail how you plan to promote TIFO on your campus (at least 20 characters).')
        return false
      }
    }

    if (step === 5) {
      if (!formData.consent) {
        setErrorMsg('You must confirm that the information provided is accurate and consent to be contacted.')
        return false
      }
    }

    return true
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 5))
      window.scrollTo({ top: 300, behavior: 'smooth' })
    }
  }

  const prevStep = () => {
    setErrorMsg(null)
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateStep(5)) return

    setSubmitting(true)
    setErrorMsg(null)

    try {
      const response = await submitAmbassadorApplication(formData)
      if (response.success && response.applicationId) {
        navigate('/student-ambassador/success', {
          state: {
            applicationId: response.applicationId,
            fullName: formData.fullName,
            email: formData.email,
            college: formData.college,
          },
        })
      } else {
        setErrorMsg(response.message || 'Submission failed. Please try again.')
      }
    } catch (err: any) {
      setErrorMsg('An error occurred during submission. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <Helmet>
        <title>Apply for TIFO Student Ambassador Program</title>
        <meta
          name="description"
          content="Submit your application for the TIFO Student Ambassador Program. Represent TIFO on your campus."
        />
      </Helmet>

      <PageHero
        badge="APPLICATION FORM"
        title="Apply to Become a"
        titleHighlight="TIFO Ambassador"
        description="Tell us about yourself, your campus, your skills, and what you would bring to the TIFO student community."
      />

      <section className="section-padding grid-bg pt-8">
        <div className="container-max max-w-3xl">
          {/* Step Progress Bar */}
          <div className="mb-10 glass rounded-2xl p-6 border border-orange-100">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-mono font-bold text-tifo-primary uppercase">Step {currentStep} of 5</span>
              <span className="text-xs font-semibold text-gray-600">
                {currentStep === 1 && 'Personal Info'}
                {currentStep === 2 && 'Education & Location'}
                {currentStep === 3 && 'Interests & Skills'}
                {currentStep === 4 && 'Questions & Resume'}
                {currentStep === 5 && 'Review & Consent'}
              </span>
            </div>
            <div className="w-full bg-orange-100 h-2 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-tifo-primary to-tifo-primary-light h-full transition-all duration-300"
                style={{ width: `${(currentStep / 5) * 100}%` }}
              />
            </div>
          </div>

          {/* Form Container */}
          <div className="glass rounded-3xl p-6 md:p-10 border border-orange-100 shadow-xl bg-white/90">
            {errorMsg && (
              <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-3">
                <AlertCircle size={18} className="mt-0.5 flex-shrink-0" />
                <div>{errorMsg}</div>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {/* STEP 1: PERSONAL */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <h3 className="font-bold text-xl text-gray-900 border-b border-orange-100 pb-3" style={{ fontFamily: 'var(--font-display)' }}>
                      01. Personal Information
                    </h3>

                    <div>
                      <label htmlFor="fullName" className="block text-sm font-semibold text-gray-800 mb-2">
                        Full Name <span className="text-tifo-primary">*</span>
                      </label>
                      <div className="relative">
                        <User size={18} className="absolute left-3.5 top-3.5 text-gray-400" />
                        <input
                          id="fullName"
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Aarav Sharma"
                          required
                          className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-tifo-primary focus:ring-2 focus:ring-orange-100 outline-none text-sm transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                          Email Address <span className="text-tifo-primary">*</span>
                        </label>
                        <div className="relative">
                          <Mail size={18} className="absolute left-3.5 top-3.5 text-gray-400" />
                          <input
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="aarav@college.edu.in"
                            required
                            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-tifo-primary focus:ring-2 focus:ring-orange-100 outline-none text-sm transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-2">
                          Mobile Number <span className="text-tifo-primary">*</span>
                        </label>
                        <div className="relative">
                          <Phone size={18} className="absolute left-3.5 top-3.5 text-gray-400" />
                          <input
                            id="phone"
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 98765 43210"
                            required
                            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-tifo-primary focus:ring-2 focus:ring-orange-100 outline-none text-sm transition-all"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: EDUCATION */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <h3 className="font-bold text-xl text-gray-900 border-b border-orange-100 pb-3" style={{ fontFamily: 'var(--font-display)' }}>
                      02. Education & Location
                    </h3>

                    <div>
                      <label htmlFor="college" className="block text-sm font-semibold text-gray-800 mb-2">
                        College / University Name <span className="text-tifo-primary">*</span>
                      </label>
                      <div className="relative">
                        <GraduationCap size={18} className="absolute left-3.5 top-3.5 text-gray-400" />
                        <input
                          id="college"
                          type="text"
                          name="college"
                          value={formData.college}
                          onChange={handleChange}
                          placeholder="e.g. Delhi Technological University / Amity University"
                          required
                          className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-tifo-primary focus:ring-2 focus:ring-orange-100 outline-none text-sm transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="course" className="block text-sm font-semibold text-gray-800 mb-2">
                          Course / Degree <span className="text-tifo-primary">*</span>
                        </label>
                        <input
                          id="course"
                          type="text"
                          name="course"
                          value={formData.course}
                          onChange={handleChange}
                          placeholder="e.g. B.Tech / BCA / BBA"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-tifo-primary focus:ring-2 focus:ring-orange-100 outline-none text-sm"
                        />
                      </div>

                      <div>
                        <label htmlFor="branch" className="block text-sm font-semibold text-gray-800 mb-2">
                          Branch / Specialization
                        </label>
                        <input
                          id="branch"
                          type="text"
                          name="branch"
                          value={formData.branch}
                          onChange={handleChange}
                          placeholder="e.g. Computer Science"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-tifo-primary focus:ring-2 focus:ring-orange-100 outline-none text-sm"
                        />
                      </div>

                      <div>
                        <label htmlFor="currentYear" className="block text-sm font-semibold text-gray-800 mb-2">
                          Current Year <span className="text-tifo-primary">*</span>
                        </label>
                        <select
                          id="currentYear"
                          name="currentYear"
                          value={formData.currentYear}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-tifo-primary focus:ring-2 focus:ring-orange-100 outline-none text-sm bg-white"
                        >
                          {yearOptions.map((yr) => (
                            <option key={yr} value={yr}>
                              {yr}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="city" className="block text-sm font-semibold text-gray-800 mb-2">
                          City <span className="text-tifo-primary">*</span>
                        </label>
                        <div className="relative">
                          <MapPin size={18} className="absolute left-3.5 top-3.5 text-gray-400" />
                          <input
                            id="city"
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="e.g. New Delhi / Bengaluru"
                            required
                            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-tifo-primary focus:ring-2 focus:ring-orange-100 outline-none text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="state" className="block text-sm font-semibold text-gray-800 mb-2">
                          State <span className="text-tifo-primary">*</span>
                        </label>
                        <input
                          id="state"
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          placeholder="e.g. Delhi / Karnataka / Maharashtra"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-tifo-primary focus:ring-2 focus:ring-orange-100 outline-none text-sm"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: INTERESTS & SKILLS */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <h3 className="font-bold text-xl text-gray-900 border-b border-orange-100 pb-3" style={{ fontFamily: 'var(--font-display)' }}>
                      03. Fields of Interest & Skills
                    </h3>

                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Fields of Interest (Select all that apply) <span className="text-tifo-primary">*</span>
                      </label>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {interestOptions.map((item) => {
                          const selected = formData.interests.includes(item)
                          return (
                            <button
                              key={item}
                              type="button"
                              onClick={() => toggleInterest(item)}
                              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                                selected
                                  ? 'bg-tifo-primary text-white shadow-md'
                                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                              }`}
                            >
                              {item}
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">Key Skills</label>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {skillOptions.map((skill) => {
                          const selected = formData.skills.includes(skill)
                          return (
                            <button
                              key={skill}
                              type="button"
                              onClick={() => toggleSkill(skill)}
                              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                                selected
                                  ? 'bg-orange-100 border border-orange-300 text-tifo-primary font-bold'
                                  : 'bg-white border border-gray-200 text-gray-600 hover:border-gray-300'
                              }`}
                            >
                              + {skill}
                            </button>
                          )
                        })}
                      </div>
                      <input
                        type="text"
                        value={customSkillInput}
                        onChange={(e) => setCustomSkillInput(e.target.value)}
                        onKeyDown={addCustomSkill}
                        placeholder="Add custom skill (Press Enter)"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:border-tifo-primary outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="priorExperience" className="block text-sm font-semibold text-gray-800 mb-2">
                        Prior Experience (Optional)
                      </label>
                      <textarea
                        id="priorExperience"
                        name="priorExperience"
                        rows={3}
                        value={formData.priorExperience}
                        onChange={handleChange}
                        placeholder="Tell us about any previous leadership, ambassador, internship, startup, event, community, or volunteering experience."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-tifo-primary outline-none"
                      />
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: QUESTIONS & RESUME */}
                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <h3 className="font-bold text-xl text-gray-900 border-b border-orange-100 pb-3" style={{ fontFamily: 'var(--font-display)' }}>
                      04. Additional Questions & Resume
                    </h3>

                    <div>
                      <label htmlFor="whyJoin" className="block text-sm font-semibold text-gray-800 mb-2">
                        Why do you want to become a TIFO Student Ambassador? <span className="text-tifo-primary">*</span>
                      </label>
                      <textarea
                        id="whyJoin"
                        name="whyJoin"
                        rows={3}
                        value={formData.whyJoin}
                        onChange={handleChange}
                        placeholder="Share your motivation, curiosity, and what excites you about TIFO."
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-tifo-primary outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="campusPromotionPlan" className="block text-sm font-semibold text-gray-800 mb-2">
                        What would you do to promote TIFO on your campus? <span className="text-tifo-primary">*</span>
                      </label>
                      <textarea
                        id="campusPromotionPlan"
                        name="campusPromotionPlan"
                        rows={3}
                        value={formData.campusPromotionPlan}
                        onChange={handleChange}
                        placeholder="Describe your ideas (e.g. student groups, social media, events, word-of-mouth)."
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-tifo-primary outline-none"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="campusReach" className="block text-sm font-semibold text-gray-800 mb-2">
                          Approximate Campus Reach
                        </label>
                        <select
                          id="campusReach"
                          name="campusReach"
                          value={formData.campusReach}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm bg-white outline-none"
                        >
                          {reachOptions.map((r) => (
                            <option key={r} value={r}>
                              {r}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="linkedin" className="block text-sm font-semibold text-gray-800 mb-2">
                          LinkedIn Profile URL
                        </label>
                        <input
                          id="linkedin"
                          type="url"
                          name="linkedin"
                          value={formData.linkedin}
                          onChange={handleChange}
                          placeholder="https://linkedin.in/in/username"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="resume-upload" className="block text-sm font-semibold text-gray-800 mb-2">
                        Resume / CV (Optional - Max 5MB PDF, DOC, DOCX)
                      </label>
                      <div className="border-2 border-dashed border-orange-200 rounded-2xl p-6 text-center bg-orange-50/50 hover:bg-orange-50 transition-colors cursor-pointer relative">
                        <input
                          id="resume-upload"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                        />
                        <Upload size={24} className="mx-auto text-tifo-primary mb-2" />
                        {formData.resume ? (
                          <p className="text-xs font-bold text-gray-800">{formData.resume.name}</p>
                        ) : (
                          <p className="text-xs text-gray-600">Click or drag file to upload resume</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 5: REVIEW & CONSENT */}
                {currentStep === 5 && (
                  <motion.div
                    key="step5"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <h3 className="font-bold text-xl text-gray-900 border-b border-orange-100 pb-3" style={{ fontFamily: 'var(--font-display)' }}>
                      05. Review & Confirmation
                    </h3>

                    {/* Summary Card */}
                    <div className="p-5 rounded-2xl bg-orange-50/50 border border-orange-200 space-y-3 text-xs text-gray-700">
                      <div className="flex justify-between">
                        <span className="font-semibold">Applicant:</span>
                        <span className="font-bold text-gray-900">{formData.fullName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">Email:</span>
                        <span>{formData.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">College:</span>
                        <span>{formData.college}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">Course & Year:</span>
                        <span>{formData.course} ({formData.currentYear})</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">Location:</span>
                        <span>{formData.city}, {formData.state}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">Interests:</span>
                        <span>{formData.interests.join(', ')}</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-gray-200 bg-white">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          name="consent"
                          checked={formData.consent}
                          onChange={handleChange}
                          className="mt-1 w-4 h-4 text-tifo-primary rounded border-gray-300 focus:ring-tifo-primary"
                        />
                        <span className="text-xs text-gray-700 leading-relaxed">
                          I confirm that the information provided by me is accurate and I agree to be contacted by TIFO regarding the Student Ambassador Program.
                        </span>
                      </label>
                    </div>

                    <p className="text-[11px] text-gray-500 italic">
                      By submitting this application, you understand that submission does not guarantee selection. Shortlisted candidates will be invited for an online interview.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="mt-8 pt-6 border-t border-orange-100 flex items-center justify-between">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="tifo-btn-secondary py-2.5 px-5 text-sm inline-flex items-center gap-2"
                  >
                    <ArrowLeft size={16} /> Back
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < 5 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="tifo-btn-primary py-2.5 px-6 text-sm inline-flex items-center gap-2"
                  >
                    Continue <ArrowRight size={16} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={submitting}
                    className="tifo-btn-primary py-3 px-8 text-sm inline-flex items-center gap-2 disabled:opacity-50"
                  >
                    {submitting ? 'Submitting...' : 'Submit Application'}
                    {!submitting && <CheckCircle2 size={18} />}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
