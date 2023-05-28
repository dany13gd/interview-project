import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  private readonly storagePrefix: string = 'TA-';
  private enableSearchForm$: Subject<boolean> = new Subject<boolean>();
  public searchFormEnabled$ = this.enableSearchForm$.asObservable();
  public searchFormEnabled = false;

  constructor() {}

  public storageSet<T>(name: string, elem: T): void {
    sessionStorage.setItem(
      `${this.storagePrefix}${name}`,
      JSON.stringify(elem)
    );
  }

  public storageGet(name: string, ignorePrefix?: boolean): any {
    const item = ignorePrefix ? name : `${this.storagePrefix}${name}`;
    return JSON.parse(sessionStorage.getItem(item) as string);
  }

  public storageDelete(name: string): void {
    sessionStorage.removeItem(`${this.storagePrefix}${name}`);
  }

  public storageDeleteAll(): void {
    sessionStorage.clear();
  }
}
