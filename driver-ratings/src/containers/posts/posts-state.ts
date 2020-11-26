import { Post } from "@http/responsesDto";

export interface PostsState {
  loading: boolean;
  posts: Post[];
}