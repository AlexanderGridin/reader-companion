import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BooksService } from '@pages/books/services/books/books.service';
import { Book } from '@shared/models/book.model';
import { PageTitleService } from '@shared/services/page-title/page-title.service';

@Component({
  selector: 'rc-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss'],
})
export class BookPageComponent implements OnInit {
  public book!: Book;
  public isLoading!: boolean;

  constructor(
    private readonly booksService: BooksService,
    private readonly route: ActivatedRoute,
    private readonly pageTitleService: PageTitleService
  ) {}

  public ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.isLoading = true;

      const bookId: string | null = params.get('id');

      if (!bookId) return;

      this.booksService.getBook(+bookId).subscribe((book: Book) => {
        this.book = book;
        this.pageTitleService.setTitle(book.title);
        this.isLoading = false;
      });
    });
  }
}
