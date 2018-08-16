import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartPageComponent } from '../../modules/start-page/start-page.component';
import { LoggedUserComponent } from '../../modules/logged-user/logged-user.component';
import { LayoutComponent } from './layout.component';

export const layoutRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: StartPageComponent },
      { path: 'system-users', component: LoggedUserComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(layoutRoutes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
