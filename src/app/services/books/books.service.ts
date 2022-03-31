import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Book {
  id: number;
  title: string;
  pages: number;
}

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  public constructor(private readonly http: HttpClient) {}

  public getBooks(): Observable<Array<Book>> {
    const apiUrl = 'http://localhost:3000/api/books';
    return this.http.get<Array<Book>>(apiUrl);
  }
}
