import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BooksService } from '@shared/services/books/books.service';
import { Book } from '@shared/models/book.model';
import { PageTitleService } from '@shared/services/page-title/page-title.service';
import { takeUntil } from 'rxjs';
import { PageBase } from '@shared/classes/page-base';

@Component({
  selector: 'rc-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss'],
})
export class BookPageComponent extends PageBase implements OnInit {
  public book!: Book;
  public currentPage!: number;

  constructor(
    private readonly booksService: BooksService,
    private readonly route: ActivatedRoute,
    private readonly pageTitleService: PageTitleService
  ) {
    super();
  }

  public ngOnInit(): void {
    this.route.paramMap
      .pipe(takeUntil(this.destroy$))
      .subscribe((params: ParamMap) => {
        const bookId: string | null = params.get('id');

        if (!bookId) return;

        this.handleBookIdRouteParam(bookId);
      });
  }

  private handleBookIdRouteParam(bookId: string): void {
    this.startLoading();

    this.booksService
      .getBook(+bookId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((book: Book) => {
        this.book = book;
        this.pageTitleService.setTitle(book.title);
        this.currentPage = book.currentPage;

        this.endLoading();
      });
  }

  public handlePageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    console.log(`current page: ${this.currentPage}`);
  }
}
