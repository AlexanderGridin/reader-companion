import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getFullApiUrl } from '@shared/utils/api.utils';
import { Book } from '@shared/models/book.model';
import { ApiServiceBase } from '@shared/classes/api-service-base';

@Injectable()
export class BooksService extends ApiServiceBase<Array<Book>, Array<Book>> {
  public constructor(protected override http: HttpClient) {
    super(http);
  }

  public getEntity(): Observable<Array<Book>> {
    const apiUrl = getFullApiUrl('books');
    return this.http.get<Array<Book>>(apiUrl);
  }

  public createEntity(entity: Array<Book>): Observable<Array<Book>> {
    throw new Error('Method not implemented');
  }

  public updateEntity(
    id: string | number,
    entity: Array<Book>
  ): Observable<Array<Book>> {
    throw new Error('Method not implemented');
  }
}
