export interface AuthState {
  loading: boolean;
  isAuthenticated: boolean;
  accessToken: string;
}
export interface RootState {
  authState: AuthState
}