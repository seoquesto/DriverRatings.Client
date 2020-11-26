import { all, fork } from "redux-saga/effects";
import { watchFetchPosts } from "src/containers/posts";
import {
  watchLogin,
  watchRefreshAccessToken,
} from "../providers/auth/auth-saga";

const sagas: any[] = [watchLogin, watchRefreshAccessToken, watchFetchPosts];

function* rootSaga() {
  const sagaForks = sagas.map((x) => fork(x));
  yield all([...sagaForks]);
}

export { rootSaga };
