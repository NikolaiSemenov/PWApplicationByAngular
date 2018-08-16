import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../../store/root.reducers';
import * as AuthActions from '../store/auth.actions';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  text;
  text1;
  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit() {}

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.store.dispatch(new AuthActions.TrySignin({ email, password }));
  }
}
