import React, { FC, memo, PropsWithChildren, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../redux/rootState';
import { login, refreshAccessToken } from './auth-actions';
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
      const REFRESH_ACCESS_TOKEN_REQUEST = process.env.REACT_APP_REFRESH_ACCESS_TOKEN_REQUEST ;
      if (REFRESH_ACCESS_TOKEN_REQUEST === undefined) {
        throw new Error("REFRESH_ACCESS_TOKEN_REQUEST env variable is required.");
      }

      setTimeout(() => {
        dispatch(refreshAccessToken(refreshToken));
      }, refreshTokenThreshold - (+REFRESH_ACCESS_TOKEN_REQUEST * 1000 * 60))
    }
  }, [expires]);

  return <>{props.children}</>;
};

export const AuthProvider = memo(_AuthProvider);
