import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { BooksListComponent } from '@pages/books/components/books-list/books-list.component';
import { SharedModule } from '@shared/shared.module';
import { BooksPageComponent } from './components/books-page/books-page.component';
import { RouterModule, Routes } from '@angular/router';
import { BooksPageResolver } from '@shared/resolvers/books-page.resolver';

const routes: Routes = [
  {
    path: '',
    component: BooksPageComponent,
    resolve: {
      books: BooksPageResolver,
    },
  },
  {
    path: 'books/:id',
    loadChildren: () =>
      import('@pages/book/book.module').then((m) => m.BookModule),
  },
];

const declarations = [BooksPageComponent, BooksListComponent];

const imports = [
  CommonModule,
  HttpClientModule,
  SharedModule,
  RouterModule.forChild(routes),
];

@NgModule({
  declarations: [...declarations],
  imports: [...imports],
  exports: [...declarations],
})
export class BooksModule {}
