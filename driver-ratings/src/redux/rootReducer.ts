import { combineReducers } from 'redux';
import { RootState } from './rootState';
import { authReducer } from '../providers/auth/auth-reducer';

export const rootReducer = combineReducers<RootState>({
  auth: authReducer,
});
