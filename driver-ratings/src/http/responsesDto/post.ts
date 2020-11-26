import { PostComment, CreatorInfo, Plate } from ".";

export interface Post {
  postId: string;
  creatorInfo: CreatorInfo;
  plate: Plate;
  content: string;
  createdAt: Date;
  comments: PostComment[];
}
