import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather">
            <form> 
                <div className="row">
                    <div className="col-8">
                <input type="search" placeholder="Type city..."  className="form-control" />
                </div>
                <div className="col-4">
                <input type="submit" value="Search"  className="btn btn-primary" />
                </div>
                </div>
            </form>
            <div className="row">
                <div className="col-6">   
                        <ul className="left">
                             <li>Cape Town, South Africa</li>
                        <li>Tuesday 20:20</li>
                        <li>Clear with periodic clouds</li>
                        </ul>
                </div>
                <div className="col-6">
                    <ul className="right">
                       <li>Precipitation:2%</li>
                            <li>Humidity: 73%</li>
                            <li>Wind 22 km/h</li>
                    </ul>
                </div>
            </div>
             <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" />
             <span className="temperature">22°C</span>
        </div>
    );
}