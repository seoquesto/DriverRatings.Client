// contract between api and client.
export interface JwtDto {
  token: string;
  refreshToken: string;
  expires: number;
}