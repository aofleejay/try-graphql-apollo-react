import mongoose from 'mongoose'

const workplaceSchema = new mongoose.Schema({
  name: String,
  description: String,
  coverImage: String,
}, { timestamps: true, versionKey: false })

const workplaceModel = mongoose.model('workplace', workplaceSchema)

export default workplaceModel
