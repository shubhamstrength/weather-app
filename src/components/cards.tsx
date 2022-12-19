import Card from 'react-bootstrap/Card';
import './cards.css';
import { WeatherData } from "../types/weather-data";

interface CardProps {
    data: WeatherData;
}

const Cards: React.FC<CardProps> = ({data}) => {
  return (
      <div className="cards-layout d-flex justify-content-center">
        {Object.keys(data).length > 0 && data.main &&
            <Card border="secondary" style={{ width: '12rem' }}>
                <Card.Body>
                    <Card.Text>
                    {data.name}
                    </Card.Text>
                    <Card.Title>{data.main.temp}<span>°C</span></Card.Title>
                    <Card.Img className="width-class" src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}></Card.Img>
                    <Card.Text className='weather-description'>{data.weather[0].description}</Card.Text>
                </Card.Body>
            </Card>
        }
      </div>
  );
}

export default Cards;
