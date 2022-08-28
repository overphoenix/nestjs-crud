import { QueryFilter, SCondition } from '@recalibratedsystems/nestjs-crud-request/lib/types/request-query.types.js';

export type QueryFilterFunction = (search?: SCondition, getMany?: boolean) => SCondition | void;
export type QueryFilterOption = QueryFilter[] | SCondition | QueryFilterFunction;
