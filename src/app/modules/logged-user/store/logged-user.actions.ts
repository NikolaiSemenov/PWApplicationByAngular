import { Action } from '@ngrx/store';
import { User } from '../../auth/user.model';

export const SET_LOGGED_USER = 'SET_LOGGED_USER';
export const FETCH_USER_TRANSACTION = 'FETCH_USER_TRANSACTION';
export const SET_USER_TRANSACTION = 'SET_USER_TRANSACTION';

export class SetLoggedUser implements Action {
  readonly type = SET_LOGGED_USER;

  constructor(public payload: User) {}
}

export class fetchUserTransaction implements Action {
  readonly type = FETCH_USER_TRANSACTION;
}

export class setUserTransaction implements Action {
  readonly type = SET_USER_TRANSACTION;
}

export type LoggedUserActions =
  | SetLoggedUser
  | fetchUserTransaction
  | setUserTransaction;
