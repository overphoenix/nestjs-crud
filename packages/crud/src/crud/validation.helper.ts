import { ValidationPipe } from '@nestjs/common';
import { isFalse, isNil, safeRequire } from '@recalibratedsystems/nestjs-crud-util';
import { CrudValidationGroups } from '../enums/index.js';
import { CreateManyDto, CrudOptions, MergedCrudOptions } from '../interfaces/index.js';
import { ApiProperty } from './swagger.helper.js';

const validator = safeRequire('@nestjs/class-validator', () => require('@nestjs/class-validator'));
const transformer = safeRequire('@nestjs/class-transformer', () => require('@nestjs/class-transformer'));

class BulkDto<T> implements CreateManyDto<T> {
  bulk: T[];
}

export class Validation {
  static getValidationPipe(options: CrudOptions, group?: CrudValidationGroups): ValidationPipe {
    return validator && !isFalse(options.validation)
      ? new ValidationPipe({
          ...(options.validation || {}),
          groups: group ? [group] : undefined,
        })
      : /* istanbul ignore next */ undefined;
  }

  static createBulkDto<T = any>(options: MergedCrudOptions): any {
    /* istanbul ignore else */
    if (validator && transformer && !isFalse(options.validation)) {
      const { IsArray, ArrayNotEmpty, ValidateNested } = validator;
      const { Type } = transformer;
      const hasDto = !isNil(options.dto.create);
      const groups = !hasDto ? [CrudValidationGroups.CREATE] : undefined;
      const always = hasDto ? true : undefined;
      const Model = hasDto ? options.dto.create : options.model.type;

      // tslint:disable-next-line:max-classes-per-file
      class BulkDtoImpl implements CreateManyDto<T> {
        @ApiProperty({ type: Model, isArray: true })
        @IsArray({ groups, always })
        @ArrayNotEmpty({ groups, always })
        @ValidateNested({ each: true, groups, always })
        @Type(() => Model)
        bulk: T[];
      }

      Object.defineProperty(BulkDtoImpl, 'name', {
        writable: false,
        value: `CreateMany${options.model.type.name}Dto`,
      });

      return BulkDtoImpl;
    } else {
      return BulkDto;
    }
  }
}
