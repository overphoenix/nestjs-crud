export * from './checks.util.js';
export * from './obj.util.js';
export * from './types/index.js';

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
