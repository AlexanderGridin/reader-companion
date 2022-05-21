import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Book } from '@shared/models/book.model';
import { BooksService } from '@shared/services/books/books.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookPageResolver implements Resolve<Book | null> {
  constructor(private booksService: BooksService) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<Book | null> {
    const bookIdParam = route.paramMap.get('id');

    if (!bookIdParam) return of(null);

    return this.booksService.getBook(+bookIdParam);
  }
}
