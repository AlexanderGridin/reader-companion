import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '@shared/services/page-title/page-title.service';

@Component({
  selector: 'rc-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss'],
})
export class TestComponentComponent implements OnInit {
  constructor(private readonly pageTitleService: PageTitleService) {}

  public ngOnInit(): void {
    this.pageTitleService.setTitle('Front Page');
  }
}
