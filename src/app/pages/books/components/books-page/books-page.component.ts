import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageBase } from '@shared/classes/page-base';
import { Book } from '@shared/models/book.model';
import { BooksService } from '@shared/services/books/books.service';
import { PageTitleService } from '@shared/services/page-title/page-title.service';
import { SidebarService } from '@shared/services/sidebar/sidebar.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'rc-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss'],
})
export class BooksPageComponent extends PageBase<Array<Book>> {
  constructor(
    router: Router,
    activatedRoute: ActivatedRoute,
    pageTitleService: PageTitleService
  ) {
    super({
      router,
      activatedRoute,
      resolverResponseProperty: 'books',
      pageTitleService,
    });
  }

  protected calculateTitle(): string {
    return 'Books';
  }
}
