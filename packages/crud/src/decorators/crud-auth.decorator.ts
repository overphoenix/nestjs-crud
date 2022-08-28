import { R } from '../crud/reflection.helper.js';
import { AuthOptions } from '../interfaces/index.js';

export const CrudAuth =
  (options: AuthOptions) =>
  (target: unknown): void => {
    R.setCrudAuthOptions(options, target);
  };
