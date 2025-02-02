import { QueryFields, QuerySort } from '@recalibratedsystems/nestjs-crud-request/lib/types/request-query.types.js';

import { QueryFilterOption } from '../types/index.js';

export interface QueryOptions {
  allow?: QueryFields;
  exclude?: QueryFields;
  persist?: QueryFields;
  filter?: QueryFilterOption;
  join?: JoinOptions;
  sort?: QuerySort[];
  limit?: number;
  maxLimit?: number;
  cache?: number | false;
  alwaysPaginate?: boolean;
  softDelete?: boolean;
}

export interface JoinOptions {
  [key: string]: JoinOption;
}

export interface JoinOption {
  alias?: string;
  allow?: QueryFields;
  eager?: boolean;
  exclude?: QueryFields;
  persist?: QueryFields;
  select?: false;
  required?: boolean;
}
