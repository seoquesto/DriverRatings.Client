import { PostComment } from "@http/responsesDto";
import produce from "immer";
import { AddPostCommentSuccess, PostAction, PostActionType } from "./post-types";

export interface PostState {
  comments: PostComment[];
  loading: boolean;
}

export const postReducer = (state: PostState, action: PostAction): PostState => {
  console.log(action);
  switch (action.type) {
    case PostActionType.AddPostComment:
      return produce(state, draftState => {
        draftState.loading = true;
      });
    case PostActionType.AddPostCommentSuccess:
      return produce(state, draftState => {
        const { payload } = action as AddPostCommentSuccess;
        draftState.loading = false;
        draftState.comments.unshift(payload.postComment);
      });
    case PostActionType.AddPostCommentError:
      return produce(state, draftState => {
        draftState.loading = false;
      });
    default:
      return state;
  }
};
