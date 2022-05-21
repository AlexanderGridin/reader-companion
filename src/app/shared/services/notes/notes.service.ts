import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getFullApiUrl } from '@shared/utils/api.utils';
import { Observable } from 'rxjs';
import { Note } from '@shared/models/note.model';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  constructor(private readonly http: HttpClient) {}

  public getAllByBookId(id: number): Observable<Array<Note>> {
    const apiUrl = getFullApiUrl(`notes?bookId=${id}`);
    return this.http.get<Array<Note>>(apiUrl);
  }
}
