import React from 'react';
import { Provider } from 'react-redux';
import { AuthProvider } from './providers/auth/auth-provider';
import { storage } from './redux/rootStorage';

const _App: React.FC = React.memo((props) => (
  <Provider store={storage}>
    <AuthProvider>
      <div>test</div>
    </AuthProvider>
  </Provider>
));

export const App = React.memo(_App);
