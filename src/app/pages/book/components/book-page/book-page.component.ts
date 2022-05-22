import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '@shared/models/book.model';
import { PageBase } from '@shared/classes/page-base';
import { PageTitleService } from '@shared/services/page-title/page-title.service';
import { NotesService } from '@shared/services/notes/notes.service';
import { first, takeUntil } from 'rxjs';
import { Note } from '@shared/models/note.model';
import { HeaderService } from '@shared/services/header/header.service';
import { BookService } from '@pages/book/services/book.serivce';

@Component({
  selector: 'rc-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss'],
})
export class BookPageComponent
  extends PageBase<Book>
  implements OnInit, OnDestroy
{
  public currentPage!: number;
  public isBookLoading: boolean = true;
  public isBookCurrentPageCanBeSaved: boolean = false;

  constructor(
    router: Router,
    activatedRoute: ActivatedRoute,
    pageTitleService: PageTitleService,
    private readonly notesService: NotesService,
    private readonly headerService: HeaderService,
    private readonly bookService: BookService
  ) {
    super({
      router,
      activatedRoute,
      resolverResponseProperty: 'book',
      pageTitleService,
    });
  }

  public override ngOnInit(): void {
    super.ngOnInit();

    this.headerService.showFavoriteButton();
    this.headerService.setFavoriteButtonState(this.pageModel.isFavorite);
  }

  public override ngOnDestroy(): void {
    super.ngOnDestroy();
    this.headerService.hideFavoriteButton();
  }

  protected override setSubscriptions(): void {
    super.setSubscriptions();

    this.headerService.favorite$
      .pipe(takeUntil(this.destroy$))
      .subscribe((isFavorite: boolean) => {
        const updatedBook: Book = {
          ...this.pageModel,
          isFavorite,
        };

        this.startLoading();
        this.bookService
          .updateEntity(updatedBook.id, updatedBook)
          .pipe(first())
          .subscribe((updatedBook: Book) => {
            this.pageModel = updatedBook;
            this.endLoading();
          });
      });

    this.notesService
      .getAllByBookId(this.pageModel.id)
      .pipe(first())
      .subscribe((notes: Array<Note>) => {
        console.log(notes);
      });
  }

  protected generateTitle(): string {
    return this.pageModel?.title || '';
  }

  public saveCurrentBookPage(): void {
    const updatedBook: Book = {
      ...this.pageModel,
      currentPage: this.currentPage,
    };

    this.startLoading();
    this.bookService
      .updateEntity(updatedBook.id, updatedBook)
      .pipe(first())
      .subscribe((updatedBook: Book) => {
        this.pageModel = updatedBook;
        this.isBookCurrentPageCanBeSaved = false;
        this.endLoading();
      });
  }

  public handlePageChange(pageNumber: number): void {
    if (this.pageModel.currentPage !== pageNumber) {
      this.isBookCurrentPageCanBeSaved = true;
    } else {
      this.isBookCurrentPageCanBeSaved = false;
    }

    this.currentPage = pageNumber;
    console.log(`current page: ${this.currentPage}`);
  }

  public handleTextLayerRendered(): void {
    this.isBookLoading = false;
  }
}
