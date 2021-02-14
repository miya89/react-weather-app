import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props){
    return (
    <div className="WeatherForecastPreview col">
        {new Date(props.data.dt * 1000).getHours()}:00
<WeatherIcon code={props.data.weather[0].icon} />
{Math.round(props.data.main.temp)} °C
</div> 
);
}