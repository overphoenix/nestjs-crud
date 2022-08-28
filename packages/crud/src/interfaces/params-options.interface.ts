import { SwaggerEnumType } from '@nestjs/swagger/dist/types/swagger-enum.type.js';
import { ParamOptionType } from '@recalibratedsystems/nestjs-crud-request';

export interface ParamsOptions {
  [key: string]: ParamOption;
}

export interface ParamOption {
  field?: string;
  type?: ParamOptionType;
  enum?: SwaggerEnumType;
  primary?: boolean;
  disabled?: boolean;
}
