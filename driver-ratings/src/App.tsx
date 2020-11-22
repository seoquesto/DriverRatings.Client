import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ApplicationRouter from './containers/router';
import AuthProvider from './providers/auth';
import { storage } from './redux/rootStorage';

const _App: React.FC = React.memo((props) => (
  <Provider store={storage}>
    <AuthProvider>
      <BrowserRouter>
        <ApplicationRouter />
      </BrowserRouter>
    </AuthProvider>
  </Provider>
));

export const App = React.memo(_App);
