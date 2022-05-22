import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  public readonly favoriteButton = {
    isHidden: true,
    isActive: false,
  };

  public favorite$ = new Subject<boolean>();

  public hideFavoriteButton(): void {
    this.favoriteButton.isHidden = true;
  }

  public showFavoriteButton(): void {
    this.favoriteButton.isHidden = false;
  }

  public setFavoriteButtonState(isActive: boolean): void {
    this.favoriteButton.isActive = isActive;
  }

  public toggleFavoriteButton(): void {
    this.favoriteButton.isActive = !this.favoriteButton.isActive;
    this.favorite$.next(this.favoriteButton.isActive);
  }
}
