export interface NotificationItem {
  _id: string
  title: string
  message: string
  link?: string
  badge?: string
  type: 'info' | 'announcement' | 'urgent' | 'promo'
  isActive?: boolean
  createdAt: string
}

export interface NotificationResponse {
  success: boolean
  count: number
  data: NotificationItem[]
}
