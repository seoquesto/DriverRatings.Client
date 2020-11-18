import React from "react";
import { Provider, useDispatch } from "react-redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { rootReducer } from "./slices";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./saga";
import { login } from "./slices/auth";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware, ...getDefaultMiddleware({ thunk: false })],
  devTools: process.env.NODE_ENV !== "production",
});

sagaMiddleware.run(rootSaga);

const MyTestCOmponnenn: React.FC = (props: any): any => {
  const dispatch = useDispatch();
  dispatch(login());
  return <div>
    afsf
  </div>
}

const _App: React.FC = React.memo((props) => (
  <Provider store={store}>
    <MyTestCOmponnenn />
  </Provider>
));


export const App = React.memo(_App);
