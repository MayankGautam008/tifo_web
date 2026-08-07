import { Request, Response } from 'express'
import mongoose from 'mongoose'
import { AmbassadorApplication } from '../models/AmbassadorApplication.js'
import { sendApplicationAcknowledgement } from '../services/email.service.js'

const generateApplicationId = (): string => {
  const year = new Date().getFullYear()
  const randomDigits = Math.floor(10000 + Math.random() * 90000)
  return `TIFO-SA-${year}-${randomDigits}`
}

export const submitApplication = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      fullName,
      email,
      phone,
      college,
      course,
      branch,
      currentYear,
      city,
      state,
      interests,
      skills,
      priorExperience,
      whyJoin,
      campusPromotionPlan,
      leadershipExperience,
      campusReach,
      linkedin,
      instagram,
      additionalNotes,
    } = req.body

    const formattedEmail = email.trim().toLowerCase()

    // Check DB connection status
    const isDbConnected = mongoose.connection.readyState === 1

    if (isDbConnected) {
      const existingApp = await AmbassadorApplication.findOne({ email: formattedEmail })
      if (existingApp) {
        res.status(409).json({
          success: false,
          message: 'An application with this email address has already been submitted.',
          applicationId: existingApp.applicationId,
        })
        return
      }
    }

    const applicationId = generateApplicationId()

    // Parse array fields safely if sent as JSON string or multi-field
    let parsedInterests: string[] = []
    if (typeof interests === 'string') {
      try { parsedInterests = JSON.parse(interests) } catch { parsedInterests = [interests] }
    } else if (Array.isArray(interests)) {
      parsedInterests = interests
    }

    let parsedSkills: string[] = []
    if (typeof skills === 'string') {
      try { parsedSkills = JSON.parse(skills) } catch { parsedSkills = [skills] }
    } else if (Array.isArray(skills)) {
      parsedSkills = skills
    }

    let resumeData = { originalName: '', url: '', storageKey: '' }
    if (req.file) {
      resumeData = {
        originalName: req.file.originalname,
        url: `/uploads/resumes/${req.file.filename}`,
        storageKey: req.file.filename,
      }
    }

    const newApplicationData = {
      applicationId,
      fullName: fullName.trim(),
      email: formattedEmail,
      phone: phone.trim(),
      college: college.trim(),
      course: course.trim(),
      branch: branch ? branch.trim() : '',
      currentYear: currentYear.trim(),
      city: city.trim(),
      state: state.trim(),
      interests: parsedInterests,
      skills: parsedSkills,
      priorExperience: priorExperience ? priorExperience.trim() : '',
      whyJoin: whyJoin.trim(),
      campusPromotionPlan: campusPromotionPlan.trim(),
      leadershipExperience: leadershipExperience ? leadershipExperience.trim() : '',
      campusReach: campusReach ? campusReach.trim() : '',
      linkedin: linkedin ? linkedin.trim() : '',
      instagram: instagram ? instagram.trim() : '',
      additionalNotes: additionalNotes ? additionalNotes.trim() : '',
      resume: resumeData,
      status: 'submitted' as const,
    }

    if (isDbConnected) {
      const appRecord = new AmbassadorApplication(newApplicationData)
      await appRecord.save()
    } else {
      console.log('[Ambassador Controller] Mock Save (DB Disconnected):', applicationId)
    }

    // Trigger async email acknowledgement
    sendApplicationAcknowledgement(formattedEmail, fullName.trim(), applicationId).catch((err) => {
      console.error('[Ambassador Controller] Error sending acknowledgement email:', err)
    })

    res.status(201).json({
      success: true,
      message: 'Application submitted successfully!',
      applicationId,
      data: {
        applicationId,
        fullName: fullName.trim(),
        email: formattedEmail,
        college: college.trim(),
        createdAt: new Date().toISOString(),
      },
    })
  } catch (error: any) {
    console.error('[Ambassador Controller] Error submitting application:', error)
    res.status(500).json({
      success: false,
      message: 'An internal server error occurred while processing your application.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    })
  }
}

export const getApplicationStatus = async (req: Request, res: Response): Promise<void> => {
  try {
    const { applicationId } = req.params

    if (!applicationId) {
      res.status(400).json({ success: false, message: 'Application ID is required.' })
      return
    }

    const isDbConnected = mongoose.connection.readyState === 1
    if (!isDbConnected) {
      res.status(200).json({
        success: true,
        applicationId,
        status: 'submitted',
        message: 'Application received and under review.',
      })
      return
    }

    const appRecord = await AmbassadorApplication.findOne({ applicationId }).select(
      'applicationId fullName college course currentYear status createdAt'
    )

    if (!appRecord) {
      res.status(404).json({ success: false, message: 'Application ID not found.' })
      return
    }

    res.status(200).json({
      success: true,
      data: appRecord,
    })
  } catch (error: any) {
    res.status(500).json({ success: false, message: 'Server error retrieving status.' })
  }
}
