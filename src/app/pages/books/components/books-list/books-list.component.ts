import { Component, OnInit } from '@angular/core';
import { BooksService } from '@pages/books/services/books/books.service';
import { Subject, takeUntil } from 'rxjs';
import { Book } from '@pages/books/models/book.model';

@Component({
  selector: 'rc-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent implements OnInit {
  public books: Array<Book> = [];
  public readonly trackByIndex = (index: number): number => index;

  private readonly destroy$ = new Subject();

  constructor(private readonly service: BooksService) {}

  public ngOnInit(): void {
    this.service
      .getBooks()
      .pipe(takeUntil(this.destroy$))
      .subscribe((books: Array<Book>) => {
        this.books = books;
      });
  }

  public ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
