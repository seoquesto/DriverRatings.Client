import { PostsActionConstants, PostsState } from ".";
import produce from "immer";
import { FetchPostsSuccessAction, PostsAction } from "./posts-action-types";

const initState: PostsState = {
  loading: false,
  posts: [],
};

export const postsReducer = (
  state: PostsState = initState,
  postsAction: PostsAction
): PostsState => {
  switch (postsAction.type) {
    case PostsActionConstants.FetchPosts:
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case PostsActionConstants.FetchPostsSuccess:
      return produce(state, (draft) => {
        const { payload } = postsAction as FetchPostsSuccessAction;
        draft.loading = false;
        draft.posts = payload.data;
      });
    case PostsActionConstants.FetchPostsError:
      return initState;
    default:
      return state;
  }
};
