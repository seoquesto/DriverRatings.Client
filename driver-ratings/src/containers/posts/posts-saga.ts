import { put, takeLatest } from "redux-saga/effects";
import { httpClient } from "@http/axios";
import { Post } from "@http/responsesDto";
import { AxiosResponse } from "axios";

import {
  PostsActionConstants,
  FetchPostsAction,
  fetchPostsError,
  fetchPostsSuccess,
} from ".";

function* fetchPosts(action: FetchPostsAction) {
  try {
    // It is not needed to pass any command or query.
    const response: AxiosResponse<Post[]> = yield httpClient.get<Post[]>(
      "http://localhost:5000/posts/all"
    );
    if (response.data) {
      yield put(fetchPostsSuccess(response.data));
    } else {
      throw new Error();
    }
  } catch (error) {
    yield put(fetchPostsError());
  }
}

export function* watchFetchPosts() {
  yield takeLatest(PostsActionConstants.FetchPosts, fetchPosts);
}
