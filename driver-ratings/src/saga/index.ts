import { all, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { login, loginError, loginSuccess } from "../slices/auth";

function* loginUser() {
  try {
    const { data } = yield axios.post("http://localhost:5000/account/login", 
    {
      username: 'adam.bartski',
      password: 'password',
    },
    {
      headers: {
        'Content-Type': 'application/json',
      }
    }
    );
    console.log(data);
    yield put(loginSuccess(data));
  } catch (error) {
    yield put(loginError(error.message));
  }
}

export function* rootSaga() {
  yield all([takeLatest(login.type, loginUser)]);
}
