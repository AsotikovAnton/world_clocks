import React from 'react';
import '../App.css';
import Clock from './Clock';

export default function ClocksList({clocks, handleRemove}) {
  return (
    <div className="clocks-list">
      {clocks
        .map((clock) => (
          <Clock key={clock.id} clock={clock} handleRemove={handleRemove} />
        ))}
    </div>
  )
}
