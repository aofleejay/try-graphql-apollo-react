import mongoose from 'mongoose';

const workplaceSchema = new mongoose.Schema({
  name: String,
  slug: String,
  description: String,
}, { timestamps: true, versionKey: false });

const workplaceModel = mongoose.model('workplace', workplaceSchema);

export default workplaceModel;
