import { CrudRoutesFactory } from '../crud/index.js';
import { CrudOptions } from '../interfaces/index.js';

export const Crud =
  (options: CrudOptions) =>
  (target: unknown): void => {
    const factoryMethod = options.routesFactory || CrudRoutesFactory;
    const factory = new factoryMethod(target, options);
  };
