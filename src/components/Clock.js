import React, { useState, useEffect } from 'react';
import '../App.css';
import moment from 'moment';

export default function Clock({clock, handleRemove}) {
  const [time, setTime] = useState({
    hour: 360 / 12 * moment().utcOffset(+clock.timezone).format('hh') + moment().format('mm') / 2,
    minute: 360 / 60 * moment().format('mm'),
    second: 6 * moment().format('ss')
  });

  useEffect(() => {
    let interval = setInterval(() => {
      setTime(prevTime => ({
        // hour: prevTime.hour + (6 / 60 / 60),
        // minute: prevTime.minute + (6 / 60),
        // second: prevTime.second + 6
        hour: 360 / 12 * moment().utcOffset(+clock.timezone).format('hh') + moment().format('mm') / 2,
        minute: 360 / 60 * moment().format('mm'),
        second: 6 * moment().format('ss') + 6
      }));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="clock-analog-container">
      <div className="time-label">{clock.label}</div>
      <div className="clock-analog">
        <div style={{transform: `rotate(${time.second}deg)`}} className="second"></div>
        <div style={{transform: `rotate(${time.minute}deg)`}} className="minute"></div>
        <div style={{transform: `rotate(${time.hour}deg)`}} className="hour"></div>
        <div className="delete-clock" onClick={() => handleRemove(clock.id)}>x</div>
      </div>
    </div>
  )
}
