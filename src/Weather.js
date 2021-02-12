import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  
  const [weatherData, setWeatherData] =useState({ready: false})

  function handleSubmit(response)
{
 
  setWeatherData({
    ready: true,
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    description: response.data.weather[0].description,
    name: props.defaultCity,
    date: new Date(response.data.dt * 1000),
    wind: response.data.wind.speed,
    iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"

  })
}
  if (weatherData.ready) {
return (
        <div className="Weather">
            <form> 
                <div className="row">
                    <div className="col-9">
                <input type="search" placeholder="Type city..."  className="form-control" />
                </div>
                <div className="col-3">
                <input type="submit" value="Search"  className="btn btn-primary w-100" />
                </div>
                </div>
            </form>
                <h1>{weatherData.name}</h1>
                        <ul>
                        <li>
                          <FormattedDate date={weatherData.date} />
                        </li>
                        <li className="text-capitalize">{weatherData.description}</li>
                        </ul>
              <div className="row">
                <div className="col-6">
                   <img src={weatherData.iconUrl} />
             <span className="temperature">{Math.round(weatherData.temperature)}</span><span className="unit">°C</span>
                    </div>
            <div className="col-6">
           <ul>
                            <li>Humidity: {weatherData.humidity}%</li>
                            <li>Wind: {Math.round(weatherData.wind)} km/h</li>
                    </ul>
             </div>
             </div>
        </div>
    );
  } else {
    const apiKey ="f295e560e98c88b4fc75fe13d2fd268f";
  const apiUrl =`https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`
  axios.get(apiUrl).then(handleSubmit);

    return "Loading..."
  }
    
}