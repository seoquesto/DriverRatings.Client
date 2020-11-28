import { PostComment } from "@http/responsesDto";
import { Action } from "@utils";

export enum PostActionType {
  AddPostComment = "AddPostComment",
  AddPostCommentError = "AddPostCommentError",
  AddPostCommentSuccess = "AddPostCommentSuccess",
}

export interface AddPostComment extends Action<PostActionType.AddPostComment> {
  type: PostActionType.AddPostComment;
}

export interface AddPostCommentSuccess
  extends Action<PostActionType.AddPostCommentSuccess> {
  type: PostActionType.AddPostCommentSuccess;
  payload: {
    postComment: PostComment;
  };
}

export interface AddPostCommentError
  extends Action<PostActionType.AddPostCommentError> {
  type: PostActionType.AddPostCommentError;
}

export type PostAction =
  | AddPostComment
  | AddPostCommentSuccess
  | AddPostCommentError;
