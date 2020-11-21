import { JwtDto } from '../../http/responsesDto/jwt-dto';
import {
  LoginAction,
  LoginErrorAction,
  LoginSuccessAction,
  RefreshAccessTokenAction,
  RefreshAccessTokenErrorAction,
  RefreshAccessTokenSuccessAction,
} from './auth-action-types';
import { AuthActionConstants } from './auth-constants';

export const login = (): LoginAction => {
  return {
    type: AuthActionConstants.Login,
  };
};

export const loginSuccess = (data: JwtDto): LoginSuccessAction => {
  return {
    type: AuthActionConstants.LoginSuccess,
    payload: {
      data: data,
    },
  };
};

export const loginError = (): LoginErrorAction => {
  return {
    type: AuthActionConstants.LoginError,
  };
};

export const refreshAccessToken = (
  refreshToken: string
): RefreshAccessTokenAction => {
  return {
    type: AuthActionConstants.RefreshAccessToken,
    payload: {
      data: {
        refreshToken: refreshToken,
      },
    },
  };
};

export const refreshAccessTokenSuccess = (
  data: JwtDto
): RefreshAccessTokenSuccessAction => {
  return {
    type: AuthActionConstants.RefreshAccessTokenSuccess,
    payload: {
      data: data,
    },
  };
};

export const refreshAccessTokenError = (): RefreshAccessTokenErrorAction => {
  return {
    type: AuthActionConstants.RefreshAccessTokenError,
  };
};
