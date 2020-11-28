import { Post } from "@http/responsesDto";
import { Action } from "redux";
import { PostsActionConstants } from ".";

export interface FetchPostsAction
  extends Action<PostsActionConstants.FetchPosts> {
  type: PostsActionConstants.FetchPosts;
}

export interface FetchPostsSuccessAction
  extends Action<PostsActionConstants.FetchPostsSuccess> {
  type: PostsActionConstants.FetchPostsSuccess;
  payload: {
    data: Post[];
  };
}

export interface FetchPostsErrorAction
  extends Action<PostsActionConstants.FetchPostsError> {
  type: PostsActionConstants.FetchPostsError;
}


export type PostsAction =
  | FetchPostsAction
  | FetchPostsSuccessAction
  | FetchPostsErrorAction;
