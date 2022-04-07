import { Component, Input } from '@angular/core';
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
    private readonly pageTitleService: PageTitleService
  ) {
    this.pageTitleService.title.subscribe((title) => {
      this.pageTitle = title;
    });
  }

  public toggleSidebar(): void {
    this.sidebarService.toggleVisibility();
  }

  public handleFocus(): void {
    console.log('button focused');
  }
}
