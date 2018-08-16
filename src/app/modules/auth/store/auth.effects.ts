import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { switchMap, map, mergeMap } from 'rxjs/operators';

import * as AuthActions from './auth.actions';
import { Token } from '../token.model';
import { User } from '../user.model';
import * as LoggedUserActions from '../../logged-user/store/logged-user.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private httpClient: HttpClient
  ) {}
  @Effect()
  authSignup = this.actions$.ofType(AuthActions.TRY_SIGNUP).pipe(
    map((action: AuthActions.TrySignup) => {
      return action.payload;
    }),
    switchMap(
      (authData: { username: string; password: string; email: string }) => {
        console.log(authData);
        return this.httpClient.post(
          'http://193.124.114.46:3001/users',
          authData
        );
      }
    ),
    mergeMap((token: string) => {
      console.log(token);
      return [
        {
          type: AuthActions.SIGNUP
        },
        {
          type: AuthActions.SET_TOKEN,
          payload: token
        }
      ];
    })
  );

  @Effect()
  authSignin = this.actions$.ofType(AuthActions.TRY_SIGNIN).pipe(
    map((action: AuthActions.TrySignin) => {
      return action.payload;
    }),
    switchMap((authData: { email: string; password: string }) => {
      console.log(authData);
      return this.httpClient.post<Token>(
        'http://193.124.114.46:3001/sessions/create',
        authData
      );
    }),
    switchMap(token => {
      console.log(token);
      const headers = new HttpHeaders().set(
        'Authorization',
        'bearer ' + token.id_token
      );
      return this.httpClient
        .get<User>('http://193.124.114.46:3001/api/protected/user-info', {
          headers
        })
        .pipe(
          map(user => {
            return { user: user.user_info_token, token: token.id_token };
          })
        );
    }),
    mergeMap((loggedUser: { token: string; user }) => {
      console.log(loggedUser);
      this.router.navigate(['/']);
      return [
        {
          type: AuthActions.SIGNIN
        },
        {
          type: AuthActions.SET_TOKEN,
          payload: loggedUser.token
        },
        {
          type: LoggedUserActions.SET_LOGGED_USER,
          payload: loggedUser.user
        }
      ];
    })
  );

  @Effect({ dispatch: false })
  authLogout = this.actions$.ofType(AuthActions.LOGOUT).pipe(
    map(() => {
      this.router.navigate(['/']);
      return null;
    })
  );
}
