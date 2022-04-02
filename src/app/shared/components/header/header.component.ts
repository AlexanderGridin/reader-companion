import { Component, Input } from '@angular/core';
import { SidebarService } from '@shared/services/sidebar/sidebar.service';

@Component({
  selector: 'rc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() public pageTitle!: string;

  public readonly appName = 'Read Companion';

  constructor(private readonly sidebarService: SidebarService) {}

  public toggleSidebar(): void {
    this.sidebarService.toggleVisibility();
  }
}
