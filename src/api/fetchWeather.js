import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";

const apiKey = "your-api-key-here"; // Replace with your actual OpenWeatherMap API key

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: apiKey,
      lang: "de",
    },
  });
  return data;
};
