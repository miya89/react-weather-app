import React , { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props){
    const [unit, setUnit]= useState("celsius");

     function showFahrenheite(event){
            event.preventDefault();
            setUnit("fahrenheite");
        }

        function showCelsius(event){
            event.preventDefault();
            setUnit("celsius");
        }

        function fahrenheite(){
           return (props.celsius * 9/5 ) +32;
        }


    if (unit === "celsius") {
    return (
    <div className="WeatherTemperature">
         <span className="temperature">{Math.round(props.celsius)}</span>
         <span className="unit">°C|<a href="/" onClick={showFahrenheite}>°F </a> </span>
                    </div>
    );
    } else {

        return (
<div className="WeatherTemperature">
         <span className="temperature">{Math.round(fahrenheite())}</span>
         <span className="unit"><a href="/" onClick={showCelsius}>°C</a>|°F </span>
                    </div>
        );
    }
}