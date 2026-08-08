import mongoose, { Schema, Document } from 'mongoose'

export interface INotification extends Document {
  title: string
  message: string
  link?: string
  badge?: string
  type: 'info' | 'announcement' | 'urgent' | 'promo'
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

const NotificationSchema: Schema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
    link: { type: String, default: '' },
    badge: { type: String, default: 'Announcement' },
    type: {
      type: String,
      enum: ['info', 'announcement', 'urgent', 'promo'],
      default: 'announcement',
    },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model<INotification>('Notification', NotificationSchema)
