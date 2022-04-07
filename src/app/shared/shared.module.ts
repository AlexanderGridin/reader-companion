import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { PageLayoutComponent } from '@shared/components/page-layout/page-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ImageComponent } from './components/image/image.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import { RouterModule } from '@angular/router';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SomeComponentComponent } from './components/some-component/some-component.component';

const declarations = [
  PageLayoutComponent,
  HeaderComponent,
  FooterComponent,
  ImageComponent,
  NavigationComponent,
  TestComponentComponent,
  SpinnerComponent,
];

const imports = [
  CommonModule,
  RouterModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  SomeComponentComponent,
];

@NgModule({
  declarations: [...declarations],
  imports: [...imports],
  exports: [...imports, ...declarations],
})
export class SharedModule {}
