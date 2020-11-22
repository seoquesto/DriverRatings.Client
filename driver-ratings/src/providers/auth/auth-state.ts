export interface AuthState {
  accessToken?: string;
  refreshToken?: string;
  expires?: number;
  loading: boolean,
}