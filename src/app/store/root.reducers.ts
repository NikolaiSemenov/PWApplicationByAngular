import { ActionReducerMap } from '@ngrx/store';

import * as fromAuth from '../modules/auth/store/auth.reducer';
import * as fromLoggedUser from '../modules/logged-user/store/logged-user.reducer';

export interface State {
  auth: fromAuth.State;
  loggedUser: fromLoggedUser.State;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.authReducer,
  loggedUser: fromLoggedUser.loggedUserReducer
};
