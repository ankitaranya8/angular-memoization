import { Injectable } from '@angular/core';
import { MemoUtils } from './memo-utils';

@Injectable({
  providedIn: 'root'
})
export class MemoService {
  clearCache(): void {
    MemoUtils.clearCache();
  }
}
