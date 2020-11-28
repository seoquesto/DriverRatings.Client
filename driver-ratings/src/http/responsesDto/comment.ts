import { CreatorInfo } from ".";

export interface PostComment extends CommentBase {}

export interface CommentBase {
  commentId: string;
  creatorInfo: CreatorInfo;
  content: string;
  createdAt: Date;
}
