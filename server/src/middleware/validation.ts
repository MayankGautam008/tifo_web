import { Request, Response, NextFunction } from 'express'

export const validateAmbassadorApplication = (req: Request, res: Response, next: NextFunction): void => {
  const {
    fullName,
    email,
    phone,
    college,
    course,
    currentYear,
    city,
    state,
    whyJoin,
    campusPromotionPlan,
    consent,
  } = req.body

  const errors: string[] = []

  if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
    errors.push('Full name is required (minimum 2 characters).')
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email || !emailRegex.test(email.trim())) {
    errors.push('A valid email address is required.')
  }

  const phoneRegex = /^(\+91[\-\s]?)?[0-9]{10}$/
  if (!phone || !phoneRegex.test(phone.trim().replace(/[\s\-]/g, ''))) {
    errors.push('A valid 10-digit phone number is required.')
  }

  if (!college || typeof college !== 'string' || college.trim().length < 2) {
    errors.push('College/University name is required.')
  }

  if (!course || typeof course !== 'string' || course.trim().length < 1) {
    errors.push('Course/Degree is required.')
  }

  if (!currentYear || typeof currentYear !== 'string') {
    errors.push('Current year of study is required.')
  }

  if (!city || typeof city !== 'string' || city.trim().length < 2) {
    errors.push('City is required.')
  }

  if (!state || typeof state !== 'string' || state.trim().length < 2) {
    errors.push('State is required.')
  }

  if (!whyJoin || typeof whyJoin !== 'string' || whyJoin.trim().length < 20) {
    errors.push('Please explain why you want to join TIFO (at least 20 characters).')
  }

  if (!campusPromotionPlan || typeof campusPromotionPlan !== 'string' || campusPromotionPlan.trim().length < 20) {
    errors.push('Please detail your campus promotion plan (at least 20 characters).')
  }

  if (consent !== true && consent !== 'true') {
    errors.push('You must accept the terms and consent to be contacted.')
  }

  if (errors.length > 0) {
    res.status(400).json({ success: false, errors })
    return
  }

  next()
}
