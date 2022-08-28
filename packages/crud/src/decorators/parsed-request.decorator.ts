import { createParamDecorator } from '@nestjs/common';

import { PARSED_CRUD_REQUEST_KEY } from '../constants.js';
import { R } from '../crud/reflection.helper.js';

export const ParsedRequest = createParamDecorator((_, ctx): ParameterDecorator => {
  return R.getContextRequest(ctx)[PARSED_CRUD_REQUEST_KEY];
});
