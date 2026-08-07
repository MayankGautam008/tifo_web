import { Schema, model, Document } from 'mongoose'

export interface IAmbassadorApplication extends Document {
  applicationId: string
  fullName: string
  email: string
  phone: string
  college: string
  course: string
  branch?: string
  currentYear: string
  city: string
  state: string
  interests: string[]
  skills: string[]
  priorExperience?: string
  whyJoin: string
  campusPromotionPlan: string
  leadershipExperience?: string
  campusReach?: string
  linkedin?: string
  instagram?: string
  additionalNotes?: string
  resume?: {
    originalName: string
    url: string
    storageKey: string
  }
  status: 'submitted' | 'under_review' | 'shortlisted' | 'interview_scheduled' | 'selected' | 'rejected' | 'waitlisted'
  interview?: {
    scheduled?: boolean
    scheduledAt?: Date
    meetingUrl?: string
    notes?: string
  }
  selection?: {
    selected?: boolean
    selectedAt?: Date
    notes?: string
  }
  createdAt: Date
  updatedAt: Date
}

const AmbassadorApplicationSchema = new Schema<IAmbassadorApplication>(
  {
    applicationId: { type: String, required: true, unique: true, index: true },
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true, index: true },
    phone: { type: String, required: true, trim: true, index: true },

    college: { type: String, required: true, trim: true, index: true },
    course: { type: String, required: true, trim: true },
    branch: { type: String, trim: true, default: '' },
    currentYear: { type: String, required: true, trim: true },
    city: { type: String, required: true, trim: true },
    state: { type: String, required: true, trim: true },

    interests: { type: [String], default: [] },
    skills: { type: [String], default: [] },

    priorExperience: { type: String, trim: true, default: '' },

    whyJoin: { type: String, required: true, trim: true },
    campusPromotionPlan: { type: String, required: true, trim: true },
    leadershipExperience: { type: String, trim: true, default: '' },

    campusReach: { type: String, trim: true, default: '' },

    linkedin: { type: String, trim: true, default: '' },
    instagram: { type: String, trim: true, default: '' },
    additionalNotes: { type: String, trim: true, default: '' },

    resume: {
      originalName: { type: String, default: '' },
      url: { type: String, default: '' },
      storageKey: { type: String, default: '' },
    },

    status: {
      type: String,
      enum: ['submitted', 'under_review', 'shortlisted', 'interview_scheduled', 'selected', 'rejected', 'waitlisted'],
      default: 'submitted',
      index: true,
    },

    interview: {
      scheduled: { type: Boolean, default: false },
      scheduledAt: { type: Date },
      meetingUrl: { type: String, default: '' },
      notes: { type: String, default: '' },
    },

    selection: {
      selected: { type: Boolean, default: false },
      selectedAt: { type: Date },
      notes: { type: String, default: '' },
    },
  },
  {
    timestamps: true,
  }
)

// Compound index for querying by college + status
AmbassadorApplicationSchema.index({ college: 1, status: 1 })
AmbassadorApplicationSchema.index({ createdAt: -1 })

export const AmbassadorApplication = model<IAmbassadorApplication>('AmbassadorApplication', AmbassadorApplicationSchema)
