import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponentComponent } from '@shared/components/test-component/test-component.component';

const routes: Routes = [
  {
    path: '',
    component: TestComponentComponent,
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
