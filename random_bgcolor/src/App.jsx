import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [intervalId, setIntervalId] = useState(null);

  const randomColor = () => {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const startChangingColor = () => {
    const id = setInterval(() => {
      document.body.style.backgroundColor = randomColor();
    }, 1000);
    setIntervalId(id);
  };

  const stopChangingColor = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  useEffect(() => {
    return () => clearInterval(intervalId);
  }, [intervalId]);

  return (
    <div id="Colorchange">
      <h2 id="start1">Click Start Button To Change a Background Color</h2>
      <h2 id="stop1">Click Stop Button To Change a Background Color</h2>
      <button id="start" onClick={startChangingColor}>Start</button>
      <button id="stop" onClick={stopChangingColor}>Stop</button>
    </div>
  );
};

export default App;
