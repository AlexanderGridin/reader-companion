import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  private _isOpen = false;

  public open(): void {
    this._isOpen = true;
  }

  public close(): void {
    this._isOpen = false;
  }

  public toggleVisibility(): void {
    this._isOpen = !this._isOpen;
  }

  public get isOpen(): boolean {
    return this._isOpen;
  }
}
