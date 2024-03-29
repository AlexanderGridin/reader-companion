import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookPageComponent } from './components/book-page/book-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NotesTabComponent } from './components/notes-tab/notes-tab.component';
import { DescriptionTabComponent } from './components/description-tab/description-tab.component';
import { SomeComponentComponent } from '@shared/components/some-component/some-component.component';
import { TestComponentComponent } from '@shared/components/test-component/test-component.component';
import { BookPageResolver } from '@shared/resolvers/book-page.resolver';
import { ApiServiceBase } from '@shared/classes/api-service-base';
import { BookService } from './services/book.serivce';

const routes: Routes = [
  {
    path: '',
    component: BookPageComponent,
    resolve: {
      book: BookPageResolver,
    },
    children: [
      {
        path: 'notes',
        component: NotesTabComponent,
      },
      {
        path: 'test-2',
        component: SomeComponentComponent,
      },
      {
        path: 'test-3',
        component: TestComponentComponent,
      },
    ],
  },
];

const declarations = [BookPageComponent, NotesTabComponent];
const providers = [BookService, BookPageResolver];
const imports = [
  CommonModule,
  RouterModule.forChild(routes),
  SharedModule,
  PdfViewerModule,
];

@NgModule({
  declarations: [...declarations, DescriptionTabComponent],
  providers: [...providers],
  imports: [...imports],
})
export class BookModule {}
