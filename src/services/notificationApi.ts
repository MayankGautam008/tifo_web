import type { NotificationItem, NotificationResponse } from '../types/notification'

const API_BASE_URL = import.meta.env.VITE_API_BASE || 'http://localhost:5000/api'
const LOCAL_DISMISSED_KEY = 'tifo_dismissed_notifications'

// Fallback initial notifications if server is unreachable
const MOCK_NOTIFICATIONS: NotificationItem[] = [
  {
    _id: 'notif-sa-001',
    title: '🎓 Become a TIFO Student Ambassador!',
    message: 'Lead student outreach on your campus, unlock exclusive perks, network with AI leaders, and get certified.',
    link: '/student-ambassador',
    badge: 'Ambassador',
    type: 'promo',
    createdAt: new Date().toISOString(),
  },
  {
    _id: 'notif-ai-002',
    title: '🚀 AI Food Ecosystem Interactive Preview',
    message: 'Explore our latest AI-driven personalized food recommendation technology designed for campus living.',
    link: '/ai-ecosystem',
    badge: 'New Feature',
    type: 'announcement',
    createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
  },
]

export async function fetchNotificationsFromApi(): Promise<NotificationItem[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/notifications`, {
      headers: { 'Content-Type': 'application/json' },
    })

    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`)

    const json: NotificationResponse = await res.json()
    if (json.success && Array.isArray(json.data)) {
      return json.data
    }
    return MOCK_NOTIFICATIONS
  } catch (error) {
    console.warn('[NotificationAPI] Unable to reach backend API, using fallback data:', error)
    return MOCK_NOTIFICATIONS
  }
}

// Local Storage Helper: Get dismissed notification IDs
export function getDismissedNotificationIds(): string[] {
  try {
    const stored = localStorage.getItem(LOCAL_DISMISSED_KEY)
    return stored ? JSON.parse(stored) : []
  } catch (e) {
    console.error('Error reading dismissed notifications from localStorage', e)
    return []
  }
}

// Local Storage Helper: Save a dismissed notification ID
export function saveDismissedNotificationId(id: string): void {
  try {
    const current = getDismissedNotificationIds()
    if (!current.includes(id)) {
      const updated = [...current, id]
      localStorage.setItem(LOCAL_DISMISSED_KEY, JSON.stringify(updated))
    }
  } catch (e) {
    console.error('Error saving dismissed notification to localStorage', e)
  }
}

// Local Storage Helper: Clear all local dismissals
export function clearAllDismissedNotifications(): void {
  try {
    localStorage.removeItem(LOCAL_DISMISSED_KEY)
  } catch (e) {
    console.error('Error clearing dismissed notifications in localStorage', e)
  }
}
