import { RequestMethod } from '@nestjs/common';

import { BaseRouteName } from '../types/index.js';

export interface BaseRoute {
  name: BaseRouteName;
  path: string;
  method: RequestMethod;
  enable: boolean;
  override: boolean;
  withParams: boolean;
}
