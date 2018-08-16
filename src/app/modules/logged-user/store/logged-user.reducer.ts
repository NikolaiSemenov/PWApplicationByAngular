import * as LoggedUserActions from './logged-user.actions';

export interface State {}

const initialState: State = {};

export function loggedUserReducer(
  state = initialState,
  action: LoggedUserActions.LoggedUserActions
) {
  switch (action.type) {
    case LoggedUserActions.SET_LOGGED_USER:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
