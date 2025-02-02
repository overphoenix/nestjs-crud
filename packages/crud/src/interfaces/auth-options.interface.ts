import { SCondition } from '@recalibratedsystems/nestjs-crud-request/lib/types/request-query.types.js';
import { ObjectLiteral } from '@recalibratedsystems/nestjs-crud-util';

export interface AuthGlobalOptions {
  property?: string;
}

export interface AuthOptions {
  property?: string;
  filter?: (req: any) => SCondition | void;
  or?: (req: any) => SCondition | void;
  persist?: (req: any) => ObjectLiteral;
}
