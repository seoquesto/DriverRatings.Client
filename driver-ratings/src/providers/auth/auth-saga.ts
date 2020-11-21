import { put, takeLatest } from 'redux-saga/effects';
import {
  loginError,
  loginSuccess,
  refreshAccessTokenError,
  refreshAccessTokenSuccess,
} from './auth-actions';
import { AuthActionConstants } from './auth-constants';
import { AxiosResponse } from 'axios';
import { JwtDto } from '../../http/responsesDto/jwt-dto';
import { LoginAction, RefreshAccessTokenAction } from './auth-action-types';
import { LoginCommand } from '../../http/requestoCommand/login';
import { RefreshAccessTokenCommand } from '../../http/requestoCommand/refresh-access-token';
import { httpClient } from '../../http/axios';

function* login(action: LoginAction) {
  try {
    const command: LoginCommand = {
      username: 'adam.bartski',
      password: 'password',
    };
    const response: AxiosResponse<JwtDto> = yield httpClient.post<JwtDto>(
      'http://localhost:5000/account/login',
      command
    );
    if (response.data) {
      yield put(loginSuccess(response.data));
    } else {
      throw new Error();
    }
  } catch (error) {
    yield put(loginError());
  }
}

function* refreshAccessToken(action: RefreshAccessTokenAction) {
  try {
    const command: RefreshAccessTokenCommand = {
      refreshToken: action.payload.data.refreshToken,
    };
    const response: AxiosResponse<JwtDto> = yield httpClient.post<JwtDto>(
      'http://localhost:5000/token/refresh',
      command
    );
    if (response.data) {
      yield put(refreshAccessTokenSuccess(response.data));
    } else {
      throw new Error();
    }
  } catch (error) {
    yield put(refreshAccessTokenError());
  }
}

export function* watchLogin() {
  yield takeLatest(AuthActionConstants.Login, login);
}

export function* watchRefreshAccessToken() {
  yield takeLatest(AuthActionConstants.RefreshAccessToken, refreshAccessToken);
}
