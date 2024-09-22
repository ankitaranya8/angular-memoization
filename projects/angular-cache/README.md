# Angular Memoization Library

## Overview

The Angular Memoization Library provides utilities and decorators to optimize performance by caching the results of expensive computations. This library allows you to easily implement memoization design patterns in your Angular applications.

## Features

- Memoization decorator for class methods.
- Utility functions for manual memoization.
- A service to manage and clear cache.
- Compatible with Angular versions 8 to 18.

## Installation

You can install the library via NPM:

```bash
npm install angular-cache
```

## Using the Memoization Library
- Once the library is installed, Angular developers can easily integrate it into their components and services.

- Example 1: Using the Memoize Decorator in a Service - In a service, memoize a computationally expensive function using the Memoize decorator:

```javascript
import { Injectable } from '@angular/core';
import { Memoize } from 'angular-cache';

@Injectable({
  providedIn: 'root'
})
export class ExpensiveCalculationService {

  @Memoize()
  calculateFactorial(n: number): number {
    if (n <= 1) return 1;
    return n * this.calculateFactorial(n - 1);
  }
}
```

In the above example, the calculateFactorial method is decorated with @Memoize(). If called with the same input, it will return the cached result.

- Example 2: Using the MemoUtils Class - You can manually memoize a function using MemoUtils:

```javascript
import { MemoUtils } from 'angular-cache';

export class SomeComponent {
  expensiveOperation = MemoUtils.memoize((a: number, b: number) => {
    // Simulate expensive computation
    return a + b;
  });

  run() {
    console.log(this.expensiveOperation(2, 3)); // Computes and caches
    console.log(this.expensiveOperation(2, 3)); // Retrieves from cache
  }
}
```

- Example 3: Clearing Cache via Service - If you need to clear the memoization cache at any point in your app, you can use the MemoService:

```javascript
import { MemoService } from 'angular-cache';

@Component({
  selector: 'app-some-component',
  template: `<button (click)="clearCache()">Clear Cache</button>`
})
export class SomeComponent {
  constructor(private memoService: MemoService) {}

  clearCache() {
    this.memoService.clearCache();
  }
}
```
