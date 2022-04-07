import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from '@shared/models/book.model';
import { BooksService } from '@pages/books/services/books/books.service';
import { PageTitleService } from '@shared/services/page-title/page-title.service';
import { SidebarService } from '@shared/services/sidebar/sidebar.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'rc-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss'],
})
export class BooksPageComponent implements OnInit, OnDestroy {
  public readonly pageTitle = 'Books';
  public isLoading = true;
  public books!: Array<Book>;

  private readonly destroy$ = new Subject();

  constructor(
    private readonly service: BooksService,
    private readonly pageTitleService: PageTitleService,
    private readonly sidebarService: SidebarService
  ) {}

  public ngOnInit(): void {
    this.pageTitleService.setTitle(this.pageTitle);

    this.service
      .getBooks()
      .pipe(takeUntil(this.destroy$))
      .subscribe((books: Array<Book>) => {
        this.books = books;
        this.isLoading = false;
        this.sidebarService.close();
      });
  }

  public ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
