import { ValidationPipeOptions } from '@nestjs/common';

import { CrudRoutesFactory } from '../crud/index.js';
import { ModelOptions } from './model-options.interface.js';
import { ParamsOptions } from './params-options.interface.js';
import { QueryOptions } from './query-options.interface.js';
import { RoutesOptions } from './routes-options.interface.js';
import { AuthOptions } from './auth-options.interface.js';
import { DtoOptions } from './dto-options.interface.js';
import { SerializeOptions } from './serialize-options.interface.js';

export interface CrudRequestOptions {
  query?: QueryOptions;
  routes?: RoutesOptions;
  params?: ParamsOptions;
}

export interface CrudOptions {
  model: ModelOptions;
  dto?: DtoOptions;
  serialize?: SerializeOptions;
  query?: QueryOptions;
  routes?: RoutesOptions;
  routesFactory?: typeof CrudRoutesFactory;
  params?: ParamsOptions;
  validation?: ValidationPipeOptions | false;
}

export interface MergedCrudOptions extends CrudOptions {
  auth?: AuthOptions;
}
