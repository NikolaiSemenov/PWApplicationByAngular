import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { SharedModule } from '../../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [SignupComponent, SigninComponent],
  imports: [ReactiveFormsModule, SharedModule, AuthRoutingModule]
})
export class AuthModule {}
