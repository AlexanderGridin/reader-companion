import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getFullApiUrl } from '@shared/utils/api.utils';
import { Book } from '@shared/models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  public constructor(private readonly http: HttpClient) {}

  public getBooks(): Observable<Array<Book>> {
    const apiUrl = getFullApiUrl('/api/books');
    return this.http.get<Array<Book>>(apiUrl);
  }

  public getBook(id: number): Observable<Book> {
    const apiUrl = getFullApiUrl('/api/books/${id}').replace(
      '${id}',
      id.toString()
    );
    return this.http.get<Book>(apiUrl);
  }
}
