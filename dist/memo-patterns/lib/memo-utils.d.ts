export declare class MemoUtils {
    private static cache;
    static memoize(fn: Function, resolver?: (...args: any[]) => string): Function;
    static clearCache(): void;
}
