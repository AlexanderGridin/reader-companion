import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '@shared/models/book.model';
import { PageTitleService } from '@shared/services/page-title/page-title.service';
import { PageBase } from '@shared/classes/page-base';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'rc-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss'],
})
export class BookPageComponent extends PageBase implements OnInit {
  public book!: Book;
  public currentPage!: number;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly pageTitleService: PageTitleService
  ) {
    super();
  }

  public ngOnInit(): void {
    this.activatedRoute.data
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        console.log(data);
        this.book = data['book'];
        this.currentPage = this.book.currentPage;
        this.pageTitleService.setTitle(this.book.title);
      });
  }

  public handlePageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    console.log(`current page: ${this.currentPage}`);
  }
}
