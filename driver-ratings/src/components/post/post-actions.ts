import { PostComment } from "@http/responsesDto";
import {
  AddPostComment,
  AddPostCommentSuccess,
  AddPostCommentError,
  PostActionType,
} from ".";

export const addPostComment = (): AddPostComment => {
  return {
    type: PostActionType.AddPostComment,
  };
};

export const addPostCommentSuccess = (
  postComment: PostComment
): AddPostCommentSuccess => {
  return {
    type: PostActionType.AddPostCommentSuccess,
    payload: {
      postComment: postComment,
    },
  };
};

export const addPostCommentError = (): AddPostCommentError => {
  return {
    type: PostActionType.AddPostCommentError,
  };
};
