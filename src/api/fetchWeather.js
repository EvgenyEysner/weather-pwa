import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";

const apiKey = "4682ce459590d5ab4bb60f2a3047dacd";

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
