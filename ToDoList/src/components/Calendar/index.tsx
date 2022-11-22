import { Day } from '../Day'
import { useState } from 'react'
import './style.css'
import React from 'react';



export function Calendar() {

  

  let date = new Date().toLocaleDateString(
    "pt-br",
    {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'    
    }
  )
  console.log(date);

  const [daySelect, setDaySelect] = useState<number>(1);

  return (
    <div className="calendar">
      <button onClick={() => setDaySelect(daySelect - 1)}>-</button>
      <button onClick={() => setDaySelect(daySelect + 1)}>+</button>
      <Day day={daySelect} />
    </div>
  )
}