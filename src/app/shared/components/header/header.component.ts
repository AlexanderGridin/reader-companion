import { Component, Input } from '@angular/core';

@Component({
  selector: 'rc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() public pageTitle!: string;

  public isShowSidenav = false;
  public readonly appName = 'Read Companion';

  public showSideNav(): void {
    this.isShowSidenav = true;
  }

  public hideSideNav(): void {
    this.isShowSidenav = false;
  }

  public toggleSideNav(): void {
    this.isShowSidenav = !this.isShowSidenav;
  }
}
