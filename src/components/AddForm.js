import React from 'react';
import '../App.css';

export default function AddForm({handleSubmit, handleChange, form}) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="clock-name container">
        <label className="clock-name-label label" htmlFor="label">Название</label>
        <input
          type="text"
          id="label"
          name="label"
          value={form.label}
          onChange={handleChange}
          required/>
      </div>
      <div className="time-zone container">
        <label className="time-zone-label label" htmlFor="timezone">Временная зона</label>
        <input
          type="number"
          id="timezone"
          name="timezone"
          value={form.timezone}
          onChange={handleChange}
          required/>
      </div>
      <button type="submit">Добавить</button>
    </form>
  )
}
