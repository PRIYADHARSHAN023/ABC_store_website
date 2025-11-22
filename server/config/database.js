import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const mongoUri = `mongodb+srv://priyadharshan023_db_user:${encodeURIComponent(process.env.MONGODB_PASSWORD)}@cluster0.em0f43b.mongodb.net/?appName=Cluster0`
    const conn = await mongoose.connect(mongoUri)
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`⚠️  MongoDB connection failed: ${error.message}`)
    console.log('📦 Server will use mock data instead')
  }
}

export default connectDB
