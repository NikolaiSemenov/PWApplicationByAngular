import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../../store/root.reducers';
import * as AuthActions from '../store/auth.actions';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  constructor(private store: Store<fromRoot.State>) {}

  ngOnInit() {}

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    const username = `${form.value.firstname} ${form.value.lastname}`;
    console.log(email, password, username);
    this.store.dispatch(
      new AuthActions.TrySignup({ username, password, email })
    );
  }
}
