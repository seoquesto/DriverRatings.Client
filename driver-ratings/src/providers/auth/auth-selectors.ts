import { RootState } from "src/redux/rootState";

const s = (state: RootState) => state.auth;

export const accessTokenSelector = (state: RootState): string | undefined =>
  s(state).accessToken || undefined;

export const refreshTokenSelector = (state: RootState): string | undefined =>
  s(state).refreshToken || undefined;

export const isAuthenticatedSelector = (state: RootState): boolean =>
  accessTokenSelector(state) !== undefined &&
  refreshTokenSelector(state) !== undefined;

export const expiresSelector = (state: RootState): number | undefined =>
  s(state).expires || undefined;
