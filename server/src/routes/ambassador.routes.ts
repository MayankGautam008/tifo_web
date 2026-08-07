import { Router } from 'express'
import { submitApplication, getApplicationStatus } from '../controllers/ambassador.controller.js'
import { uploadResume } from '../middleware/upload.js'
import { validateAmbassadorApplication } from '../middleware/validation.js'

const router = Router()

// POST /api/ambassadors/apply
router.post(
  '/apply',
  uploadResume.single('resume'),
  validateAmbassadorApplication,
  submitApplication
)

// GET /api/ambassadors/status/:applicationId
router.get('/status/:applicationId', getApplicationStatus)

export default router
