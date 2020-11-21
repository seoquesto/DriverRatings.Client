import { Action } from 'redux';
import { JwtDto } from '../../http/responsesDto/jwt-dto';
import { AuthActionConstants } from './auth-constants';

export interface LoginAction extends Action<AuthActionConstants.Login> {
  type: AuthActionConstants.Login;
}

export interface LoginSuccessAction
  extends Action<AuthActionConstants.LoginSuccess> {
  type: AuthActionConstants.LoginSuccess;
  payload: {
    data: JwtDto;
  };
}

export interface LoginErrorAction
  extends Action<AuthActionConstants.LoginError> {
  type: AuthActionConstants.LoginError;
}

export interface RefreshAccessTokenAction
  extends Action<AuthActionConstants.RefreshAccessToken> {
  type: AuthActionConstants.RefreshAccessToken;
  payload: {
    data: {
      refreshToken: string;
    };
  };
}

export interface RefreshAccessTokenSuccessAction
  extends Action<AuthActionConstants.RefreshAccessTokenSuccess> {
  type: AuthActionConstants.RefreshAccessTokenSuccess;
  payload: {
    data: JwtDto;
  };
}

export interface RefreshAccessTokenErrorAction
  extends Action<AuthActionConstants.RefreshAccessTokenError> {
  type: AuthActionConstants.RefreshAccessTokenError;
}

export type AuthAction =
  | LoginAction
  | LoginSuccessAction
  | LoginErrorAction
  | RefreshAccessTokenAction
  | RefreshAccessTokenSuccessAction
  | RefreshAccessTokenErrorAction;
