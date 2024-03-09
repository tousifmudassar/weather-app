// Weather.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherRequest } from "../services/actions/weatherActions";

const Weather = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const weather = useSelector(state => state.weather);

  const handleFetchWeather = () => {
    dispatch(fetchWeatherRequest(city));
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <button onClick={handleFetchWeather}>Get Weather</button>

      {weather.loading && <p>Loading...</p>}
      {weather.error && <p>Error: {weather.error}</p>}
      {weather.data && (
        <div>
          <h2>{weather.data.name}</h2>
          <p>Temperature: {weather.data.main.temp} K</p>
          <p>Description: {weather.data.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
