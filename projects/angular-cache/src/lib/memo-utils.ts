export class MemoUtils {
    private static cache = new Map<string, any>();
  
    static memoize(fn: Function, resolver?: (...args: any[]) => string): Function {
      return (...args: any[]): any => {
        const key = resolver ? resolver(...args) : JSON.stringify(args);
        if (this.cache.has(key)) {
          return this.cache.get(key);
        }
        const result = fn(...args);
        this.cache.set(key, result);
        return result;
      };
    }
  
    static clearCache() {
      this.cache.clear();
    }
  }
  