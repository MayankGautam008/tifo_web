import { Request, Response } from 'express'
import Notification from '../models/Notification.js'

// Seed default initial notifications if DB is empty
const defaultNotifications = [
  {
    title: '🎓 Join the TIFO Student Ambassador Program!',
    message: 'Represent TIFO on your campus, build leadership skills, earn exclusive rewards, and get certified.',
    link: '/student-ambassador',
    badge: 'Ambassador',
    type: 'promo' as const,
    isActive: true,
  },
  {
    title: '🚀 TIFO AI Food Ecosystem Launch Update',
    message: 'Experience smart personalized meal recommendations tailored specifically for students and busy professionals.',
    link: '/ai-ecosystem',
    badge: 'New Feature',
    type: 'announcement' as const,
    isActive: true,
  },
]

export const getNotifications = async (_req: Request, res: Response): Promise<void> => {
  try {
    let notifications = await Notification.find({ isActive: true }).sort({ createdAt: -1 })

    // Auto-seed if database has no notifications yet
    if (notifications.length === 0) {
      try {
        await Notification.insertMany(defaultNotifications)
        notifications = await Notification.find({ isActive: true }).sort({ createdAt: -1 })
      } catch (seedErr) {
        console.warn('[NotificationController] Failed to auto-seed DB, returning defaults:', seedErr)
        // If DB is offline/readonly, return in-memory defaults
        res.status(200).json({
          success: true,
          count: defaultNotifications.length,
          data: defaultNotifications.map((n, idx) => ({ ...n, _id: `seed-notif-${idx + 1}`, createdAt: new Date() })),
        })
        return
      }
    }

    res.status(200).json({
      success: true,
      count: notifications.length,
      data: notifications,
    })
  } catch (error: any) {
    console.error('[NotificationController] Error fetching notifications:', error)
    // Return graceful default response if database query fails
    res.status(200).json({
      success: true,
      count: defaultNotifications.length,
      data: defaultNotifications.map((n, idx) => ({ ...n, _id: `seed-notif-${idx + 1}`, createdAt: new Date() })),
    })
  }
}

export const createNotification = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, message, link, badge, type } = req.body

    if (!title || !message) {
      res.status(400).json({
        success: false,
        message: 'Title and message are required fields.',
      })
      return
    }

    const newNotification = await Notification.create({
      title,
      message,
      link: link || '',
      badge: badge || 'Announcement',
      type: type || 'announcement',
    })

    res.status(201).json({
      success: true,
      message: 'Notification created successfully.',
      data: newNotification,
    })
  } catch (error: any) {
    console.error('[NotificationController] Error creating notification:', error)
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to create notification.',
    })
  }
}

export const deleteNotification = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params

    const deleted = await Notification.findByIdAndDelete(id)

    if (!deleted) {
      res.status(404).json({
        success: false,
        message: 'Notification not found.',
      })
      return
    }

    res.status(200).json({
      success: true,
      message: 'Notification deleted from database successfully.',
      data: deleted,
    })
  } catch (error: any) {
    console.error('[NotificationController] Error deleting notification:', error)
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to delete notification.',
    })
  }
}
