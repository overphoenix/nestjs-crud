import { ExecutionContext } from '@nestjs/common';
import { R } from '../crud/reflection.helper.js';
import { CrudActions } from '../enums/index.js';
import { MergedCrudOptions } from '../interfaces/index.js';

export class CrudBaseInterceptor {
  protected getCrudInfo(context: ExecutionContext): {
    ctrlOptions: MergedCrudOptions;
    crudOptions: Partial<MergedCrudOptions>;
    action: CrudActions;
  } {
    const ctrl = context.getClass();
    const handler = context.getHandler();
    const ctrlOptions = R.getCrudOptions(ctrl);
    const crudOptions = ctrlOptions
      ? ctrlOptions
      : {
          query: {},
          routes: {},
          params: {},
        };
    const action = R.getAction(handler);

    return { ctrlOptions, crudOptions, action };
  }
}
