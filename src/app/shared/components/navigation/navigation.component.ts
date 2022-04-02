import { Component } from '@angular/core';
import { SidebarService } from '@shared/services/sidebar/sidebar.service';

@Component({
  selector: 'rc-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  constructor(private readonly sidebarService: SidebarService) {}

  public closeSidebar(): void {
    this.sidebarService.close();
  }
}
