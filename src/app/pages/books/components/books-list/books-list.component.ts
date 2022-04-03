import { Component, Input } from '@angular/core';
import { Book } from '@shared/models/book.model';

@Component({
  selector: 'rc-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent {
  @Input() public books: Array<Book> = [];

  public readonly trackByIndex = (index: number): number => index;
}
