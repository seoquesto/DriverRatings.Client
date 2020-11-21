export interface AuthState {
  accessToken: string;
  refreshToken: string;
  isAuthenticated: boolean;
  expires: number;
  loading: boolean,
}