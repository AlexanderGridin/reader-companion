import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  template: '',
})
export abstract class PageBase implements OnDestroy {
  public destroy$: Subject<void> = new Subject<void>();

  private _isLoading = false;

  public startLoading(): void {
    this._isLoading = true;
  }

  public endLoading(): void {
    this._isLoading = false;
  }

  public get isLoading(): boolean {
    return this._isLoading;
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
