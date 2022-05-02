import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Book } from '@shared/models/book.model';
import { BooksService } from '@shared/services/books/books.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookPageResolver implements Resolve<Book | null> {
  constructor(private booksService: BooksService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    _: RouterStateSnapshot
  ): Observable<Book | null> {
    const bookIdParam = route.paramMap.get('id');

    if (!bookIdParam) return of(null);

    return this.booksService.getBook(+bookIdParam);
  }
}
