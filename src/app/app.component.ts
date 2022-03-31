import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ReadCompanion';

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
