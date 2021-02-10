import logo from './logo.svg';
import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather />
      <footer> <a href="https://github.com/miya89/react-weather-app" target="_blank">Open-source code</a> by Miya Peynova</footer>
    </div>
    </div>
  );
}


