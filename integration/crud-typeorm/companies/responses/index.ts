import { SerializeOptions } from '@recalibratedsystems/nestjs-crud';
import { GetCompanyResponseDto } from './get-company-response.dto';

export const serialize: SerializeOptions = {
  get: GetCompanyResponseDto,
};
