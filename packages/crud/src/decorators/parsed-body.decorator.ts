import { PARSED_BODY_METADATA } from '../constants.js';

export const ParsedBody = () => (target, key, index) => {
  Reflect.defineMetadata(PARSED_BODY_METADATA, { index }, target[key]);
};
