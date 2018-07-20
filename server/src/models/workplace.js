import workplaceSchema from './schemas/workplace'

export default {
  find: () => workplaceSchema.find(),
  findById: id => workplaceSchema.findOne({ _id: id }),
  create: (workplaceInput = {}) => workplaceSchema.create(workplaceInput),
}
