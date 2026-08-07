export interface AmbassadorFormData {
  fullName: string
  email: string
  phone: string

  college: string
  course: string
  branch: string
  currentYear: string
  city: string
  state: string

  interests: string[]
  skills: string[]

  priorExperience: string

  whyJoin: string
  campusPromotionPlan: string
  leadershipExperience: string

  campusReach: string

  linkedin: string
  instagram: string
  additionalNotes: string

  resume: File | null
  consent: boolean
}

export interface ApplicationSubmitResponse {
  success: boolean
  message: string
  applicationId?: string
  errors?: string[]
  data?: {
    applicationId: string
    fullName: string
    email: string
    college: string
    createdAt: string
  }
}
