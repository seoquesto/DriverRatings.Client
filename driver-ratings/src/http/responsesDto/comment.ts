import { CreatorInfo } from ".";

export interface PostComment {

}

export interface CommentBase {
  commentId: string;
  creatorInfo: CreatorInfo;
  content: string;
  createdAt: Date;
}