import { Post } from "@http/responsesDto";
import {
  FetchPostsAction,
  FetchPostsErrorAction,
  FetchPostsSuccessAction,
  PostsActionConstants,
} from ".";

export const fetchPosts = (): FetchPostsAction => {
  return {
    type: PostsActionConstants.FetchPosts,
  };
};

export const fetchPostsSuccess = (data: Post[]): FetchPostsSuccessAction => {
  return {
    type: PostsActionConstants.FetchPostsSuccess,
    payload: {
      data: data,
    },
  };
};

export const fetchPostsError = (): FetchPostsErrorAction => {
  return {
    type: PostsActionConstants.FetchPostsError,
  };
};
