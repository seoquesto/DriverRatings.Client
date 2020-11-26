import { createSelectorHook } from 'react-redux';
import { PostsState } from '../containers/posts';
import { AuthState } from '../providers/auth/auth-state';

export interface RootState {
  auth: AuthState;
  posts: PostsState;
}

export const useTypedSelector = createSelectorHook<RootState>();