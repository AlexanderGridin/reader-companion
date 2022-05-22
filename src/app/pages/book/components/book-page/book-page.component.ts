import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '@shared/models/book.model';
import { PageBase } from '@shared/classes/page-base';
import { PageTitleService } from '@shared/services/page-title/page-title.service';
import { NotesService } from '@shared/services/notes/notes.service';
import { takeUntil } from 'rxjs';
import { Note } from '@shared/models/note.model';

@Component({
  selector: 'rc-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss'],
})
export class BookPageComponent extends PageBase<Book> implements OnInit {
  public currentPage!: number;

  constructor(
    router: Router,
    activatedRoute: ActivatedRoute,
    pageTitleService: PageTitleService,
    private readonly notesService: NotesService
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

    this.notesService
      .getAllByBookId(this.pageModel.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((notes: Array<Note>) => {
        console.log(notes);
      });
  }

  protected generateTitle(): string {
    return this.pageModel?.title || '';
  }

  public handlePageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    console.log(`current page: ${this.currentPage}`);
  }

  public handlePdfViewerError(error: any): void {
    console.log(error);
  }

  public handlePdfViewerLoadComplete(data: any): void {
    console.log('after-load-complete');
    console.log(data);
  }

  public handlePageRendered(event: any): void {
    console.log(event);
  }
}
