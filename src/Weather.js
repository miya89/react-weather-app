import React from "react";
import "./Weather.css";

export default function Weather() {
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
                <h1>Cape Town</h1>
                        <ul>
                        <li>Tuesday 20:20</li>
                        <li>Clear with periodic clouds</li>
                        </ul>
              <div className="row">
                <div className="col-6">
                   <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" />
             <span className="temperature">22</span><span className="unit">°C</span>
                    </div>
            <div className="col-6">
           <ul>
                       <li>Precipitation:2%</li>
                            <li>Humidity: 73%</li>
                            <li>Wind 22 km/h</li>
                    </ul>
             </div>
             </div>
        </div>
    );
}