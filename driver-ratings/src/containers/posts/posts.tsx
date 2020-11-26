import React, { useEffect, memo } from "react";
import { useReduxState } from "@hooks";
import { useDispatch } from "react-redux";
import { fetchPosts, isLoadingPostsSelector, postsSelector } from ".";
import { Loader, Post } from "@components";

const _Posts: any = () => {
  const dispatch = useDispatch();
  const isLoading = useReduxState(isLoadingPostsSelector);
  const posts = useReduxState(postsSelector);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return isLoading ? <Loader /> : posts.map((x) => <Post post={x} />);
};

export const Posts = memo(_Posts);
