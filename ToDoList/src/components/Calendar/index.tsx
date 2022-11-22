import { Day } from '../Day'
import { useState } from 'react'
import './style.css'
import React from 'react';



export function Calendar() {
  
  const [date, setDate] = useState<Date>(new Date)

  const tomorrow = () => {
    const newDate = date
    newDate.setDate(date.getDate() +1)
    setDate(newDate)
  }

  const yesterday = () => {
    const newDate = date
    newDate.setDate(date.getDate() -1)
    setDate(newDate)
    console.log(date.toLocaleDateString());
  }


  return (
    <div className="calendar">
      <button onClick={tomorrow}>+</button>
      <button onClick={yesterday}>-</button>
      <Day date={date.toLocaleDateString()} />
    </div>
  )
}