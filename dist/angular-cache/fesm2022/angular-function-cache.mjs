import * as i0 from '@angular/core';
import { Injectable } from '@angular/core';

class MemoUtils {
    static cache = new Map();
    static memoize(fn, resolver) {
        return (...args) => {
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

function Memoize(resolver) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        const cache = new Map();
        descriptor.value = function (...args) {
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

class MemoService {
    clearCache() {
        MemoUtils.clearCache();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: MemoService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: MemoService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.5", ngImport: i0, type: MemoService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

/*
 * Public API Surface of angular-cache
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MemoService, MemoUtils, Memoize };
//# sourceMappingURL=angular-function-cache.mjs.map
