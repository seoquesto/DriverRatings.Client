import React, { FC, memo, PropsWithChildren, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { REFRESH_ACCESS_TOKEN_REQUEST_THRESHOLD } from '@env';
import { useTypedSelector } from '../../redux/rootState';
import { login, refreshAccessToken } from '.';
import { AuthStorage } from './auth-storage';

const _AuthProvider: FC<PropsWithChildren<{}>> = (props) => {
  const dispatch = useDispatch();
  const refreshToken = useTypedSelector((state) => state.auth.refreshToken);
  const accessToken = useTypedSelector((state) => state.auth.accessToken);
  const expires = useTypedSelector((state) => state.auth.expires);

  useEffect(() => {
    const authStorage = AuthStorage.getInstance();
    authStorage.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    const authStorage = AuthStorage.getInstance();
    authStorage.setRefreshToken(refreshToken);
  }, [refreshToken]);

  useEffect(() => {
    dispatch(login());
  }, [dispatch]);

  useEffect(() => {
    if (expires) {
      const refreshTokenThreshold = (expires * 1000) - new Date().getTime();
      setTimeout(() => {
        dispatch(refreshAccessToken(refreshToken));
      }, refreshTokenThreshold - (REFRESH_ACCESS_TOKEN_REQUEST_THRESHOLD * 1000 * 60));
    }
  }, [expires]);

  return <>{props.children}</>;
};

export const AuthProvider = memo(_AuthProvider);
