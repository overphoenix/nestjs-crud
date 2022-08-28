import { ParsedRequestParams } from '@recalibratedsystems/nestjs-crud-request';

import { CrudRequestOptions } from '../interfaces/index.js';

export interface CrudRequest {
  parsed: ParsedRequestParams;
  options: CrudRequestOptions;
}
