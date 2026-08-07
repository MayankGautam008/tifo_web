import mongoose from 'mongoose'
import dns from 'dns'

try {
  dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1'])
} catch (_e) {}

export const connectDB = async (): Promise<void> => {
  const connStr = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/tifo_web'

  try {
    await mongoose.connect(connStr, { serverSelectionTimeoutMS: 8000 })
    console.log(`[Database] MongoDB connected successfully: ${mongoose.connection.host}`)
    return
  } catch (error: any) {
    console.warn(`[Database] Primary connection attempt failed (${error.code || error.message}). Testing direct seed connection...`)
  }

  // Fallback direct seed string if ISP/DNS blocks SRV queries
  if (connStr.includes('mongodb.net')) {
    try {
      const directSeedStr = 'mongodb://shashankwork247_db_user:wz3lco8B5rGQTOlZ@msme-bot-shard-00-00.9xgvazm.mongodb.net:27017,msme-bot-shard-00-01.9xgvazm.mongodb.net:27017,msme-bot-shard-00-02.9xgvazm.mongodb.net:27017/msme_diary?ssl=true&replicaSet=atlas-138z58-shard-0&authSource=admin&retryWrites=true&w=majority'
      await mongoose.connect(directSeedStr, { serverSelectionTimeoutMS: 8000 })
      console.log(`[Database] MongoDB connected via Direct Seed: ${mongoose.connection.host}`)
      return
    } catch (fallbackErr) {
      console.error('[Database] Direct seed connection error:', fallbackErr)
    }
  }

  console.warn('[Database] Backend running in graceful mode. Application API will respond cleanly.')
}
