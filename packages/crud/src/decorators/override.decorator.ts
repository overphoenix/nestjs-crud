import { BaseRouteName } from '../types/base-route-name.type.js';
import { OVERRIDE_METHOD_METADATA } from '../constants.js';

export const Override = (name?: BaseRouteName) => (target, key, descriptor: PropertyDescriptor) => {
  Reflect.defineMetadata(OVERRIDE_METHOD_METADATA, name || `${key}Base`, target[key]);
  return descriptor;
};
