import { Router } from 'express'
import {
  getNotifications,
  createNotification,
  deleteNotification,
} from '../controllers/notification.controller.js'

const router = Router()

router.get('/', getNotifications)
router.post('/', createNotification)
router.delete('/:id', deleteNotification)

export default router
