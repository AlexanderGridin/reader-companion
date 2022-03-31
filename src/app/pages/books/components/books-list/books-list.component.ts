import { Component, OnInit } from '@angular/core';
import {
  Book,
  BooksService,
} from 'app/pages/books/services/books/books.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'rc-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent implements OnInit {
  private readonly destroy$ = new Subject();

  constructor(private readonly service: BooksService) {}

  public ngOnInit(): void {
    this.service
      .getBooks()
      .pipe(takeUntil(this.destroy$))
      .subscribe((books: Array<Book>) => {
        console.log(books);
      });
  }

  public ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}
