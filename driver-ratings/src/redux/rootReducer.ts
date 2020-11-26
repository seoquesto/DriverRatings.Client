import { combineReducers } from 'redux';
import { RootState } from './rootState';
import { authReducer } from '../providers/auth/auth-reducer';
import { postsReducer } from '../containers/posts';

export const rootReducer = combineReducers<RootState>({
  auth: authReducer,
  posts: postsReducer,
});
