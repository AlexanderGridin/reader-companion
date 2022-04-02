import { Component, OnInit } from '@angular/core';
import { Book } from '@pages/books/models/book.model';
import { BooksService } from '@pages/books/services/books/books.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'rc-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss'],
})
export class BooksPageComponent implements OnInit {
  public readonly pageTitle = 'Books';
  public isLoading = true;
  public books!: Array<Book>;

  private readonly destroy$ = new Subject();

  constructor(private readonly service: BooksService) {}

  public ngOnInit(): void {
    this.service
      .getBooks()
      .pipe(takeUntil(this.destroy$))
      .subscribe((books: Array<Book>) => {
        this.books = books;
        this.isLoading = false;
      });
  }

  public ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
