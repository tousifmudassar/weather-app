// weatherSaga.js
import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_WEATHER_REQUEST,
  fetchWeatherSuccess,
  fetchWeatherFailure
} from "../actions/weatherActions";

function* fetchWeatherSaga(action) {
  try {
    const { city } = action.payload;
    const response = yield axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6d02b9c2aa381bc7134a57656f0e76de`
    );
    yield put(fetchWeatherSuccess(response.data));
  } catch (error) {
    yield put(fetchWeatherFailure(error.message));
  }
}

function* weatherSaga() {
  yield takeLatest(FETCH_WEATHER_REQUEST, fetchWeatherSaga);
}

export default weatherSaga;
