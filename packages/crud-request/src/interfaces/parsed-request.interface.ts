import { ObjectLiteral } from '@recalibratedsystems/nestjs-crud-util';
import { QueryFields, QueryFilter, QueryJoin, QuerySort, SCondition } from '../types/index.js';

export interface ParsedRequestParams {
  fields: QueryFields;
  paramsFilter: QueryFilter[];
  authPersist: ObjectLiteral;
  search: SCondition;
  filter: QueryFilter[];
  or: QueryFilter[];
  join: QueryJoin[];
  sort: QuerySort[];
  limit: number;
  offset: number;
  page: number;
  cache: number;
  includeDeleted: number;
}
