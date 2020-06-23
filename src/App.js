import React, { useState } from 'react';
import './App.css';
import AddForm from './components/AddForm';
import ClocksList from './components/ClocksList';
import { nanoid } from 'nanoid';

export default function App() {
  const [clocks, setClocks] = useState([
    {id: nanoid(), label: 'Moscow', timezone: '3'}
  ]);

  const [form, setForm] = useState({
    label: '',
    timezone: ''
  });

  const handleChange = ({target}) => {
    const name = target.name;
    const value = target.value;
    setForm(prevForm => ({...prevForm, [name]: value}));
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    setClocks([ ...clocks, {id: nanoid(), label: form.label, timezone: form.timezone}]);

    setForm({
      label: '',
      timezone: ''
    })
  }

  const handleRemove = (id) => {
    setClocks(prevClocks => prevClocks.filter(o => o.id !== id));
  }

  return (
    <>
      <AddForm handleChange={handleChange} handleSubmit={handleSubmit} form={form}/>
      <ClocksList clocks={clocks} handleRemove={handleRemove} />
    </>
  );
}
