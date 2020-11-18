import { combineReducers, Reducer } from 'redux'
import { RootState } from '../types';

import authReducer from './auth';

export const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  authState: authReducer,
});