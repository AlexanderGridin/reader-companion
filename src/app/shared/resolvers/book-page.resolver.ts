import { Injectable } from '@angular/core';
import { Book } from '@shared/models/book.model';
import { PageResolverBase } from '@shared/classes/page-resolver-base';
import { BookService } from '@pages/book/services/book.serivce';

@Injectable()
export class BookPageResolver extends PageResolverBase<Book> {
  constructor(apiService: BookService) {
    super({
      apiService,
      routerParam: 'id',
    });
  }
}
