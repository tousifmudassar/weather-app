// index.js in sagas folder
import { all } from "redux-saga/effects";
import weatherSaga from "./weatherSaga";

function* rootSaga() {
  yield all([weatherSaga()]);
}

export default rootSaga;
