import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageBase } from '@shared/classes/page-base';
import { PageTitleService } from '@shared/services/page-title/page-title.service';

@Component({
  selector: 'rc-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss'],
})
export class FrontPageComponent extends PageBase<null> {
  constructor(
    router: Router,
    activatedRoute: ActivatedRoute,
    pageTitleService: PageTitleService
  ) {
    super({
      router,
      activatedRoute,
      pageTitleService,
    });
  }

  protected calculateTitle(): string {
    return '';
  }
}
