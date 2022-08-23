import { ParsedRequestParams } from '@recalibratedsystems/netsjs-crud-request';

import { CrudRequestOptions } from '../interfaces';

export interface CrudRequest {
  parsed: ParsedRequestParams;
  options: CrudRequestOptions;
}
