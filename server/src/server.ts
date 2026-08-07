import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import path from 'path'
import fs from 'fs'
import dotenv from 'dotenv'
import { connectDB } from './config/database.js'
import ambassadorRoutes from './routes/ambassador.routes.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Connect to Database
connectDB()

// Security & Middleware
app.use(
  helmet({
    crossOriginResourcePolicy: { policy: 'cross-origin' },
    contentSecurityPolicy: false, // Allow inline styles & fonts in production
  })
)

const allowedOrigins = [
  process.env.CLIENT_URL,
  'http://localhost:5173',
  'http://127.0.0.1:5173',
].filter(Boolean) as string[]

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes(origin) || process.env.NODE_ENV === 'production') {
        callback(null, true)
      } else {
        callback(null, true)
      }
    },
    credentials: true,
  })
)

// Rate limiting for application endpoints
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 30, // max 30 requests per windowMs per IP
  message: { success: false, message: 'Too many requests from this IP, please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
})

app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

// Static file serving for uploads
const uploadDir = path.join(process.cwd(), 'uploads')
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true })
}
app.use('/uploads', express.static(uploadDir))

// API Routes
app.use('/api/ambassadors', limiter, ambassadorRoutes)

// Health Check
app.get('/api/health', (_req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Serve static frontend build if available (Unified Web Service on Render)
const frontendDistPath = path.join(process.cwd(), '..', 'dist')
if (fs.existsSync(frontendDistPath)) {
  app.use(express.static(frontendDistPath))
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) return next()
    res.sendFile(path.join(frontendDistPath, 'index.html'))
  })
}

// Error Handler Middleware
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error('[Server Error]', err)
  const statusCode = err.statusCode || 500
  res.status(statusCode).json({
    success: false,
    message: err.message || 'An unexpected server error occurred.',
  })
})

app.listen(PORT, () => {
  console.log(`[Server] TIFO Backend server running on port ${PORT}`)
  console.log(`[Server] API endpoint: http://localhost:${PORT}/api/ambassadors/apply`)
})

export default app
