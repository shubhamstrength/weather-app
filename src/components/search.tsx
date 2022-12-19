import React, { useEffect, useState } from "react";
import { Button, Form } from 'react-bootstrap';
import { useQuery } from "react-query";
import Alert from 'react-bootstrap/Alert';
import { WeatherData } from "../types/weather-data";

interface SearchProps {
    setWeatherData: (params: string) => void;
}

const fetchWeatherData = async ( city: string ) => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0bd65021e91799db249e29539a36e65e&units=metric`);
    return res.json();
  };

const Search: React.FC<SearchProps> = ({setWeatherData}) => {
  const [city, setCity] = useState('');
  const { data, refetch, isSuccess } = useQuery(['cityWeather', city], () => fetchWeatherData(city), 
  {
    enabled: false,
  });

  useEffect(() => {
    if (isSuccess) {
        setWeatherData(data);
        const locationHistoryArray = JSON.parse(localStorage.getItem('cities')) || [];
        if (!locationHistoryArray.includes(city)) {
          locationHistoryArray.push(city);
          localStorage.setItem('cities', JSON.stringify(locationHistoryArray));
        }
    }
  }, [isSuccess, data]);

  const submitCity = () => {
    refetch();
  }

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCity(e.target.value)
  }

  return (
      <>
      <div className="d-flex justify-content-center p-4">
       <Form.Group controlId="formBasicEmail" className="w-25 m-right" data-testid="search">
         <Form.Control type="text" placeholder="Search for a city" value={city} onChange={handleCityChange}/>
       </Form.Group>

       <Button variant="danger" onClick={submitCity} data-testid="search-button">
        Submit
       </Button>
      </div>
      {isSuccess && data.cod === '404' && <Alert key={'danger'} variant={'danger'}>
        {data.message}
      </Alert>}
     </>
  );
}

export default Search;
