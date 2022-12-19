import Search from './search';
import Cards from "./cards";
import { useState } from 'react';
import { WeatherData } from '../types/weather-data';

const WeatherLayout: React.FC = ({}) => {

const [weatherData, setWeatherData] = useState<WeatherData | {}>({})

  return (
    <>
      <Search setWeatherData={setWeatherData}/>
      <Cards data={weatherData}/>
    </>
  );
}

export default WeatherLayout;
