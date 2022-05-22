import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiServiceBase } from '@shared/classes/api-service-base';
import { Book } from '@shared/models/book.model';
import { Observable } from 'rxjs';
import { getFullApiUrl } from '@shared/utils/api.utils';

@Injectable()
export class BookService extends ApiServiceBase<Book, Book> {
  constructor(protected override http: HttpClient) {
    super(http);
  }

  public getEntity(id: number): Observable<Book> {
    const apiUrl = getFullApiUrl('books/${id}').replace('${id}', id.toString());
    return this.http.get<Book>(apiUrl);
  }

  public createEntity(): Observable<Book> {
    throw new Error('Method not implemented');
  }

  public updateEntity(id: number, entity: Book): Observable<Book> {
    const apiUrl = getFullApiUrl('books/${id}').replace('${id}', id.toString());
    return this.http.put<Book>(apiUrl, entity);
  }
}
