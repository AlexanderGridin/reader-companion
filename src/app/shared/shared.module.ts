import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { HeaderComponent } from './components/header/header.component';

const declarations = [PageLayoutComponent, HeaderComponent];

const imports = [
  CommonModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
];

@NgModule({
  declarations: [...declarations],
  imports: [...imports],
  exports: [...imports, ...declarations],
})
export class SharedModule {}
