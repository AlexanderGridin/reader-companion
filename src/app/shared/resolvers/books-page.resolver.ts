import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { BooksService } from '@shared/services/books/books.service';
import { Book } from '@shared/models/book.model';
import { catchError, Observable, of } from 'rxjs';
import { PageResolverBase } from '@shared/classes/page-resolver-base';

@Injectable()
export class BooksPageResolver extends PageResolverBase<Array<Book>> {
  constructor(apiService: BooksService) {
    super({
      apiService,
    });
  }
}
