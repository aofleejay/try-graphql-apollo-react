import workplaceSchema from './schemas/workplace';

export default {
  find: () => workplaceSchema.find({}),
  create: (workplaceInput = {}) => workplaceSchema.create(workplaceInput),
};
