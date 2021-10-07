import React, { useEffect, useState } from "react";
import "weather-react-icons/lib/css/weather-icons.css";
import { WeatherIcon as WetIcon } from "weather-react-icons";
import styled from "styled-components";
import { ReactComponent as Loading } from "./loading-spinner.svg";

const WeatherContainer = styled.div`
  width: 100%;
  height: 80px;
  display: grid;
  grid-gap: 0;
  grid-template-columns: 1.2fr 2.5fr;
  grid-template-areas:
    "icon temp"
    "city_name city_name";

  @media (max-width: 992px) {
    height: 55px;
  }

  @media (max-width: 576px) {
    height: 45px;
  }
`;

const WeatherIcon = styled(WetIcon)`
  font-size: 5vw;
  grid-area: icon;
`;

const Temperature = styled.span`
  font-family: "JetBrains Mono", monospace;
  font-weight: 800;
  font-size: 3.75vw;
  grid-area: temp;
`;

const CityName = styled.span`
  font-size: 2.25vw;
  grid-area: city_name;
`;

const InfoContainer = styled.div`
  grid-area: weather_info;
  display: flex;
  flex-direction: column;
  text-align: right;
`;

const InfoText = styled.span`
  font-size: 1.8vw;
`;

const Weather = () => {
  const [weatherData, setWeatherData] = useState({
    clouds: null,
    main: null,
    weather: null,
    visibility: null,
    wind: null,
    cityName: null,
  });

  useEffect(() => {
    const weatherFetchUrl = `http://api.openweathermap.org/data/2.5/weather?q=${process.env.REACT_APP_OPEN_WEATHER_CITY_NAME}&units=${process.env.REACT_APP_OPEN_WEATHER_UNITS}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`;
    async function fetchWeather() {
      const result = await fetch(weatherFetchUrl, {
        method: "GET",
      }).then((response) => response.json());
      console.log(result);
      setWeatherData({
        clouds: result.clouds,
        main: result.main,
        weather: result.weather,
        wind: result.wind,
        visibility: result.visibility,
        cityName: result.name,
      });
    }

    fetchWeather();
    return;
  }, []);

  const AdditionalInfo = () => (
    <InfoContainer>
      {weatherData.weather ? (
        <>
          <InfoText>Humidity: {weatherData.main.humidity}%</InfoText>
          <InfoText>Pressure: {weatherData.main.pressure}hPa</InfoText>
        </>
      ) : (
        <Loading width={96} />
      )}
    </InfoContainer>
  );

  const MainInfo = () => (
    <WeatherContainer>
      {weatherData.weather ? (
        <>
          <WeatherIcon iconId={weatherData.weather[0].id} name="owm" night />
          <Temperature>{`${~~weatherData.main.temp}°${
            process.env.REACT_APP_OPEN_WEATHER_UNITS === "metric" ? "C" : "F"
          }`}</Temperature>
          <CityName>{weatherData.cityName}</CityName>
        </>
      ) : (
        <Loading width={96} />
      )}
    </WeatherContainer>
  );

  return (
    <>
      <MainInfo /> <AdditionalInfo />
    </>
  );
};

export default Weather;
