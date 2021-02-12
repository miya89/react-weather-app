import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  
  const [weatherData, setWeatherData] =useState({ready: false})
  const [city, setCity] = useState(props.defaultCity);

  function handleSubmit(response)
{
 
  setWeatherData({
    ready: true,
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    description: response.data.weather[0].description,
    name: response.data.name,
    date: new Date(response.data.dt * 1000),
    wind: response.data.wind.speed,
    iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"

  });
}

function search() {
const apiKey ="f295e560e98c88b4fc75fe13d2fd268f";
let apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  axios.get(apiUrl).then(handleSubmit);
}

function handleCitySearch(event){
event.preventDefault();
search();
}

function handleCityChange(event){
setCity(event.target.value);

}

  if (weatherData.ready) {
return (
        <div className="Weather">
            <form onSubmit={handleCitySearch}> 
                <div className="row">
                    <div className="col-9">
                <input type="search" placeholder="Type city..."  className="form-control"  onChange={handleCityChange}/>
                </div>
                <div className="col-3">
                <input type="submit" value="Search"  className="btn btn-primary w-100" />
                </div>
                </div>
            </form>
            <WeatherInfo  data={weatherData} /> 
        </div>
    );
  } else {
    search();
    return "Loading..."
    
    
  }
    
}