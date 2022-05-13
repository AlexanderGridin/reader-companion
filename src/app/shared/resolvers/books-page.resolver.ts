import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { BooksService } from '@shared/services/books/books.service';
import { Book } from '@shared/models/book.model';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksPageResolver implements Resolve<Array<Book>> {
  constructor(private readonly booksService: BooksService) {}

  public resolve(): Observable<Array<Book>> {
    return this.booksService.getBooks().pipe(catchError(() => of([])));
  }
}
