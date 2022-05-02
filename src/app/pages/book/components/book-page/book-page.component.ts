import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '@shared/models/book.model';
import { PageBase } from '@shared/classes/page-base';
import { PageTitleService } from '@shared/services/page-title/page-title.service';

@Component({
  selector: 'rc-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss'],
})
export class BookPageComponent extends PageBase<Book> {
  public currentPage!: number;

  constructor(
    router: Router,
    activatedRoute: ActivatedRoute,
    pageTitleService: PageTitleService
  ) {
    super({
      router,
      activatedRoute,
      resolverResponseProperty: 'book',
      pageTitleService,
    });
  }

  protected calculateTitle(): string {
    return this.viewModel?.title ? this.viewModel.title : '';
  }

  public handlePageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    console.log(`current page: ${this.currentPage}`);
  }
}
