import React from 'react';
import Clock from './Clock';

import '../App.css';

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
