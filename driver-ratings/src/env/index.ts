export const REFRESH_ACCESS_TOKEN_REQUEST_THRESHOLD: number = getRefreshAccessTokenRequestThreshold();

function getRefreshAccessTokenRequestThreshold(): number {
  if (process.env.REACT_APP_REFRESH_ACCESS_TOKEN_REQUEST_THRESHOLD === undefined) {
    throw new Error("REFRESH_ACCESS_TOKEN_REQUEST env variable is required.");
  }
  return +process.env.REACT_APP_REFRESH_ACCESS_TOKEN_REQUEST_THRESHOLD;
}
