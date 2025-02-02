import { CrudService } from '../services/index.js';
import { CrudRequest, GetManyDefaultResponse, CreateManyDto } from '../interfaces/index.js';

export interface CrudController<T> {
  service: CrudService<T>;
  getManyBase?(req: CrudRequest): Promise<GetManyDefaultResponse<T> | T[]>;
  getOneBase?(req: CrudRequest): Promise<T>;
  createOneBase?(req: CrudRequest, dto: T | Partial<T>): Promise<T>;
  createManyBase?(req: CrudRequest, dto: CreateManyDto<T>): Promise<T[]>;
  updateOneBase?(req: CrudRequest, dto: T | Partial<T>): Promise<T>;
  replaceOneBase?(req: CrudRequest, dto: T | Partial<T>): Promise<T>;
  deleteOneBase?(req: CrudRequest): Promise<void | T>;
  recoverOneBase?(req: CrudRequest): Promise<void | T>;
}
