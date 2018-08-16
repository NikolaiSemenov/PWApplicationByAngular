import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { switchMap, map } from 'rxjs/operators';

import * as LoggedUserActions from './logged-user.actions';

@Injectable()
export class LoggedUserEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private httpClient: HttpClient
  ) {}

  @Effect()
  userTransactionFetch = this.actions$
    .ofType(LoggedUserActions.FETCH_USER_TRANSACTION)
    .pipe(
      switchMap(() => {
        return this.httpClient.get(
          'http://193.124.114.46:3001/api/protected/transactions'
        );
      }),
      map(transactions => {
        console.log(transactions);
        return {
          type: LoggedUserActions.SET_USER_TRANSACTION,
          payload: transactions
        };
      })
    );
}
