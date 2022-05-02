import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { SharedModule } from '@shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: FrontPageComponent,
  },
];

@NgModule({
  declarations: [FrontPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class FrontPageModule {}
