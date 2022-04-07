import { Component, Input } from '@angular/core';
import { SidebarService } from '@shared/services/sidebar/sidebar.service';

@Component({
  selector: 'rc-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss'],
})
export class PageLayoutComponent {
  @Input() public pageTitle!: string;

  constructor(private readonly sidebarService: SidebarService) {}

  public get isSidebarOpen(): boolean {
    return this.sidebarService.isOpen;
  }

  public closeSidebar(): void {
    this.sidebarService.close();
  }
}
