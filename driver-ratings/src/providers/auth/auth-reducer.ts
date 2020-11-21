import { AuthActionConstants, AuthState } from '.';
import produce from 'immer';
import {
  AuthAction,
  LoginSuccessAction,
  RefreshAccessTokenSuccessAction,
} from '.';

const initState: AuthState = {
  accessToken: '',
  refreshToken: '',
  loading: false,
  isAuthenticated: false,
  expires: 0,
};

export const authReducer = (
  state: AuthState = initState,
  authAction: AuthAction
): AuthState => {
  switch (authAction.type) {
    case AuthActionConstants.Login:
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case AuthActionConstants.LoginSuccess:
      return produce(state, (draft) => {
        let {
          payload: {
            data: { expires, refreshToken, token },
          },
        } = authAction as LoginSuccessAction;
        draft.loading = false;
        draft.refreshToken = refreshToken;
        draft.expires = expires;
        draft.accessToken = token;
      });
    case AuthActionConstants.LoginError:
      return initState;
    case AuthActionConstants.RefreshAccessToken:
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case AuthActionConstants.RefreshAccessTokenSuccess:
      return produce(state, (draft) => {
        let {
          payload: {
            data: { expires, refreshToken, token },
          },
        } = authAction as RefreshAccessTokenSuccessAction;
        draft.loading = false;
        draft.refreshToken = refreshToken;
        draft.expires = expires;
        draft.accessToken = token;
      });
    // case AuthActionConstants.RefreshAccessTokenError:
    //   return initState;
    default:
      return state;
  }
};
