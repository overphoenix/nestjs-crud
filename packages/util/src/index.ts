export * from './checks.util';
export * from './obj.util';
export * from './types';

export function safeRequire<T = any>(path: string, loader?: () => T): T | null {
  try {
    /* istanbul ignore next */
    const pack = loader ? loader() : require(path);
    return pack;
  } catch (_) {
    /* istanbul ignore next */
    return null;
  }
}
