import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rc-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss'],
})
export class BooksPageComponent implements OnInit {
  public readonly pageTitle = 'Books';

  constructor() {}

  ngOnInit(): void {}
}
