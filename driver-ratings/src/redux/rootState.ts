import { createSelectorHook } from 'react-redux';
import { AuthState } from '../providers/auth/auth-state';

export interface RootState {
  auth: AuthState;
}

export const useTypedSelector = createSelectorHook<RootState>();