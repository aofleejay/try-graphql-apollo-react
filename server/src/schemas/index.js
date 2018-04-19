import { mergeSchemas } from 'graphql-tools';
import workplaceSchema from './workplace';

export default mergeSchemas({
  schemas: [workplaceSchema],
});
