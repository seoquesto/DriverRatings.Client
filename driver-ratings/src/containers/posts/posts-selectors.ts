import { Post } from "@http/responsesDto";
import { RootState } from "src/redux/rootState";

const s = (state: RootState) => state.posts;

export const postsSelector = (state: RootState): Post[] =>
  s(state).posts;

export const isLoadingPostsSelector = (state: RootState): boolean =>
  s(state).loading;
