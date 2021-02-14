import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props){
const [loaded, setLoaded]=useState(false);
const [forecast, setForecast]=useState(null);

function handleForecastResponse(response){
    setForecast(response.data)
    setLoaded(true);
    }

    if (loaded) {
return (
<div className="WeatherForecast row">
    <div className="col">
        {new Date(forecast.list[0].dt *  1000).getHours()}:00
<WeatherIcon code={forecast.list[0].weather[0].icon} />
{Math.round(forecast.list[0].main.temp)} °C
</div> 
</div>);

       } else {
let apiKey= "f295e560e98c88b4fc75fe13d2fd268f"
let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
axios.get(url).then(handleForecastResponse);
    return null 
}
}