import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css"

export default function WaetherInfo(props){

    return (
        <div className="WeatherInfo">
 <h1>{props.data.name}</h1>
                        <ul>
                        <li>
                          <FormattedDate date={props.data.date} />
                        </li>
                        <li className="text-capitalize">{props.data.description}</li>
                        </ul>
              <div className="row">
                <div className="col-6">
                  <div className="float-left">
                  <WeatherIcon code={props.data.icon} />
                  </div>
            <WeatherTemperature celsius={props.data.temperature} />   
            </div>
             <div className="col-6">
           <ul className="right">
                            <li>Humidity: {props.data.humidity}%</li>
                            <li>Feels like: {Math.round(props.data.feels_like)} °C</li>
                            <li>Wind: {Math.round(props.data.wind)} km/h</li>
                    </ul>
             </div>
             </div>
        </div>
    );
}