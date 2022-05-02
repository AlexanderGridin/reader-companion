import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { BooksService } from '@shared/services/books/books.service';
import { Book } from '@shared/models/book.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksPageResolver implements Resolve<Array<Book>> {
  constructor(private readonly booksService: BooksService) {}

  resolve(
    _: ActivatedRouteSnapshot,
    __: RouterStateSnapshot
  ): Observable<Array<Book>> {
    return this.booksService.getBooks();
  }
}
