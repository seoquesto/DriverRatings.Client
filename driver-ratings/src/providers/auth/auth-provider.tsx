import React, { FC, memo, PropsWithChildren, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../redux/rootState';
import { login } from './auth-actions';
import { AuthStorage } from './auth-storage';

const _AuthProvider: FC<PropsWithChildren<{}>> = (props) => {
  const dispatch = useDispatch();
  const refreshToken = useTypedSelector((state) => state.auth.refreshToken);
  const accessToken = useTypedSelector((state) => state.auth.accessToken);

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

  return <>{props.children}</>;
};

export const AuthProvider = memo(_AuthProvider);
