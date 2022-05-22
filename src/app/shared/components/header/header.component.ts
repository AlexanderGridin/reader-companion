import { Component, Input } from '@angular/core';
import { HeaderService } from '@shared/services/header/header.service';
import { PageTitleService } from '@shared/services/page-title/page-title.service';
import { SidebarService } from '@shared/services/sidebar/sidebar.service';

@Component({
  selector: 'rc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public pageTitle!: string;
  public readonly appName = 'Read Companion';

  constructor(
    private readonly sidebarService: SidebarService,
    private readonly pageTitleService: PageTitleService,
    private readonly headerService: HeaderService
  ) {
    this.pageTitleService.title.subscribe((title) => {
      this.pageTitle = title;
    });
  }

  public toggleSidebar(): void {
    this.sidebarService.toggleVisibility();
  }

  public closeSidebar(): void {
    this.sidebarService.close();
  }

  public toggleFavoriteButton(): void {
    this.headerService.toggleFavoriteButton();
  }

  public get isDisplayFavoriteButton(): boolean {
    return !this.headerService.favoriteButton.isHidden;
  }

  public get isFavoriteButtonActive(): boolean {
    return this.headerService.favoriteButton.isActive;
  }
}
