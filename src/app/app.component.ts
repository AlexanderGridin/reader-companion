import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ReadCompanion';

  public ngOnInit(): void {
    window.addEventListener('beforeunload', (e) => {
      e.preventDefault();
      return (e.returnValue = 'sdflj;;');
    });
  }
}
