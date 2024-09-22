export function Memoize(resolver?: (...args: any[]) => string): MethodDecorator {
    return function (target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>) {
      const originalMethod = descriptor.value;
      const cache = new Map<string, any>();
  
      descriptor.value = function (...args: any[]) {
        const key = resolver ? resolver(...args) : JSON.stringify(args);
        if (cache.has(key)) {
          return cache.get(key);
        }
        const result = originalMethod.apply(this, args);
        cache.set(key, result);
        return result;
      };
  
      return descriptor;
    };
  }
  