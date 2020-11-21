// ACCESS TOKEN SHOULD NOT BE KEPT IN LOCAL STORAGE OR COOKIE STORAGE BECAUSE OF FOR INSTANCE SECURITY.
// TODO: REFRESH TOKEN IN HTTP ONLY COOKIE.
export class AuthStorage {
  private static _instance: AuthStorage;
  private accessToken: string = '';
  private refreshToken: string = '';

  private constructor() {}

  public static getInstance() {
    if (!this._instance) {
      this._instance = new AuthStorage();
    }
    return this._instance;
  }

  public setAccessToken(accessToken: string): void {
    this.accessToken = accessToken;
  }

  public setRefreshToken(refreshToken: string): void {
    this.refreshToken = refreshToken;
  }

  public getAccessToken(): string {
    return this.accessToken;
  }

  public getRefreshToken(): string {
    return this.refreshToken;
  }

  public clear(): void {
    this.accessToken = '';
    this.refreshToken = '';
  }
}
