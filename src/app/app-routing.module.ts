import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@pages/front-page/front-page.module').then(
        (m) => m.FrontPageModule
      ),
  },
  {
    path: 'books',
    loadChildren: () =>
      import('@pages/books/books.module').then((m) => m.BooksModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
