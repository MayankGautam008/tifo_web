import React, { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Bell, Trash2, X, ExternalLink, Sparkles, CheckCheck, Info, Megaphone, Flame } from 'lucide-react'
import {
  fetchNotificationsFromApi,
  getDismissedNotificationIds,
  saveDismissedNotificationId,
  clearAllDismissedNotifications,
} from '../../services/notificationApi'
import type { NotificationItem } from '../../types/notification'

export default function NotificationBell() {
  const [isOpen, setIsOpen] = useState(false)
  const [notifications, setNotifications] = useState<NotificationItem[]>([])
  const [loading, setLoading] = useState(true)
  const panelRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  const loadNotifications = async () => {
    setLoading(true)
    const allNotifs = await fetchNotificationsFromApi()
    const dismissedIds = getDismissedNotificationIds()
    // Filter out locally dismissed notifications
    const activeNotifs = allNotifs.filter((n) => !dismissedIds.includes(n._id))
    setNotifications(activeNotifs)
    setLoading(false)
  }

  useEffect(() => {
    loadNotifications()
  }, [])

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  // Dismiss single notification locally for user
  const handleDismissOne = (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    saveDismissedNotificationId(id)
    setNotifications((prev) => prev.filter((item) => item._id !== id))
  }

  // Dismiss all notifications locally for user
  const handleDismissAll = () => {
    notifications.forEach((item) => saveDismissedNotificationId(item._id))
    setNotifications([])
  }

  // Handle clicking on notification card
  const handleNotificationClick = (link?: string) => {
    if (link) {
      setIsOpen(false)
      if (link.startsWith('http')) {
        window.open(link, '_blank')
      } else {
        navigate(link)
      }
    }
  }

  const getBadgeIcon = (type?: string) => {
    switch (type) {
      case 'promo':
        return <Sparkles size={13} className="text-[#C1440E]" />
      case 'urgent':
        return <Flame size={13} className="text-red-500" />
      case 'announcement':
        return <Megaphone size={13} className="text-blue-500" />
      default:
        return <Info size={13} className="text-emerald-500" />
    }
  }

  return (
    <div className="relative" ref={panelRef}>
      {/* Bell Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 rounded-xl text-gray-700 hover:text-[#C1440E] hover:bg-black/5 transition-colors focus:outline-none"
        aria-label="Open notifications"
        aria-expanded={isOpen}
      >
        <Bell size={20} />
        {notifications.length > 0 && (
          <span
            className="absolute top-1 right-1 flex items-center justify-center min-w-[18px] h-[18px] px-1 text-[10px] font-bold text-white rounded-full bg-[#C1440E] animate-pulse border-2 border-white shadow-sm"
          >
            {notifications.length}
          </span>
        )}
      </button>

      {/* Popover Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 mt-3 w-80 sm:w-96 rounded-2xl bg-white border border-gray-100 shadow-2xl z-50 overflow-hidden"
            style={{
              boxShadow: '0 20px 40px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.05)',
            }}
          >
            {/* Panel Header */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-[#FAF8F5] border-b border-gray-100">
              <div className="flex items-center gap-2">
                <span className="font-bold text-gray-900 text-sm" style={{ fontFamily: 'var(--font-display)' }}>
                  Notifications
                </span>
                {notifications.length > 0 && (
                  <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-[#C1440E]/10 text-[#C1440E]">
                    {notifications.length} new
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                {notifications.length > 0 && (
                  <button
                    onClick={handleDismissAll}
                    className="text-xs font-medium text-gray-500 hover:text-[#C1440E] transition-colors flex items-center gap-1"
                    title="Clear all notifications locally"
                  >
                    <CheckCheck size={14} />
                    Clear all
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-200/50 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Panel Body */}
            <div className="max-h-80 overflow-y-auto divide-y divide-gray-100">
              {loading ? (
                <div className="py-8 text-center text-xs text-gray-400">Loading notifications...</div>
              ) : notifications.length === 0 ? (
                <div className="py-10 text-center px-4">
                  <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-[#FAF8F5] flex items-center justify-center text-gray-400">
                    <Bell size={20} />
                  </div>
                  <p className="text-sm font-medium text-gray-700">All caught up!</p>
                  <p className="text-xs text-gray-400 mt-1">No active notifications available right now.</p>
                </div>
              ) : (
                notifications.map((item) => (
                  <div
                    key={item._id}
                    onClick={() => handleNotificationClick(item.link)}
                    className={`group relative p-4 flex gap-3 hover:bg-[#FAF8F5] transition-colors ${
                      item.link ? 'cursor-pointer' : ''
                    }`}
                  >
                    <div className="mt-0.5 p-2 rounded-xl bg-gray-50 group-hover:bg-white transition-colors border border-gray-100 flex-shrink-0">
                      {getBadgeIcon(item.type)}
                    </div>
                    <div className="flex-1 pr-6">
                      <div className="flex items-center gap-2 mb-1">
                        {item.badge && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase bg-gray-100 text-gray-700">
                            {item.badge}
                          </span>
                        )}
                        <span className="text-[10px] text-gray-400">
                          {new Date(item.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-semibold text-gray-900 leading-snug group-hover:text-[#C1440E] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed mt-1">{item.message}</p>
                      {item.link && (
                        <div className="inline-flex items-center gap-1 mt-2 text-xs font-semibold text-[#C1440E]">
                          View details <ExternalLink size={11} />
                        </div>
                      )}
                    </div>

                    {/* Delete / Dismiss button */}
                    <button
                      onClick={(e) => handleDismissOne(item._id, e)}
                      className="absolute top-3 right-3 p-1.5 rounded-lg text-gray-300 hover:text-red-500 hover:bg-red-50 transition-colors"
                      title="Delete notification for you"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Panel Footer */}
            <div className="px-4 py-2.5 bg-[#FAF8F5] border-t border-gray-100 text-center">
              <Link
                to="/student-ambassador"
                onClick={() => setIsOpen(false)}
                className="text-xs font-semibold text-[#C1440E] hover:underline"
              >
                🎓 Join Student Ambassador Program →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
