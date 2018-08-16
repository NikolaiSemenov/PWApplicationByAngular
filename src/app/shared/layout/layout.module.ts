import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideDrawerComponent } from './side-drawer/side-drawer.component';
import { StartPageComponent } from '../../modules/start-page/start-page.component';
import { LoggedUserComponent } from '../../modules/logged-user/logged-user.component';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
  declarations: [
    StartPageComponent,
    LoggedUserComponent,
    LayoutComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SideDrawerComponent
  ],
  imports: [CommonModule, LayoutRoutingModule]
})
export class LayoutModule {}
