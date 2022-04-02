import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { HttpClientModule } from '@angular/common/http';

import { BooksListComponent } from '@pages/books/components/books-list/books-list.component';
import { SharedModule } from '@shared/shared.module';
import { BooksPageComponent } from './components/books-page/books-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: BooksPageComponent,
  },
];

const declarations = [BooksPageComponent, BooksListComponent];

const imports = [
  CommonModule,
  HttpClientModule,
  PdfViewerModule,
  SharedModule,
  RouterModule.forChild(routes),
];

@NgModule({
  declarations: [...declarations],
  imports: [...imports],
  exports: [...declarations],
})
export class BooksModule {}
