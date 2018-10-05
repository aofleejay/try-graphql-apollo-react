import { mergeSchemas } from 'apollo-server-express';
import workplaceSchema from './workplace';

export default mergeSchemas({
  schemas: [workplaceSchema],
});
