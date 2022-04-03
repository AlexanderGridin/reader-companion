import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PageTitleService {
  public readonly title = new Subject<string>();

  public setTitle(title: string): void {
    this.title.next(title);
  }
}
