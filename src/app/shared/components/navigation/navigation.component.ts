import { Component } from '@angular/core';
import { SidebarService } from '@shared/services/sidebar/sidebar.service';

@Component({
  selector: 'rc-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  constructor(private readonly service: SidebarService) {}

  public closeSidebar(): void {
    this.service.close();
  }
}
